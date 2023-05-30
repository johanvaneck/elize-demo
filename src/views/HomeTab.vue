<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding ion-text-center" :fullscreen="true">
      <ion-text><h1>Welcome to the GMA Demo</h1></ion-text>
      <LoginButton />
      <ion-text
        ><p>The button should change color when logged in.</p>
      </ion-text>
    </ion-content>
    <ion-footer>
      <ion-toolbar class="ion-padding">
        <h4>Next Step</h4>
        <p>
          After logging in, you can proceed to the next tab to upload the video.
        </p>
      </ion-toolbar>
    </ion-footer>
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
  IonFooter,
} from "@ionic/vue";
import { defineComponent } from "vue";
import LoginButton from "@/components/LoginButton.vue";
defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonText,
    IonFooter,
  },
});
</script>
