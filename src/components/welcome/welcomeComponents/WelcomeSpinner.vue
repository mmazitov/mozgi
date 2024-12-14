<template>
  <div class="right-[75px] md:right-[130px] xl:right-[246px] bottom-[-125px] md:bottom-[-145px] xl:bottom-[-165px] absolute flex justify-center items-center rounded-full w-[90px] md:w-[112px] xl:w-[118px] h-[90px] md:h-[112px] xl:h-[118px] cursor-pointer" @mouseenter="startAnimation" @mouseleave="pauseAnimation">
    <!-- Circle words -->
    <div
      ref="circleText"
      class="absolute flex flex-wrap justify-center items-center w-full h-full transform circle-text"
      :style="rotateStyle"
    >
      <!-- First word -->
      <span>S</span>
      <span>H</span>
      <span>O</span>
      <span>W</span>
      <span>R</span>
      <span>E</span>
      <span>E</span>
      <span>L</span>
      <!-- Space between word -->
      <span class="space"></span>
      <!-- Second word -->
      <span>S</span>
      <span>H</span>
      <span>O</span>
      <span>W</span>
      <span>R</span>
      <span>E</span>
      <span>E</span>
      <span>L</span>
      <!-- Space between word -->
      <span class="space"></span>
      <!-- Third word -->
      <span>S</span>
      <span>H</span>
      <span>O</span>
      <span>W</span>
      <span>R</span>
      <span>E</span>
      <span>E</span>
      <span>L</span>
    </div>
    <!-- Central dot -->
    <span class="bg-[#000000] rounded-full w-[8px] h-[8px]"></span>
  </div>
</template>

<script>
  import { useSpiner } from '@/composables/useSpiner';
  export default {
    name: 'WelcomeSpinner',
    setup() {

      const { rotateStyle, startAnimation, pauseAnimation } = useSpiner();

      return {
        rotateStyle,
        startAnimation,
        pauseAnimation,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .circle-text span {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    color: white;
    transform-origin: center;
    &.space {
      display: inline-block;
      width: 10px;
    }
  }

  @for $i from 1 through 27 {
    .circle-text span:nth-child(#{$i}) {
      transform: rotate(#{$i * 12}deg) translateY(-50px);
    }
  }
</style>
