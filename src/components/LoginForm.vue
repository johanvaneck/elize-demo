<template>
  <ion-item>
    <ion-input label="Email" placeholder="your dummy email" v-model="email" />
  </ion-item>
  <ion-item>
    <ion-input label="Password" placeholder="your dummy password" type="password" v-model="password" />
  </ion-item>
  <ion-button :disabled="loggedIn" v-bind:color="loggedIn ? 'primary' : 'danger'" @click="signIn">
    {{ loggedIn ? "Logged in" : "Log in" }}
  </ion-button>
</template>

<script lang="ts">
import supabase from "@/supabase";
import {
  IonItem,
  IonInput,
  IonButton,
  toastController,
} from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    IonItem,
    IonInput,
    IonButton,
  },
  data() {
    return { email: "", password: "", loggedIn: false };
  },
  methods: {
    async signIn() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        this.loggedIn = true;
        return
      }

      const { error, data } = await supabase.auth.signInWithPassword({
        email: this.email,
        password: this.password,
      });

      console.log("data from sign in:", data)

      if (error?.message == 'invalid_grant') {
        return this.showToast("Invalid Credentials")
      }

      // Assume error indicates a user does not exist
      if (error) {
        this.loggedIn = await this.signUp();
      }

      console.log(await supabase.auth.getSession())
    },
    async signUp() {
      const { data, error } = await supabase.auth.signUp({
        email: this.email,
        password: this.password,
      });
      console.log("Data from sign up: ", data)
      return !error
    },
    async showToast(message: string) {
      const toast = await toastController.create({
        message,
        duration: 5000,
      });
      return toast.present();
    }
  },
});
</script>
