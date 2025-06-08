<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import {AlarmClock, Search, SearchCheck} from 'lucide-svelte';
</script>


<Button size="sm" shadow>
	{#snippet left(isHovered: boolean)}
		{#if isHovered}
			<Search />
		{:else}
			<SearchCheck />
		{/if}
		
	{/snippet}
	Text
	{#snippet right()}
		<AlarmClock />
	{/snippet}
</Button>