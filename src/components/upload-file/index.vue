<template>
  <div>
    <div>
      <div>
        <file-input
          @change="onFileInputChange"
          v-show="!uploadFile"
        ></file-input>

        <file-upload
          v-show="uploadFile"
          :file="uploadFile"
          @remove="handleRemoveFile"
        ></file-upload>
      </div>

      <upload-form></upload-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, Ref } from 'vue'
export default defineComponent({
  name: 'upload-file'
})
</script>
<script setup lang="ts">
import FileInput from './file-input.vue'
import UploadForm from './upload-form.vue'
import FileUpload from './file-upload.vue'

type FileType<T> = T | null

let uploadFile: Ref<FileType<File>> = ref(null)
const onFileInputChange = (file: File) => {
  uploadFile.value = file
}

const handleRemoveFile = () => {
  uploadFile.value = null
}
</script>

<style></style>
