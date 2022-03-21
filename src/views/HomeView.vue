<template>
  <div class="md:w-screen font-sans">
    <div class="header bg-indigo-100 p-8 md:w-screen md:p-0">
      <div
        class="user md:flex items-center justify-end md:py-4 md:max-w-7x1 md:m-auto md:px-4 md:container"
      >
        <!-- 头像 -->
        <home-avatar />
        <!-- 搜索 -->
        <home-search />
      </div>
      <!-- 海报 -->
      <home-poster />
    </div>
    <div class="main md:w-screen">
      <div class="md:container md:max-w-7x1 md:m-auto md:px-4">
        <!-- 阅读记录列表 -->
        <home-history></home-history>

        <div class="md:flex">
          <!-- 列表 -->
          <home-book-list></home-book-list>
          <home-cate class="hidden md:block"></home-cate>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeAvatar from '../components/avatar/index.vue'
import HomeSearch from '../components/search/index.vue'
import HomeHistory from '../components/home-history/index.vue'
import HomeBookList from '../components/home-book-list.vue'
import HomePoster from '../components/HomePoster.vue'
import HomeCate from '../components/HomeCate.vue'
</script>

<style></style>
