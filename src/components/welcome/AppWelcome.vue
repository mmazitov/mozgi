<script setup>
  import { useMouseMove } from '@/composables/useMouseMove';
  import AppLink from '@/components/AppLink.vue';
  import WelcomeSpinner from './welcomeComponents/WelcomeSpinner.vue';

  const { textStyle, handleMouseMove } = useMouseMove();
</script>

<template>
  <section
    class="relative flex justify-center items-center h-screen"
    @mousemove="handleMouseMove"
  >
    <AppLink text="who?" url="/about" class="md:block bottom-[19px] left-[50%] absolute hidden transition-x-[-50%]" />
    <AppLink text="what?" url="/about" class="md:block top-[50%] left-[-19px] absolute hidden transition-y-[-50%] rotate-[-90deg]" />
    <AppLink text="where?" url="/about" class="md:block top-[50%] right-[-19px] absolute hidden transition-y-[-50%] rotate-[90deg]" />

    <div class="welcome">
      <h1
        class="relative z-[1] text-[#373737] text-[34px] text-center md:text-[58px] xl:text-[82px] leading-[37px] md:leading-[64px] xl:leading-[90px] transition-transform duration-100 ease-linear giga-bold"
        :style="textStyle"
      >
        FULL-CYCLE
        <br />
        EVENT AGENCY
      </h1>
      <WelcomeSpinner />
    </div>
  </section>
</template>

<script>
  export default {
		name: 'AppWelcome',
	}
</script>

<style lang="scss" scoped>
  .welcome {
    @apply relative;
    &:before {
      content: '';
      @apply top-[50%] left-[50%] z-0 absolute bg-[#ffcb46] blur-[23px] md:blur-[38px] rounded-full w-[294px] md:w-[482px] xl:w-[578px] h-[294px] md:h-[482px] xl:h-[578px] transform translate-x-[-50%] translate-y-[-50%];
    }
  }
</style>
