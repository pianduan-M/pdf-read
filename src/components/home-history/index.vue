<template>
  <div class="">
    <div class="my-8 mx-4 pb-1 md:mx-0">
      <span class="font-bold text-xl text-gray-800"
        ><i class="iconfont icon-history text-3xl align-middle"></i>
        阅读记录</span
      >
    </div>
    <div class="py-8 bg-gray-100 md:bg-none overflow-hidden">
      <div ref="homeHistoryContainerRef" class="wrapper">
        <div class="history-list__wrap pb-4 inline-block">
          <history-item
            v-for="book in books"
            :key="book.id"
            :book-info="book"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HistoryItem from './history-item.vue'
import { reactive, onMounted, nextTick, ref, Ref } from 'vue'
import { initBScroll } from '../../hook/b-scroll'
type HomeHistoryContainer<T> = T | null

const _books = [
  {
    id: 1,
    bookName: 'JavaScript高级程序设计（第4版）',
    cover: '../../assets/img/cover/1.png'
  },
  {
    id: 2,
    bookName: "this's book name",
    cover: '../../assets/img/cover/1.png'
  },
  {
    id: 3,
    bookName: "this's book name",
    cover: '../../assets/img/cover/1.png'
  },
  {
    id: 4,
    bookName: "this's book name",
    cover: '../../assets/img/cover/1.png'
  }
]
const books = reactive(_books)

const homeHistoryContainerRef: Ref<HomeHistoryContainer<HTMLElement>> =
  ref(null)

onMounted(() => {
  nextTick(() => {
    if (homeHistoryContainerRef.value) {
      initBScroll(homeHistoryContainerRef.value, {
        scrollX: true,
        scrollY: false,
        preventDefault: false
      })
    }
  })
})
</script>

<style lang="scss">
// .wrapper {
//   width: 100%;
//   height: 300px;
//   overflow: hidden;
// }

.history-list__wrap {
  // width: 1000px;
  white-space: nowrap;
  display: flex;
  width: auto;
}
</style>
