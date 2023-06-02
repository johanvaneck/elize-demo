<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Parent Info</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding ion-text-center" :fullscreen="true">
      <ion-text>
        <h1>Fill in parent (your) information</h1>
      </ion-text>
      <ParentInfoForm />
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
import ParentInfoForm from "@/components/ParentInfoForm.vue";
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
