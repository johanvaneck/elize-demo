<template>
  <ion-button @click="getItems('parent')">Parents</ion-button>
  <ion-button @click="getItems('child')">Children</ion-button>
  <ion-button @click="getItems('video')">Videos</ion-button>
  <ion-item v-for="item in items" :key="item">
    {{ item }}
  </ion-item>
</template>
<script lang="ts">
import supabase from "@/supabase";
import { IonButton, IonItem } from "@ionic/vue";

export default {
  components: {
    IonButton,
    IonItem,
  },
  data() {
    return { items: [""] };
  },
  methods: {
    async getItems(table: string) {
      const { data } = await supabase.from("video").select();
      const items: string[] = data ? data.map((it) => JSON.stringify(it)) : [];
      this.items = items;
    },
  },
};
</script>
