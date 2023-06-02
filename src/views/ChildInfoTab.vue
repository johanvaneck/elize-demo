<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Child Info</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding ion-text-center" :fullscreen="true">
      <ion-text>
        <h1>Fill in your child's information</h1>
      </ion-text>
      <ChildInfoForm />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
} from "@ionic/vue";
import { defineComponent } from "vue";
import ChildInfoForm from "@/components/ChildInfoForm.vue";
defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonText,
  },
});
</script>
