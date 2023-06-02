<template>
  <ion-input v-bind="firstName" label="First name" />
  <ion-input v-bind="lastName" label="Last name" />
  <ion-button @click="submit" />
</template>

<script lang="ts">
import supabase from "@/supabase";
import {
  IonInput,
  toastController,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonInput
  },
  data() {
    return { firstName: "", lastName: "" }
  },
  methods: {
    async submit() {
      const { data: { user } } = await supabase.auth.getUser()
      const { error } = await supabase.from('parent').insert({
        email: user?.email,
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
