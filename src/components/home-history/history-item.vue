<template>
  <div class="w-64 flex-shrink-0 ml-8 pt-20 cursor-pointer inline-block">
    <div class="history-item__wrap bg-white h-96 shadow-2xl relative">
      <div class="transform -translate-y-20">
        <div class="history-item__cover flex justify-center pl-8 pr-8">
          <img
            class="book-cover w-52 h-64 shadow-xl"
            src="../../assets/img/cover/1.png"
            mode="scaleToFill"
            lazy-load="false"
            binderror
            bindload
          />
        </div>
        <div class="">
          <div class="book-name px-8 text-center pt-4">
            <span class="font-bold text-sm">{{ bookInfo.bookName }}</span>
          </div>
          <div>
            <div class="date text-center">
              <span class="text-sm text-gray-400">2022-03-06</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex bg-gray-100 absolute w-full bottom-0 h-16 left-0">
        <div class="flex justify-around w-full items-center px-2 text-white">
          <div class="bg-yellow-500 w-full text-center py-2">
            <span>现在阅读</span>
          </div>
          <div class="px-4 text-center bg-yellow-200 py-2">10%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'history-item',
  props: {
    bookInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.history-item__wrap {
  height: 300px;
}

.history-item__cover {
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 40px;
    top: 0;
    width: 2px;
    background-color: rgba($color: #fff, $alpha: 0.2);
    height: 100%;
  }
}
</style>
