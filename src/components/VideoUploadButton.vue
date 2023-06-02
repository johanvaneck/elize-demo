<template>
  <ion-text>
    <h1>
      Click to upload your video
    </h1>
  </ion-text>
  <ion-button @click="onButtonClick">Upload Video</ion-button>
  <input id="video-input" style="display: none" name="video-upload" type="file" @change="onChange($event)" />
</template>

<script lang="ts">
import supabase from "@/supabase";
import { IonButton, toastController } from "@ionic/vue";
import { uuid } from "@supabase/gotrue-js/dist/module/lib/helpers";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonButton,
  },
  data() {
    return {};
  },
  methods: {
    async onChange(event: any) {
      let feedback = ""
      const file = event.target?.files[0];
      if (!file) {
        console.log("No file provided or found.");
        return;
      }

      try {
        //// Get required data first
        // Get parent data
        const {
          data: { session }
        } = await supabase.auth.getSession()
        const { data: parentData, error: parentError } = await supabase
          .from("parent")
          .select()
          .eq("email", session?.user.email);

        feedback += (parentError ? "\nparentError: " + parentError.message : "")

        const parentId = parentData ? parentData[0].id : "";

        // Get child data
        const { data: childData, error: childError } = await supabase
          .from("child")
          .select()
          .eq("parent_id", parentId);

        feedback += (childError ? "\nchildError: " + childError.message : "")

        const childId = childData ? childData[0].id : "";

        // Upload to Supabase
        const bucketPath = `public/video-${uuid()}.mp4`;
        const videoFile = event.target.files[0];
        const { error: bucketError } = await supabase.storage
          .from("videos")
          .upload(bucketPath, videoFile, {
            cacheControl: "3600",
            upsert: false,
          });
        feedback += (bucketError ? "\nbucketError: " + bucketError.message : "")

        // Insert video data
        const { error: videoError } = await supabase.from("video").insert({
          child_id: childId,
          date_recorded: new Date(),
          bucket_path: bucketPath,
        });

        feedback += (videoError ? "\nvideoError: " + videoError.message : "")

        const message = feedback === "" ? "Successfully uploaded video." : feedback
        const toast = await toastController.create({
          message,
          duration: 2000,
        });
        toast.present();

      } catch (e) {
        const toast = await toastController.create({
          message: feedback,
          duration: 2000,
        });
        toast.present();
      }
    },
    onButtonClick() {
      const videoInput = document.getElementById("video-input");
      videoInput?.click();
    },
  },
});
</script>
