<template>
  <div class="home row mt-5 mb-5">
    <div class="col-sm-12 col-md-8 mx-auto">
      <div class="card">
        <div class="card-header bg-white">
          <h3 class="text-primary">Uploader</h3>
        </div>
        <div class="card-body">
          <form>
            <SingleUploader upload-endpoint="/api/images/single-dropzone" />
            <MultipleUploader upload-endpoint="/api/images/multiple-upload" />
            <DropzoneUploader upload-endpoint="/api/images/single-dropzone" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropzoneUploader from "@/components/DropZone";
import SingleUploader from "@/components/SingleUploader";
import MultipleUploader from "@/components/MultipleUploader";
export default {
  name: "Home",
  components: {
    SingleUploader,
    MultipleUploader,
    DropzoneUploader,
  },
};
</script>
