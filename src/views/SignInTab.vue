<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding ion-text-center" :fullscreen="true">
      <ion-text>
        <h1>Welcome to the GMA Demo</h1>
        <p>Sign In with any dummy email and password:</p>
      </ion-text>
      <LoginForm />
      <ion-text>
        <p>The button should change color when logged in.</p>
      </ion-text>
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
import LoginForm from "@/components/LoginForm.vue";
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
