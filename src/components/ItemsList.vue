<template>
  <ion-button @click="getItems('parent')">Parents</ion-button>
  <ion-button @click="getItems('child')">Children</ion-button>
  <ion-button @click="getItems('video')">Videos</ion-button>
  <ion-text>
    <h1>Parents</h1>
  </ion-text>
  {{ parents }}
  <ion-text>
    <h1>Children</h1>
  </ion-text>
  {{ children }}
  <ion-text>
    <h1>Videos</h1>
  </ion-text>
  {{ videos }}
  <ion-text>
    <h1>Video Url</h1>
  </ion-text>
  <a v-bind:href="videoUrl">
    {{ videoUrl }}
  </a>
</template>
<script lang="ts">
import supabase from "@/supabase";
import {
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonButton,
  },
  data() {
    return {
      parents: [{
        id: "",
        created_at: "",
        email: "",
        first_name: "",
        last_name: "",
      }],
      children: [{
        id: "",
        created_at: "",
        first_name: "",
        last_name: "",
        actual_birthday: "",
        expected_birtday: "",
        hospital: "",
        doctor: "",
        parent_id: "",
      }],
      videos: [{
        id: "",
        created_at: "",
        bucket_path: "",
        child_id: "",
        description: "",
        reviewed_by: "",
        date_recorded: "",
      }],
      videoUrl: '',
    };
  },
  methods: {
    async getItems(table: string) {
      const { data } = await supabase.from(table).select();
      const tableData = data ? data : []

      switch (table) {
        case 'parent':
          this.parents = tableData.map(it => ({
            id: it['id'],
            created_at: it['created_at'],
            email: it['email'],
            first_name: it['first_name'],
            last_name: it['last_name'],
          }))
          break;

        case 'child':
          this.children = tableData.map(it => ({
            id: it['id'],
            created_at: it['created_at'],
            first_name: it['first_name'],
            last_name: it['last_name'],
            actual_birthday: it['actual_birthday'],
            expected_birtday: it['expected_birtday'],
            hospital: it['hospital'],
            doctor: it['doctor'],
            parent_id: it['hospital'],
          }))
          break;

        case 'video':
          this.videos = tableData.map(it => ({
            id: it['id'],
            created_at: it['created_at'],
            bucket_path: it['bucket_path'],
            child_id: it['child_id'],
            description: it['description'],
            reviewed_by: it['reviewed_by'],
            date_recorded: it['date_recorded'],
          }))
          break;
      }
      this.videoUrl = process.env.VUE_APP_SUPABASE_URL +
        "/storage/v1/object/public/videos/" +
        this.videos[0]['bucket_path'] || ""
    },
  },
});
</script>
