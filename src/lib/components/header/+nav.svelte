<script lang="ts">

	import Hamburger from "./+hamburger.svelte";

  export let open: boolean = false;

</script>
<nav>
  <!-- <a href="/">Home</a>
  <a href="/pricing">Pricing</a> -->
  <Hamburger {open}  />

</nav>
