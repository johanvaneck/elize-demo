<template>
  <div>
    <ion-button @click="onButtonClick">Upload Video</ion-button>
    <input
      id="video-input"
      style="display: none"
      name="video-upload"
      type="file"
      @change="onChange($event)"
    />
  </div>
</template>

<script lang="ts">
import supabase from "@/supabase";
import { IonButton } from "@ionic/vue";
import { decode } from "base64-arraybuffer";

export default {
  components: {
    IonButton,
  },
  data() {
    return {};
  },
  methods: {
    async onChange(event: any) {
      const file = event.target?.files[0];
      if (!file) {
        alert("No file found.");
        return;
      }
      console.log("Event target: ", file);
      // Upload to Supabase

      const videoFile = event.target.files[0];
      const { data, error } = await supabase.storage
        .from("videos")
        .upload("public/testing.mp4", videoFile, {
          cacheControl: "3600",
          upsert: false,
        });
        console.log(data);
        
    },
    onButtonClick() {
      const videoInput = document.getElementById("video-input");
      videoInput?.click();
      console.log(videoInput);
    },
  },
};
</script>
