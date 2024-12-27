<script lang="ts">
	let isNew = false;
</script>

<main class="min-h-screen flex justify-center items-center">
	<div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
		<div class="text-center mb-6">
			<h1 class="text-2xl font-bold text-blue-600">Welcome</h1>
			<p class="text-blue-500">Please register or login to continue</p>
		</div>
		<div class="flex justify-center mb-6">
			<button
				id="registerBtn"
				class="bg-blue-500 text-white px-4 py-2 rounded-l-lg focus:outline-none"
				onclick={() => (isNew = true)}>Register</button
			>
			<button
				id="loginBtn"
				class="bg-blue-300 text-white px-4 py-2 rounded-r-lg focus:outline-none"
				onclick={() => (isNew = false)}>Login</button
			>
		</div>
		{#if isNew}
			<div id="registerForm" class="space-y-4">
				<div>
					<label for="registerName" class="block text-blue-600">Name</label>
					<input
						type="text"
						id="registerName"
						class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div>
					<label for="registerEmail" class="block text-blue-600">Email</label>
					<input
						type="email"
						id="registerEmail"
						class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div>
					<label for="registerPassword" class="block text-blue-600">Password</label>
					<input
						type="password"
						id="registerPassword"
						class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<button class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">Register</button>
			</div>
		{:else}
			<div id="loginForm" class="space-y-4">
				<div>
					<label for="loginEmail" class="block text-blue-600">Email</label>
					<input
						type="email"
						id="loginEmail"
						class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div>
					<label for="loginPassword" class="block text-blue-600">Password</label>
					<input
						type="password"
						id="loginPassword"
						class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<button class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">Login</button>
			</div>
		{/if}
	</div>
</main>
