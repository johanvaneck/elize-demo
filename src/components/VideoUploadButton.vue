<template>
  <div>
    <ion-text>
      <h1>
        Click to upload
      </h1>
    </ion-text>
    <ion-button @click="onButtonClick">Upload Video</ion-button>
    <input id="video-input" style="display: none" name="video-upload" type="file" @change="onChange($event)" />
    <ion-text>
      <h1>
        Feedback
      </h1>
      <pre>
        {{ feedback }}
      </pre>
    </ion-text>
  </div>
</template>

<script lang="ts">
import supabase from "@/supabase";
import { IonButton } from "@ionic/vue";
import { uuid } from "@supabase/gotrue-js/dist/module/lib/helpers";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonButton,
  },
  data() {
    return { feedback: "" };
  },
  methods: {
    async onChange(event: any) {
      const file = event.target?.files[0];
      if (!file) {
        console.log("No file provided or found.");
        return;
      }

      try {
        //// Get required data first
        // Get parent data
        const {
          data: { user }
        } = await supabase.auth.getUser()
        const { data: parentData, error: parentError } = await supabase
          .from("parent")
          .select()
          .eq("email", user?.email);

        this.feedback += (parentError ? "\nparentError: " + parentError.message : "")
        this.feedback += (parentData ? "\nparentSuccess: " + parentData : "")

        const parentId = parentData ? parentData[0].id : "";

        // Get child data
        const { data: childData, error: childError } = await supabase
          .from("child")
          .select()
          .eq("parent_id", parentId);

        this.feedback += (childError ? "\nchildError: " + childError.message : "")
        this.feedback += (childData ? "\nchildSuccess: " + childData : "")

        const childId = childData ? childData[0].id : "";

        // Upload to Supabase
        const bucketPath = `public/video-${uuid()}.mp4`;
        const videoFile = event.target.files[0];
        const { data: bucketData, error: bucketError } = await supabase.storage
          .from("videos")
          .upload(bucketPath, videoFile, {
            cacheControl: "3600",
            upsert: false,
          });
        this.feedback += (bucketError ? "\nbucketError: " + bucketError.message : "")
        this.feedback += (bucketData ? "\nbucketSuccess: " + bucketData : "")

        // Insert video data
        const { error: videoError } = await supabase.from("video").insert({
          child_id: childId,
          date_recorded: new Date(),
          bucket_path: bucketPath,
        });

        this.feedback += (videoError ? "\nvideoError: " + videoError.message : "")
        this.feedback += (!videoError ? "\nvideoSuccess: " + `${bucketPath} added to table.` : "")
      } catch (e) {
        console.log(e)
      }
    },
    onButtonClick() {
      const videoInput = document.getElementById("video-input");
      videoInput?.click();
    },
  },
});
</script>
