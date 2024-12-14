<script lang="ts">
	import FeatureItem from './FeatureItem.svelte';
	import { Cloud, HardDrive, Key, MonitorSmartphone, Shield, Users } from 'lucide-svelte';

	type FeatureItems = {
		icon: any;
		title: string;
		description: string;
	};

	const features: FeatureItems[] = [
		{
			icon: Key,
			title: 'Keep Your Notes Private',
			description:
				'End-to-end encryption ensures only you can access your data. Your notes are secure, no matter where you are.'
		},
		{
			icon: HardDrive,
			title: 'Take Notes Anytime, Anywhere',
			description:
				'Create and edit notes offline. Your data syncs automatically when you’re back online.'
		},
		{
			icon: Cloud,
			title: 'Seamless Access Across Devices',
			description:
				'Access your notes on any device, anytime. ZephyrVault syncs your data securely in the cloud.'
		},
		{
			icon: Users,
			title: 'Collaborate in Real-Time',
			description:
				'Share notes with your team and collaborate seamlessly. Manage permissions and track changes effortlessly.'
		},
		{
			icon: Shield,
			title: 'Your Data, Your Privacy',
			description:
				'With zero-knowledge architecture, no one but you can read your notes. Your data is safe and secure.'
		},
		{
			icon: MonitorSmartphone,
			title: 'Use Anywhere, Anytime',
			description:
				'ZephyrVault is available on desktop, tablet, and smartphone. Your notes are always with you.'
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
