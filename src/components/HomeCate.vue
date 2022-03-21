<template>
  <div class="home-cate px-8 my-8">
    <div
      class="font-bold text-xl text-gray-800 mb-8 border-b-2 pb-1 align-middle"
    >
      <span
        ><i class="iconfont icon-cate text-3xl align-middle"></i> 热门分类</span
      >
    </div>
    <div>
      <div v-for="cate in bookCate" :key="cate.cateName">
        <div class="my-2">
          <span>{{ cate.cateName }}</span>
        </div>
        <div class="flex flex-wrap">
          <div
            v-for="label in cate.children"
            :key="label.name"
            class="p-1 px-4 bg-gray-100 m-1 text-center text-blue-400 cursor-pointer hover:bg-gray-200"
          >
            <span>{{ label.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  name: 'HomeCate'
})
</script>
<script lang="ts" setup>
import { reactive } from 'vue'

const _bookCate = [
  {
    cateName: '前端',
    children: [
      {
        name: 'js'
      },
      {
        name: 'css'
      },
      {
        name: 'html'
      },
      {
        name: 'vue'
      },
      {
        name: 'react'
      },
      {
        name: 'es6'
      }
    ]
  },
  {
    cateName: '后端',
    children: [
      {
        name: 'node'
      }
    ]
  },
  {
    cateName: 'HTTP',
    children: [
      {
        name: 'TCP_IP'
      }
    ]
  },
  {
    cateName: '其他',
    children: [
      {
        name: 'web 安全'
      },
      {
        name: '性能优化'
      },
      {
        name: '正则'
      }
    ]
  }
]

const bookCate = reactive(_bookCate)
</script>

<style>
@media (min-width: 768px) {
  .home-cate {
    width: 300px;
  }
}
</style>
