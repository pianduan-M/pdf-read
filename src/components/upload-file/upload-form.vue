<template>
  <div>
    <div>
      <el-form>
        <el-form-item label="书名：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="作者：">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="分类：">
          <el-cascader style="width: 100%"></el-cascader>
        </el-form-item>
        <el-form-item label="简介：">
          <el-input type="textarea"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  name: 'upload-form'
})
</script>
<script setup></script>

<style></style>
