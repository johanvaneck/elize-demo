<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="sign-in" href="/tabs/sign-in">
          <ion-icon aria-hidden="true" :icon="logIn" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="parent" href="/tabs/parent">
          <ion-icon aria-hidden="true" :icon="person" />
          <ion-label>Parent</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="child" href="/tabs/child">
          <ion-icon aria-hidden="true" :icon="personOutline" />
          <ion-label>Child</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="video-upload" href="/tabs/video-upload">
          <ion-icon aria-hidden="true" :icon="cloudUpload" />
          <ion-label>Upload</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="view-uploads" href="/tabs/view-uploads">
          <ion-icon aria-hidden="true" :icon="download" />
          <ion-label>View</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { logIn, person, personOutline, cloudUpload, download } from "ionicons/icons";
</script>
