<script lang="ts">
	import { Lock, WifiOff, Cloud, Users, Shield, Laptop } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	type IconName = 'Lock' | 'WifiOff' | 'Cloud' | 'Users' | 'Shield' | 'Laptop';

	export let icon: IconName;
	export let title: string;
	export let description: string;

	const iconComponents: Record<IconName, ComponentType> = {
		Lock,
		WifiOff,
		Cloud,
		Users,
		Shield,
		Laptop
	};

	function getIconComponent(name: IconName): ComponentType {
		const component = iconComponents[name];
		if (!component) {
			throw new Error(`Icon ${name} not found`);
		}
		return component;
	}
</script>

<div class="bg-sky-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
	<div class="flex items-center mb-4">
		<svelte:component this={getIconComponent(icon)} class="w-8 h-8 text-sky-600" />
		<h3 class="text-xl font-semibold text-sky-700 ml-4">{title}</h3>
	</div>
	<p class="text-sky-500">{description}</p>
</div>
