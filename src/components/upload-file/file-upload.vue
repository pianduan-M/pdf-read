<template>
  <div>
    <div class="file-list__wrapper flex flex-col justify-between">
      <div class="file-item flex justify-center flex-1 items-center">
        <span>{{ file ? file.name : '' }}</span>
        <i
          class="iconfont icon-close ml-2"
          @click="handleRemoveFile"
          @touchstart="handleRemoveFile"
        ></i>
      </div>

      <div>
        <div>
          <el-progress :percentage="100"></el-progress>
        </div>

        <div class="flex justify-center items-center py-6">
          <el-button type="primary">上传</el-button>
          <el-button type="info">取消</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'file-upload'
})
</script>
<script setup lang="ts">
import { defineEmits, defineProps, toRefs } from 'vue'
type FileType<T> = T | null

const props = defineProps<{
  file: FileType<File>
}>()

const { file } = toRefs(props)

const emit = defineEmits(['remove'])
const handleRemoveFile = () => {
  emit('remove', null)
}
</script>

<style lang="scss">
.file-list__wrapper {
  height: 300px;
}
</style>
