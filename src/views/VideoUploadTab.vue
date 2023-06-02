<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Upload</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding ion-text-center" :fullscreen="true">
      <VideoUploadButton />
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
} from "@ionic/vue";
import { defineComponent } from "vue";
import VideoUploadButton from "@/components/VideoUploadButton.vue";

defineComponent({
  components: {},
});
</script>
