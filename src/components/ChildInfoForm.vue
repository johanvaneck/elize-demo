<template>
  <ion-item>
    <ion-input v-model="firstName" label="First name" required />
  </ion-item>
  <ion-item>
    <ion-input v-model="lastName" label="Last name" required />
  </ion-item>
  <ion-item>
    <ion-input type="date" v-model="actualBirthday" label="Actual birthday" required />
  </ion-item>
  <ion-item>
    <ion-input type="date" v-model="expectedBirthday" label="Expected birthday" required />
  </ion-item>
  <ion-item>
    <ion-input v-model="hospital" label="Hospital" placeholder="(optional)" />
  </ion-item>
  <ion-item>
    <ion-input v-model="doctor" label="Doctor" placeholder="(optional)" />
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
    return { firstName: "", lastName: "", expectedBirthday: "", actualBirthday: "", hospital: "", doctor: "" }
  },
  methods: {
    async submit() {

      if ("" in [this.firstName, this.lastName, this.expectedBirthday, this.actualBirthday]) {
        this.showToast("Please fill in the required fields.")
        return
      }

      const { data: { session } } = await supabase.auth.getSession()
      const {
        data: parentData,
        error: parentError,
      } = await supabase
        .from('parent')
        .select()
        .eq('email', session?.user.email)

      if (parentError) {
        this.showToast(parentError.message)
      } else {
        this.showToast("Got parent.")
      }

      const parentId = parentData ? parentData[0].id : "";

      const { error: childError } = await supabase.from('child').insert({
        first_name: this.firstName,
        last_name: this.lastName,
        actual_birthday: this.actualBirthday,
        expected_birthday: this.expectedBirthday,
        hospital: this.hospital,
        doctor: this.doctor,
        parent_id: parentId,
      })
      if (childError) {
        this.showToast(childError.message)
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
