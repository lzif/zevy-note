<script lang="ts">
	import FeatureItem from './FeatureItem.svelte';

	type IconName = 'Lock' | 'WifiOff' | 'Cloud' | 'Users' | 'Shield' | 'Laptop';
	type FeatureItems = { icon: IconName; title: string; description: string };
	const features: FeatureItems[] = [
		{
			icon: 'Lock',
			title: 'Encrypted Notes',
			description:
				'Keep your notes private with end-to-end encryption, ensuring only you can access your data.'
		},
		{
			icon: 'WifiOff',
			title: 'Offline-First',
			description:
				"Take notes anytime, anywhere—even without an internet connection. Your data syncs automatically when you're back online."
		},
		{
			icon: 'Cloud',
			title: 'Cloud Sync',
			description:
				'Access your notes seamlessly across all your devices with secure cloud synchronization.'
		},
		{
			icon: 'Users',
			title: 'Collaboration',
			description:
				'Share notes with your team and collaborate in real-time for enhanced productivity.'
		},
		{
			icon: 'Shield',
			title: 'Zero-Knowledge Security',
			description:
				'Your data is stored securely with zero-knowledge architecture, meaning no one but you can read your notes.'
		},
		{
			icon: 'Laptop',
			title: 'Cross-Platform Support',
			description:
				'Use ZephyrVault on any device—desktop, tablet, or smartphone—for ultimate flexibility and accessibility.'
		}
	];
</script>

<section class="bg-sky-50 py-16">
	<div class="container mx-auto px-6 md:px-12">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-sky-700 mb-4">Why Choose ZephyrVault?</h2>
			<p class="text-sky-500 text-lg">
				Explore the powerful features that make ZephyrVault the best note-taking solution for your
				needs.
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each features as feature}
				<FeatureItem icon={feature.icon} title={feature.title} description={feature.description} />
			{/each}
		</div>
	</div>
</section>
