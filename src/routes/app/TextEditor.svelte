<script lang="ts">
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';

	let element: Element | null = $state(null);
	let editor: Editor | null = $state(null);

	$effect(() => {
		editor = new Editor({
			element: element!,
			extensions: [StarterKit],
			autofocus: true
		});
	});
	$effect(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

{#if editor}
	<div bind:this={element}></div>
{:else}
<div>Loading Editor</div>	
{/if}

