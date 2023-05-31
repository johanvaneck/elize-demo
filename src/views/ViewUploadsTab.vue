<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>View Uploads</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-text-center" :fullscreen="true">
      <ItemsList />
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
import ItemsList from "@/components/ItemsList.vue";

defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ItemsList,
  },
});
</script>
