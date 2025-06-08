<script lang="ts">

</script>

{#snippet sum(a: number, b: number)}
    {#snippet bold(x: any)}
        <b>{x}</b>
    {/snippet}
    <span>{a} + {b} = {@render bold(a + b)}</span>
{/snippet}

<button>Text</button>

{@render sum(2,2)}

<style>
    button {
        border: none;
        background-color: #ff3e00;
        color: #ffffff;
        padding: 0 20px;
        height: 45px;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
