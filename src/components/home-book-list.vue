<template>
  <div class="home-book-list md:px-0 py-8 flex-1">
    <div class="mb-8 pb-1 md:border-b-2 md:pb-1 md:w-11/12 px-4">
      <span class="font-bold text-xl text-gray-800"
        ><i class="iconfont icon-Books text-3xl align-middle"></i>
        新书列表</span
      >
    </div>
    <div class="flex">
      <div class="book-list__wrap w-full px-4 md:flex md:flex-wrap">
        <div
          class="transition ease-in-out duration-300 book-item transform relative bg-blue-100 p-4 rounded-lg shadow-xl flex mb-6 md:mr-6 md:flex-col md:shadow-none md:bg-transparent md:hover:shadow-xl md:hover:scale-110 md:hover:-translate-y-10 cursor-pointer"
          v-for="item in 10"
          :key="item"
        >
          <div class="book-cover">
            <img
              class="cover-img w-24 h-32 rounded-lg md:w-48 md:h-64 md:rounded-none"
              src="~@/assets/img/cover/3.png"
            />
          </div>
          <div
            class="book-info ml-4 h-full flex flex-col justify-between md:relative md:ml-0 md:p-2 md:text-center md:w-48"
          >
            <div class="book-name font-medium text-gray-800">
              <span class="text-lg"> JavaScript高级程序设计（第4版）</span>
            </div>
            <div class="book-author">佚名</div>
            <div
              class="btn flex absolute bottom-4 md:static md:w-full md:justify-center"
            >
              <!-- <div class="btn-span">开始阅读</div>
            <div class="read-percentage">50%</div> -->
              <rate />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Rate from './Rate.vue'
</script>

<style lang="scss"></style>
