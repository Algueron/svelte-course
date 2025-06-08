<script>
    let count = $state(0);
    let frequency = $state(1000);

    $effect(() => {
        const interval = setInterval(() => {
            console.log(count);
            count += 1;
        }, frequency);
        console.log('intervalid', interval);
        return () => {
            clearInterval(interval);
        }
    })
</script>

<h1>{count}</h1>

<button onclick={() => {
    frequency *= 2;
}}>Slower</button>
<button onclick={() => {
    frequency /= 2;
}}>Faster</button>