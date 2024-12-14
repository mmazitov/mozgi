<template>
  <router-link :to="url" class="link">
    {{ text }}
  </router-link>
</template>

<script>
  export default {
    name: 'AppLink',
    props: {
      text: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
	.link {
		@apply font-[600] text-[#373737] text-[14px] xl:text-[16px] leading-[20px] xl:leading-[22px] transition-[color] duration-300 ease-in-out;
		&:after {
			content: '';
			@apply bottom-0 left-0 absolute bg-white w-0 h-[2px] transition-[width] duration-300 ease-in-out;
		}
		&:hover {
			@apply text-white;
			&:after {
				@apply w-full;
			}
		}
	}
</style>
