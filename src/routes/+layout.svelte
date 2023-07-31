<script>

	import Header from "$lib/components/header/+header.svelte";

</script>

<Header />

<div class="container">
  <slot />
</div>

<style>
  @import 'https://fonts.googleapis.com/css?family=Roboto&display=swap';
  :global(body) {
    font-family: 'Roboto', sans-serif;
    background-color: #10101a;
    color: #84859c;
    
    margin: 0;
  }

  :global(a) {
    color: #fff;
  }

  .container {
    padding-top: 2em;
  }
</style>