import API from "@/services/api";
export default {
  data: () => ({
    file: null,
    progress: 0,
    uploading: false,
    uploadedFiles: [],
  }),
  methods: {
    async prepareUpload() {
      this.file = this.$refs.uploader.files;
      if (this.file) {
        await this.uploadFile();
      }
    },

    async uploadFile() {
      this.uploading = true;
      let formData = new FormData();
      formData.append("file", this.file);
      this.file = null;
      let { data } = await API.post(this.uploadEndpoint, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (e) =>
          (this.progress = Math.round((e.loaded * 100) / e.total)),
      });
      this.progress = 0;
      this.uploading = false;
      this.$refs["uploader"].value = null;
      this.uploadedFiles = [...this.uploadedFiles, data.img];
    },
  },
  props: {
    uploadEndpoint: {
      type: String,
      required: true,
    },
  },
};
