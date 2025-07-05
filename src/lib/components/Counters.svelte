<script lang="ts">
	import { setContext, type Snippet } from "svelte";
	import Counter from "../utils/counter.svelte";

    let {children}: {children: Snippet} = $props();

    let counter = new Counter();

    setContext<Counter>('counter', counter)
</script>

{@render children()}