<script lang="ts">
	import { LogIn } from 'lucide-svelte';
</script>

<section class="bg-gradient-to-r from-sky-500 to-sky-400 text-white py-16">
	<div class="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
		<h1 class="text-4xl md:text-5xl font-bold mb-4">
			Take Control of Your Notes with <span>ZevyNote</span>
		</h1>
		<h2 class="text-2xl md:text-3xl mb-2">
			Your ultimate note-taking platform—offline-first, secure, and designed for productivity.
		</h2>
		<p class="text-lg md:text-xl mb-6">
			Whether you’re a student, creative, or developer, ZevyNote ensures your ideas flow freely
			while staying locked in your vault.
		</p>
		<div class="flex gap-4">
			<a
				href="/app"
				class="bg-white text-sky-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-sky-100 flex items-center"
			>
				<LogIn class="w-5 h-5 mr-2" /> Sign Up for Free
			</a>
		</div>
	</div>
</section>
