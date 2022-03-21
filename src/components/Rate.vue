<template>
  <div class="rate">
    <div class="rate-container">
      <span
        class="rate-item iconfont icon-start text-yellow-300"
        v-for="start in integer"
        :key="start"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'rate',
  props: {
    value: {
      type: [Number],
      default: 5
    }
  },
  computed: {
    integer() {
      return Math.floor(this.value)
    },
    decimal() {
      let _value = 0
      if (Math.floor(this.value) !== this.value) {
        _value = this.value.toString().split('.')[1].length || 0
      }
      if (_value > 5) {
        return 1
      }
      return 0
    }
  }
})
</script>
<script setup></script>

<style></style>
