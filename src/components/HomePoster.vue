<template>
  <div class="poster md:flex md:justify-around md:w-full md:py-20 lg:py-20">
    <div
      class="info flex-1 text-center md:text-left text-gray-800 md:ml-10 font-bold my-12 md:flex md:flex-col md:items-start md:justify-start md:w-2/4"
    >
      <div class="md:m-auto">
        <div class="text-4xl my-6">Hello! 我是片段</div>
        <span class="text-gray-800"
          >本网站所有书籍都只限于学习交流，如有侵权请联系删除。</span
        >
      </div>
    </div>
    <div
      class="img__wrapper relative flex item-center justify-center lg:justify-start flex-1 flex-shrink-0"
    >
      <img
        class="img w-full lg:w-3/4 xl:w-2/4 md:ml-10"
        src="../assets/img/posters/poster-book.svg"
        mode="widthFix"
      />

      <div
        class="label inline-block absolute left-10 bottom-10 p-2 rounded-lg border-2 border-purple-900 md:left-40 md:bottom-0 lg:left-10 lg:p-4"
      >
        <span class="font-bold text-purple-900 md:text-xs">PDF READ</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  name: 'HomePoster'
})
</script>
<script setup></script>

<style lang="scss">
.poster {
  .label {
    animation: rotate 1.5s infinite alternate;
  }
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(180deg);
  }
}
</style>
