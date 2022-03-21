<template>
  <div class="search-history p-4">
    <div class="search-history__wrapper">
      <div class="sub-title text-lg font-bold">历史搜索</div>

      <div class="list__container flex flex-wrap">
        <div
          class="history-item py-1 px-4 bg-gray-100 m-1 rounded-3xl"
          v-for="item in 10"
          :key="item"
        >
          <div class="text">搜索记录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SearchHistory'
})
</script>

<style lang="scss"></style>
