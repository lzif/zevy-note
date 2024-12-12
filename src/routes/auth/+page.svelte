<!-- Import  Components -->
<script lang="ts">
	import { Lock, Cloud, Users } from 'lucide-svelte';
</script>

<header class="bg-sky-100 py-4">
	<div class="container mx-auto px-4 flex justify-between items-center">
		<h1 class="text-2xl font-bold text-sky-800">ZephyrVault</h1>
		<a href="/auth" class="bg-sky-500 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition"
			>Login</a
		>
	</div>
</header>

<main>
	<!-- Hero Section -->
	<section class="bg-sky-100 py-20 text-center">
		<div class="container mx-auto px-4">
			<h2 class="text-4xl font-extrabold text-sky-800 mb-4">Your Notes, Secured. Anywhere.</h2>
			<p class="text-lg text-sky-700 mb-8">
				ZephyrVault lets you take, share, and secure your notes with ease. Built with privacy and
				simplicity in mind.
			</p>
			<a
				href="/auth"
				class="bg-sky-500 text-white py-3 px-6 rounded-lg hover:bg-sky-600 transition"
			>
				Get Started for Free
			</a>
		</div>
	</section>

	<!-- Features Section -->
	<section id="features" class="py-16">
		<div class="container mx-auto px-4">
			<h3 class="text-3xl font-bold text-center text-sky-800 mb-12">Features</h3>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div class="bg-sky-50 rounded-lg p-6 text-center">
					<div
						class="w-16 h-16 mx-auto mb-4 bg-sky-200 text-sky-800 rounded-full flex items-center justify-center"
					>
						<Lock class="w-8 h-8" />
					</div>
					<h4 class="text-xl font-bold text-sky-800">Encrypted Notes</h4>
					<p class="text-sky-700">Keep your notes private with zero-knowledge encryption.</p>
				</div>
				<div class="bg-sky-50 rounded-lg p-6 text-center">
					<div
						class="w-16 h-16 mx-auto mb-4 bg-sky-200 text-sky-800 rounded-full flex items-center justify-center"
					>
						<Cloud class="w-8 h-8" />
					</div>
					<h4 class="text-xl font-bold text-sky-800">Cloud Sync</h4>
					<p class="text-sky-700">Access your notes anytime, anywhere across all devices.</p>
				</div>
				<div class="bg-sky-50 rounded-lg p-6 text-center">
					<div
						class="w-16 h-16 mx-auto mb-4 bg-sky-200 text-sky-800 rounded-full flex items-center justify-center"
					>
						<Users class="w-8 h-8" />
					</div>
					<h4 class="text-xl font-bold text-sky-800">Collaboration</h4>
					<p class="text-sky-700">Share notes and collaborate with your team in real-time.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Call-to-Action Section -->
	<section class="bg-sky-500 py-16 text-center text-white">
		<div class="container mx-auto px-4">
			<h3 class="text-3xl font-bold mb-4">Start Securing Your Notes Today</h3>
			<p class="mb-8">Join thousands of users who trust ZephyrVault for their note-taking needs.</p>
			<a
				href="/auth"
				class="bg-white text-sky-500 py-3 px-6 rounded-lg hover:bg-sky-100 transition"
			>
				Sign Up for Free
			</a>
		</div>
	</section>
</main>

<footer class="bg-sky-100 py-6">
	<div class="container mx-auto px-4 text-center">
		<p class="text-sky-700">&copy; 2024 ZephyrVault. All rights reserved.</p>
	</div>
</footer>
