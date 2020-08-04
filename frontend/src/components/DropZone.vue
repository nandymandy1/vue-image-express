<template>
  <div class="dropzone-uploader form-group">
    <label for="dropzone" class="text-primary font-weight-bold"
      >Dropzone Files Uploader</label
    >
    <div class="d-flex flex-column mx-auto">
      <div>
        <input
          multiple
          type="file"
          id="dropzone"
          ref="uploader"
          @change="prepareUpload"
          class="dropzone-input form-control"
        />
        <div
          :class="[
            'dropzone-mask d-flex justify-content-center align-items-center',
            uploading ? 'bg-my-info' : 'bg-white',
          ]"
        >
          <svg
            class="upload-icon"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M8 17a5 5 0 01-.916-9.916 5.002 5.002 0 019.832 0A5.002 5.002 0 0116 17m-7-5l3-3m0 0l3 3m-3-3v12"
            />
          </svg>
        </div>
      </div>
      <div class="progress mt-2" style="height: 5px;" v-if="uploading">
        <div
          role="progressbar"
          class="progress-bar bg-primary"
          :style="{ width: `${progress}%` }"
          :aria-valuenow="progress"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
      <div class="d-flex mt-3 d-flex justify-content-start flex-wrap">
        <img
          v-for="(img, i) in uploadedFiles"
          :src="img"
          :key="i"
          class="img-thumbnail mt-1 mr-2"
          height="60px"
          width="60px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleUploadMixin from "@/mixins/singleUploader.js";
export default {
  mixins: [SingleUploadMixin],
};
</script>

<style lang="scss" scoped>
.dropzone-uploader {
  .bg-my-info {
    background: #c2e2f7 !important;
  }
}
</style>
