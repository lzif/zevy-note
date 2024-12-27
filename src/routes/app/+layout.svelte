<script lang="ts">
	import { Search, User } from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	let { children } = $props();
	let searchTerm = $state('');
	let isDropdownOpen = $state(false);
	const toggleDropdown = () => (isDropdownOpen = !isDropdownOpen);
	const closeDropdown = () => (isDropdownOpen = false);
	function handleSearch() {
		// Logika pencarian, misalnya, mengarahkan ke halaman pencarian
		console.log('Searching for:', searchTerm);
		// Anda bisa menambahkan logika untuk melakukan pencarian di sini
	}
	const dropdownItem: { url: string; title: string }[] = [
		{
			url: '/profile',
			title: 'Profile'
		},
		{
			url: '/setting',
			title: 'Setting'
		},
		{
			url: '/logout',
			title: 'Logout'
		}
	];
</script>

<header class="bg-sky-400 text-white p-4 flex justify-between items-center">
	<h1 class="text-xl font-bold">ZevyNote</h1>
	<div class="flex items-center">
		<input
			type="text"
			placeholder="Search..."
			bind:value={searchTerm}
			onkeydown={(e) => e.key === 'Enter' && handleSearch()}
			class="p-2 rounded-l-md border border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-600 text-black"
		/>
		<button onclick={handleSearch} class="bg-sky-600 hover:bg-sky-500 text-white p-2 rounded-r-md">
			<Search />
		</button>
		<div class="relative">
			<button onclick={toggleDropdown} class="ml-2 p-2 hover:bg-sky-500 rounded">
				<User />
			</button>
			{#if isDropdownOpen}
				<div
					class="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10"
					transition:slide
				>
					{#each dropdownItem as item}
						<button
							class="w-full px-4 py-2 hover:bg-sky-100 cursor-pointer first:rounded-t-md last:rounded-b-md"
							onclick={closeDropdown}
						>
							{item.title}
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</header>

{@render children()}
