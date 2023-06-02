<template>
  <ion-button @click="getAllData">Get Data</ion-button>
  <ion-text>
    <h1>Parents</h1>
  </ion-text>

  <ion-grid v-for="parent in parents" :key="parent.id">
    <div v-if="parent.id !== ''">
      <ion-text>
        <h4>{{ parent.first_name }} {{ parent.last_name }}</h4>
      </ion-text>
      <ion-row v-for="(value, key) in parent" :key="key">
        <ion-col>
          {{ key }}
        </ion-col>
        <ion-col>
          {{ value }}
        </ion-col>
      </ion-row>
    </div>
  </ion-grid>

  <ion-text>
    <h1>Children</h1>
  </ion-text>

  <ion-grid v-for="child in children" :key="child.id">
    <div v-if="child.id !== ''">
      <ion-text>
        <h4>{{ child.first_name }} {{ child.last_name }}</h4>
      </ion-text>
      <ion-row v-for="(value, key) in child" :key="key">
        <ion-col>
          {{ key }}
        </ion-col>
        <ion-col>
          {{ value }}
        </ion-col>
      </ion-row>
    </div>
  </ion-grid>

  <ion-text>
    <h1>Videos</h1>
  </ion-text>

  <ion-grid v-for="video in videos" :key="video.id">
    <div v-if="video.id !== ''">
      <ion-row v-for="(value, key) in video" :key="key">
        <ion-col v-if="key === 'bucket_path'">
          <a v-bind:href="makeVideoUrl(value)">
            {{ key }}
          </a>
        </ion-col>
        <ion-col v-else>
          {{ key }}
        </ion-col>
        <ion-col>
          {{ value }}
        </ion-col>
      </ion-row>
    </div>
  </ion-grid>
</template>

<script lang="ts">
import supabase from "@/supabase";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonGrid,
    IonRow,
    IonCol,
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
        expected_birthday: "",
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
    };
  },
  methods: {
    async getUserId(email: string) {
      const { data: parentData } = await supabase
        .from('parent')
        .select()
        .eq('email', email)

      return parentData ? parentData[0]?.id : "";
    },
    async getParents(parentId: string) {
      const { data } = await supabase
        .from('parent')
        .select()
        .eq('id', parentId);

      const tableData = data ? data : []

      return tableData.map(it => ({
        id: it['id'],
        created_at: it['created_at'],
        email: it['email'],
        first_name: it['first_name'],
        last_name: it['last_name'],
      }))
    },
    async getChildren(parentId: string) {
      const { data } = await supabase
        .from('child')
        .select()
        .eq('parent_id', parentId)

      const tableData = data ? data : []

      return tableData.map(it => ({
        id: it['id'],
        created_at: it['created_at'],
        first_name: it['first_name'],
        last_name: it['last_name'],
        actual_birthday: it['actual_birthday'],
        expected_birthday: it['expected_birthday'],
        hospital: it['hospital'],
        doctor: it['doctor'],
        parent_id: it['hospital'],
      }))
    },
    async getVideos(childId: string) {
      const { data } = await supabase
        .from('video')
        .select()
        .eq('child_id', childId)
      const tableData = data ? data : []

      return tableData.map(it => ({
        id: it['id'],
        created_at: it['created_at'],
        bucket_path: it['bucket_path'],
        child_id: it['child_id'],
        description: it['description'],
        reviewed_by: it['reviewed_by'],
        date_recorded: it['date_recorded'],
      }))
    },
    async getAllData() {
      const { data } = await supabase.auth.getUser()
      const email = data.user?.email || ""
      const userId = await this.getUserId(email)
      this.parents = await this.getParents(userId)
      const parentId = this.parents[0].id
      this.children = await this.getChildren(parentId)
      const childId = this.children[0].id
      this.videos = await this.getVideos(childId)
    },
    makeVideoUrl(bucketPath: string) {
      return process.env.VUE_APP_SUPABASE_URL +
        "/storage/v1/object/public/videos/" +
        bucketPath || ""
    },
  },
});
</script>
