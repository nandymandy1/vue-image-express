<template>
  <div class="multiple-uploader form-group">
    <label for="multi_uploader" class="text-primary font-weight-bold">
      Multiple Files Uploader
    </label>
    <div class="d-flex">
      <div>
        <input
          multiple
          type="file"
          ref="uploader"
          id="multi_uploader"
          @change="prepareFiles"
          class="uploader-input form-control"
        />
        <div
          class="uploader-mask d-flex justify-content-center align-items-center"
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
      <div class="d-flex flex-column ml-3">
        <div class="progress mb-2" style="height: 5px;" v-if="uploading">
          <div
            class="progress-bar bg-primary"
            role="progressbar"
            :style="{ width: `${progress}%` }"
            :aria-valuenow="progress"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <div class="d-flex justify-content-start flex-wrap">
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
import _ from "lodash";
import API from "@/services/api";

export default {
  data: () => ({
    files: [],
    progress: 0,
    uploading: false,
    uploadedFiles: [],
  }),
  methods: {
    async prepareFiles() {
      const files = this.$refs.uploader.files;
      this.files = [...this.files, ...files];
      if (this.files.length) {
        await this.uploadFiles();
      }
    },

    async uploadFiles() {
      this.uploading = true;
      let formData = new FormData();
      await _.forEach(this.files, (file) => formData.append("files", file));
      let { data } = await API.post(this.uploadEndpoint, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (e) =>
          (this.progress = Math.round((e.loaded * 100) / e.total)),
      });
      this.files = [];
      this.progress = 0;
      this.uploading = false;
      this.$refs.uploader.value = "";
      this.uploadedFiles = [...this.uploadedFiles, ...data];
    },
  },
  props: {
    uploadEndpoint: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
