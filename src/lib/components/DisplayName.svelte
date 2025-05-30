<script lang="ts">
  let name = 'Julien Papillon'
  let src = 'https://picsum.photos/250/300'
  let bio = 'Hello, <b>this</b> is me.'
</script>

<img {src} alt="A photo of {name}">
<h1>{name}</h1>
<p>{@html bio}</p>

<style>
    h1 {
        color: red;
    }
</style>
