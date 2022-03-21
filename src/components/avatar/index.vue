<template>
  <div
    class="avatar md:flex md:items-center cursor-pointer relative md:-mr-60"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
  >
    <div
      class="avatar-img rounded-full w-12 h-12 mb-8 md:mb-0 flex items-center justify-center"
    >
      <!-- <span class="iconfont icon-icon_avatar text-3xl text-gray-300"></span> -->
    </div>

    <!-- <div class="user-info text-3xl text-gray-800 my-4 md:ml-4 md:text-lg">
      <span>PianDuan</span>
    </div> -->

    <transition name="fade">
      <div v-show="isShow">
        <user-panel />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'avatar'
})
</script>

<script lang="ts" setup>
import UserPanel from './user-panel.vue'
import { Ref, ref } from 'vue'

let isShow: Ref<boolean> = ref(false)

const onMouseenter = () => {
  isShow.value = true
}

const onMouseleave = () => {
  isShow.value = true
}
</script>

<style lang="scss">
.avatar-img {
  overflow: hidden;
  background-image: url('../../assets/img/avatar-default.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>
