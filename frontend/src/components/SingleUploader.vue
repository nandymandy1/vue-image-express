<template>
  <div class="form-group single-uploader">
    <label for="single_uploader" class="text-primary font-weight-bold">
      Single File Uploader
    </label>
    <div class="d-flex">
      <div>
        <input
          type="file"
          ref="uploader"
          id="single_uploader"
          @change="prepareUpload"
          class="uploader-input form-control"
        />
        <div
          class="uploader-mask d-flex justify-content-center align-items-center"
        >
          <svg
            v-if="uploadedFiles.length < 1"
            fill="none"
            class="upload-icon"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            title="Upload Photographs"
          >
            <path
              d="M8 17a5 5 0 01-.916-9.916 5.002 5.002 0 019.832 0A5.002 5.002 0 0116 17m-7-5l3-3m0 0l3 3m-3-3v12"
            />
          </svg>
          <svg
            v-else
            fill="none"
            class="upload-icon"
            title="Add More Phtos"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
      </div>
      <div class="ml-3 justify-content-center pt-2">
        <div class="progress mb-1" style="height: 5px;" v-if="uploading">
          <div
            role="progressbar"
            class="progress-bar bg-primary"
            :style="{ width: `${progress}%` }"
            :aria-valuenow="progress"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <div class="d-flex flex-wrap">
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
  </div>
</template>

<script>
import SingleUploadMixin from "@/mixins/singleUploader.js";
export default {
  mixins: [SingleUploadMixin],
};
</script>

<style lang="scss" scoped></style>
