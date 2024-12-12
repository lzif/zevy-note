<script lang="ts">
	import Footer from '$lib/ui/Footer.svelte';
import Header from '$lib/ui/Header.svelte';
import '../app.css';
	let { children } = $props();
</script>


{@render children()}

