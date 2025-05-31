<script lang="ts">
  let firstName = $state('Julien')
  let lastName = $state('Papillon')
  let fullName = $derived.by(() => {
    return `${firstName} ${lastName}`
  })
  let username = $state('jpapillon')
  let src = 'https://picsum.photos/250/300'
  let bio = 'Hello, <b>this</b> is me.'

  $effect(() => {
    if(username || fullName)
    console.log('User has a username or a full name')
  })
</script>

<input bind:value={username} />
<input bind:value={firstName} />
<input bind:value={lastName} />
<!--<img {src} alt="A photo of {name}">>-->
<h1>{username || fullName}</h1>
<p>{@html bio}</p>

<style>
    h1 {
        color: red;
    }
</style>
