<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import {AlarmClock, Search, SearchCheck} from 'lucide-svelte';

	let button: Button;

	$effect(() => {
		console.log(button);
	});
</script>

<div class="wrapper">
	<Button 
		bind:this={button}
		href="https://svelte.dev"
		size="sm" 
		shadow 
		--buttonBgColor="green" 
		--buttonTextColor="yellow" 
		onclick={() => {
			alert(true);
		}}
		onlefthover={() => {
			console.log('left hovered');
		}}
	>
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
</div>

<style>
	:global {
		body {
			background-color: #222;
		}
	}
</style>