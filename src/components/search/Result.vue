<template>
  <div class="search-result">
    <div class="result-container p-4">
      <div class="sub-title text-lg font-bold">搜索结果</div>
      <div class="search-result__wrapper" ref="searchResultContainer">
        <div>
          <div
            class="resulte-item flex p-4 mb-2 bg-gray-100 rounded-xl"
            v-for="item in 10"
            :key="item"
          >
            <div class="book-cover">
              <img
                class="cover w-10 mr-2"
                model="scaleToFill"
                src="../../assets/img/cover/6.webp"
              />
            </div>
            <div class="book-info">
              <div class="book-name">JavaScript高级程序设计（第4版）</div>
              <div class="book-author">佚名</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Result'
})
</script>
<script setup lang="ts">
import { ref, onMounted, Ref, nextTick } from 'vue'
import { initBScroll } from '../../hook/b-scroll'
type SearchResultContainer<T> = T | null
const searchResultContainer: Ref<SearchResultContainer<HTMLElement>> = ref(null)

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      if (searchResultContainer.value) {
        initBScroll(searchResultContainer.value, {
          scrollX: false,
          scrollY: true,
          probeType: 3,
          click: true,
          preventDefault: true,
          stopPropagation: true
        })
      }
    }, 100)
  })
})
</script>

<style lang="scss">
.search-result__wrapper {
  overflow: hidden;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 20px;
}
</style>
