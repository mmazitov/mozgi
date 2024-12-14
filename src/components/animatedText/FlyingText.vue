<template>
  <div
    class="top-[50%] left-[50%] absolute transform translate-x-[-50%] translate-y-[-50%]"
    :style="rotateStyle"
  >
    <p class="opacity-10 w-[101%] text-[28px] text-[transparent] md:text-[42px] xl:text-[52px] giga-bold_italic leading-[31px] md:leading-[46px] xl:leading-[57px] transform animate-left-to-right">
      FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
    </p>
    <p class="opacity-10 w-[101%] text-[28px] text-[transparent] md:text-[42px] xl:text-[52px] giga-bold_italic leading-[31px] md:leading-[46px] xl:leading-[57px] transform animate-right-to-left">
      FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY
    </p>
  </div>
</template>

<script>
  import { computed } from 'vue';
  import { useRotation } from '@/composables/useRotation';

  export default {
    name: 'FlyingText',
    setup() {
      const { rotationAngle } = useRotation();

      const rotateStyle = computed(() => {
        return {
          transform: `translateX(-50%) translateY(-50%) rotate(${rotationAngle.value}deg)`,
        };
      });

      return { rotateStyle };
    },
  };
</script>

<style lang="scss" scoped>
  p {
    -webkit-text-stroke: 1px rgba(55, 55, 55, 1);
    text-stroke: 1px rgba(55, 55, 55, 1);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
