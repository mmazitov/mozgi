<script setup>
  import { onMounted } from 'vue';
  import AppHeader from '@/components/header/AppHeader.vue';
  import { usePageTransition } from '@/composables/usePageTransition';

  const { transitionHolder, setupTransition } = usePageTransition();

  onMounted(() => {
    transitionHolder.value.classList.add('left');
    setupTransition();
  });
</script>

<template>
  <AppHeader />
  <div ref="transitionHolder" class="transition-holder"></div>
  <div class="transition-container">
    <router-view v-slot="{ Component }">
      <transition
        name="page-transition"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
.transition-holder {
  @apply top-0 z-[100] absolute bg-[#ffcb46] w-full h-full transition-[left] duration-500;
}
.transition-holder.left {
  @apply left-[-100%] opacity-0;
}
.transition-holder.center {
  @apply left-0 opacity-100;
}
.transition-holder.right {
  @apply left-[100%];
}
</style>
