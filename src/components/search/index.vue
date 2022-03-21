<template>
  <div
    class="search md:bg-transparent"
    :class="{
      'is-focus': isFocus,
      'md:relative': !isFocus,
      'md:w-64': !isFocus
    }"
  >
    <div
      class="hidden w-screen h-screen bg-black bg-opacity-50 md:absolute md:left-0 md:top-0 z-50"
      :class="{ 'md:block': isFocus }"
      @click="handleCloseSearch"
    ></div>
    <div
      class="search-main md:absolute md:-left-40 md:top-5 md:transform md:rounded-xl overflow-hidden md:-translate-y-full"
      @touchmove.prevent="(e) => e"
      @wheel.prevent="(e) => e"
    >
      <div class="search-main__wrap flex items-center">
        <div class="bg-gray-100 p-2 px-4 rounded-3xl flex-1 truncate">
          <span
            class="iconfont icon-search"
            selectable="false"
            space="false"
            decode="false"
          ></span>
          <input
            placeholder="search"
            class="search-input flex-1 px-2 outline-none bg-transparent placeholder-gray-400"
            type="span"
            @focus="onFocus"
            @blur="onBlur"
          />
        </div>
        <span
          class="ml-2 p-2 md:hidden"
          :class="{ hidden: !isFocus }"
          @click="handleCloseSearch"
          >取消</span
        >
      </div>

      <div
        class="search-content"
        :class="{ 'show-bg': isFocus, 'hide-bg': !isFocus }"
        v-if="isFocus"
      >
        <!-- 历史记录 -->
        <search-history v-show="resultList.length === 0" />

        <result v-show="resultList.length" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Result from './Result.vue'
import SearchHistory from './SearchHistory.vue'

import { ref, Ref } from 'vue'

const isFocus: Ref<boolean> = ref(false)

const resultList = ref([1])

const onFocus = () => {
  isFocus.value = true
}
const onBlur = () => {
  isFocus.value = true
}

const handleCloseSearch = () => {
  isFocus.value = false
}
</script>

<style lang="scss">
.is-focus .search-main {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--bg-color);
  z-index: 9999;
}

@media (min-width: 768px) {
  .is-focus .search-main {
    width: 600px;
    height: 500px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.show-bg {
  animation: showSearchBg 0.3s ease-out;
}

.hide-bg {
  animation: hideSearchBg 0.3s ease-in;
}

@keyframes showSearchBg {
  0% {
    opacity: 0.2;
  }

  100% {
    opacity: 1;
  }
}

@keyframes hideSearchBg {
  0% {
    display: block;
    opacity: 1;
  }

  100% {
    opacity: 0.2;
  }
}

.is-focus .search-main__wrap {
  position: absolute;
  left: 20px;
  right: 20px;
  top: 30px;
  z-index: 9999;
}

.search-content {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 10px;
}
</style>
