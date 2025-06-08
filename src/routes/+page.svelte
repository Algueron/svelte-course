<script>
	import Button from "$lib/components/Button.svelte";
	import {AlarmClock, Search} from 'lucide-svelte';
</script>


<Button>
	{#snippet left()}
		<Search />
	{/snippet}
	Text
	{#snippet right()}
		<AlarmClock />
	{/snippet}
</Button>