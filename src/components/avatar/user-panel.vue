<template>
  <div class="user-panel">
    <div
      class="user-panel__wrapper absolute bg-white w-96 h-96 box-shadow rounded-xl right-0 translate-x-10 top-16 transform z-50 shadow-2xl"
    >
      <div
        class="overflow-hidden w-full h-full flex justify-between flex-col rounded-xl"
      >
        <div class="flex-col flex justify-center items-center pt-8">
          <div
            class="avatar-img rounded-full w-24 h-24 mb-2 flex items-center justify-center"
          ></div>
          <div class="user-info text-3xl text-gray-800 md:text-lg">
            <span>PianDuan</span>
          </div>
        </div>

        <div class="text-center cursor-pointer bg-gray-100 py-2">
          <i class="iconfont icon-cloudupload algin-middle"></i> 上传书籍
        </div>
      </div>
    </div>

    <el-dialog
      v-model="dialogVisible"
      title="上传"
      width="30%"
      :before-close="handleClose"
    >
      <upload-file></upload-file>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'user-panel'
})
</script>
<script setup lang="ts">
import { ref, Ref } from 'vue'
import UploadFile from '../upload-file/index.vue'

let dialogVisible: Ref<boolean> = ref(true)

const handleClose = () => {
  dialogVisible.value = false
}
</script>

<style lang="scss">
.user-panel__wrapper {
  &::before {
    content: '';
    display: inline-block;
    border: 10px solid transparent;
    border-bottom-color: #fff;
    width: 10px;
    height: 10px;
    position: absolute;
    right: 45px;
    top: -20px;
  }
}
</style>
