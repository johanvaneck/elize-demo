<template>
  <ion-button :disabled="loggedIn" v-bind:color="loggedIn ? 'primary' : 'danger'" @click="signIn">
    {{ loggedIn ? "Logged in": "Log in" }}
  </ion-button>
</template>

<script lang="ts">
import supabaseClient from "@/supabase";
import { IonButton } from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    IonButton,
  },
  data() {
    return { loggedIn: false };
  },
  methods: {
    async signIn() {
      const {
        data: { session },
      } = await supabaseClient.auth.getSession();
      if (!session) {
        this.loggedIn = true;
      } else {
        const { error } = await supabaseClient.auth.signInWithPassword({
          email: "jve.software@gmail.com",
          password: "verysecurepassword",
        });
        this.loggedIn = !error;
      }
    },
  },
});
</script>
