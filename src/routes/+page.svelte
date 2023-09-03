<script lang="ts">
  import Home from '$lib/components/home/+home.svelte';
	import Maintenence from '$lib/components/home/+maintenence.svelte';
  let isMaintenence: boolean;
  isMaintenence = true;
</script>

{#if isMaintenence}
  <Maintenence />
  {:else}
  <Home />
{/if}