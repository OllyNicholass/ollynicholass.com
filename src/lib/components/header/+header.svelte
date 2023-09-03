<script lang="ts">
	import Hamburger from './+hamburger.svelte';
  import { Drawer, LightSwitch, autoModeWatcher, setInitialClassState  } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
  {@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
  {@html `<script>(${setInitialClassState.toString()})();</script>`}
</svelte:head>

<div class="header-wrap z-40">
  <header class="border-[1px] border-surface-500/30 rounded-3xl">
    <span>
      <a href="/">0lly</a>
    </span>
    <!-- <div class="burger-wrap">
      <Hamburger />
    </div> -->
    <div class="ml-auto">
      <LightSwitch />
    </div>
  </header>
  <Drawer />
</div>

<style lang="scss">
  .header-wrap {
    display: flex;
    justify-content: center;
    top: 2em;
    margin-top: 2em;
    position: sticky;
    padding: 0 1em;
  }

  header {
    max-width: 32em;
    width: 100%;
    backdrop-filter: blur(10px);
    background-color: rgb(var(--color-surface-50) / 0.6);
    padding: 1em;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }

  :is(.dark header) {
    background-color: rgb(var(--color-surface-900) / 0.6);
  }

  .burger-wrap {
    margin-left: auto;
  }
</style>