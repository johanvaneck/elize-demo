<template>
  <ion-item>
    <ion-input v-model="firstName" label="First name" required />
  </ion-item>
  <ion-item>
    <ion-input v-model="lastName" label="Last name" required />
  </ion-item>
  <ion-button @click="submit">Submit</ion-button>
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
    return { firstName: "", lastName: "" }
  },
  methods: {
    async submit() {

      if ("" in [this.firstName, this.lastName]) {
        this.showToast("Please fill in the required fields.")
        return
      }

      const { data: { session }, error: sessionError } = await supabase.auth.getSession()

      console.log("sessionData", session)
      console.log("sessionError", sessionError)

      const { error } = await supabase.from('parent').insert({
        email: session?.user.email,
        first_name: this.firstName,
        last_name: this.lastName,
      })
      if (error) {
        this.showToast(error.message)
      } else {
        this.showToast("Successfully added.")
      }
    },
    async showToast(message: string) {
      const toast = await toastController.create({
        message,
        duration: 5000,
      });
      return toast.present();
    }
  }
});
</script>
