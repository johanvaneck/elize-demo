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
import { uuid } from "@supabase/gotrue-js/dist/module/lib/helpers";

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
        console.log("No file provided or found.");
        return;
      }

      // Upload to Supabase
      const bucketPath = `public/video-${uuid()}.mp4`;
      const videoFile = event.target.files[0];
      const { data: bucketData } = await supabase.storage
        .from("videos")
        .upload(bucketPath, videoFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (bucketData) {
        // Get parent data
        const {
          data: { session },
        } = await supabase.auth.getSession();
        const { data: parentData, error } = await supabase
          .from("parent")
          .select()
          .eq("email", session?.user.email);

        console.log("Parent data:", parentData);
        console.log("Parent error:", error);

        const parentId = parentData ? parentData[0].id : "";

        // Get child data
        const { data: childData } = await supabase
          .from("child")
          .select()
          .eq("parent_id", parentId);

        console.log("Child data:", childData);

        const childId = childData ? childData[0].id : "";

        // Insert video data
        const { data: videoData } = await supabase.from("video").insert({
          child_id: childId,
          date_recorded: new Date(),
          bucket_path: bucketPath,
        });

        console.log("Video data:", videoData);
      }
    },
    onButtonClick() {
      const videoInput = document.getElementById("video-input");
      videoInput?.click();
    },
  },
};
</script>
