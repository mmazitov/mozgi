<script setup>
  import { ref } from 'vue';
  import AppLink from '@/components/AppLink.vue';
  const isHovered = ref(false);
</script>

<template>
  <div
    class="lang-menu"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <ul
      class="lang-items"
      :class="{ 'active': isHovered }">
      <li
        class="lang-item"
        :class="{ 'visible': isHovered }"
        :style="{ transitionDelay: '0s' }"
      >
        <AppLink text="ENG" url="#" class="relative"/>
      </li>
      <li
        class="lang-item"
        :class="{ 'visible': isHovered }"
        :style="{ transitionDelay: '.2s' }"
      >
        <AppLink text="RU" url="#"  class="relative"/>
      </li>
      <li
        class="lang-item"
        :class="{ 'visible': isHovered }"
        :style="{ transitionDelay: '.4s' }"
      >
        <AppLink text="UA" url="#"  class="relative"/>
      </li>
    </ul>
    <button class="flex justify-center items-center border-[1px] border-[rgba(255,255,255,0.12)] rounded-full w-[38px] h-[38px] pointer-events-auto">
      <img src="@/assets/img/menu-icon.png" alt="">
    </button>
  </div>
</template>

<script>
  export default {
    name: 'LangMenu',
  }
</script>


<style scoped>
  .lang-menu {
    @apply top-[28px] left-[24px] absolute flex items-center pointer-events-auto;
  }
  .lang-items {
    @apply top-[38px] left-[-50px] absolute opacity-0 transition-all translate-y-[-50] duration-500 pointer-events-auto;
    &.active {
      @apply opacity-100 translate-y-0;
    }
  }

.lang-item {
  @apply opacity-0 transition-all translate-x-0 duration-500;
  &.visible {
    @apply opacity-100 translate-x-[50px];
  }
}
</style>
