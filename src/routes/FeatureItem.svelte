<script lang="ts">
	import type { Component } from 'svelte';

	export let icon: Component;
	export let title: string;
	export let description: string;
</script>

<div class="bg-sky-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
	<div class="flex items-center mb-4">
		<svelte:component this={icon} class="w-8 h-8 text-sky-600" />
		<h3 class="text-xl font-semibold text-sky-700 ml-4">{title}</h3>
	</div>
	<p class="text-sky-500">{description}</p>
</div>
