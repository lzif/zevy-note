<script lang="ts">
	import { FolderOpen, User } from 'lucide-svelte';
</script>

<section class="bg-gradient-to-r from-sky-500 to-sky-400 text-white py-16">
	<div class="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
		<h1 class="text-4xl md:text-5xl font-bold mb-4">
			Welcome to <span class="text-sky-300">ZephyrVault</span>
		</h1>
		<p class="text-lg md:text-xl mb-6">
			Secure, Offline-First Note-Taking App with Encrypted Notes & Seamless Cloud Sync.
		</p>
		<div class="flex gap-4">
			<button
				class="bg-white text-sky-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-sky-100 flex items-center"
			>
				<FolderOpen class="w-5 h-5 mr-2" /> Start Offline
			</button>
			<button
				class="bg-sky-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-sky-600 flex items-center"
			>
				<User class="w-5 h-5 mr-2" /> Login / Signup
			</button>
		</div>
	</div>
</section>
