<script lang="ts">
	import { setContext, type Snippet } from "svelte";
	import Counter, { setCounterContext } from "../utils/counter.svelte";

    let {children}: {children: Snippet} = $props();

    setCounterContext(new Counter());
</script>

{@render children()}