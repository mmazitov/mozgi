<script setup>
		import './logo.js';
</script>

<template>
	<router-link to="/" class="pointer-events-auto">
		<canvas id="logo"></canvas>
	</router-link>
</template>

<script>
	export default {
		name: 'HeaderLogo',
	}
</script>

