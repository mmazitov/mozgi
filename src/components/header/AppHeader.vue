<script setup>
	import HeaderLogo from './logo/HeaderLogo.vue';
  import LangMenu from './langMenu/LangMenu.vue';
</script>

<template>
	<header class="top-0 left-0 z-[1] fixed w-full pointer-events-none">
		<div class="relative flex justify-center py-[24px]">
      <LangMenu />
			<HeaderLogo />
		</div>
	</header>
</template>

<script>
	export default {
		name: 'AppHeader',
	}
</script>

