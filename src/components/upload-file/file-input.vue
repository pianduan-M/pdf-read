<template>
  <div>
    <div
      class="file-input w-full border-2 border-dashed border-gray-500 flex justify-center items-center flex-col py-8"
      @click="handleInputClick"
      @touchstart="handleInputClick"
      @dragover="handleDragover"
      @dragenter="handleDragenter"
      @dragleave="handleDragleave"
      @drop="handleDrop"
      :style="fileInputWrapStyle"
    >
      <input type="file" class="hidden" ref="inputRef" @input="onInput" />
      <i class="iconfont icon-cloudupload text-9xl"></i>
      <div class="hidden md:block">
        <span>Drop file here or </span>
        <el-button type="text">click to upload</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, reactive } from 'vue'
export default defineComponent({
  name: 'file-input'
})
</script>
<script setup lang="ts">
import { defineEmits } from 'vue'

const emit = defineEmits(['change'])

type RefHTMLElement<T> = T | null

const inputRef: Ref<RefHTMLElement<HTMLElement>> = ref(null)
let fileInputWrapStyle = reactive({
  borderColor: 'gray'
})
const handleInputClick = () => {
  if (inputRef.value) {
    inputRef.value?.click()
  }
}
const onInput: (ev: Event) => void = (ev) => {
  const target = ev.target as HTMLInputElement
  if (target.files) {
    const file = target.files[0]
    emit('change', file)
  }
}

// 当被拖动的对象在另一对象容器范围内拖动时触发此事件
const handleDragover: (ev: Event) => void = (ev: Event) => {
  ev.preventDefault()
}
// 被鼠标拖动的对象进入其容器范围内时触发此事件
const handleDragenter: () => void = () => {
  fileInputWrapStyle.borderColor = 'purple'
}
// 当被鼠标拖动的对象离开其容器范围内时触发此事件
const handleDragleave: () => void = () => {
  console.log('handleDragleave')
  fileInputWrapStyle.borderColor = 'gray'
  // fileInputWrapStyle = {}
}
const handleDrop: (ev: any) => void = (ev) => {
  ev.preventDefault()
  if (ev.dataTransfer) {
    const file = ev.dataTransfer.files[0]
    emit('change', file)
  }
}
</script>

<style lang="scss">
.file-input {
  height: 300px;
}
</style>
