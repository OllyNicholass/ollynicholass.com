<script lang="ts">
  import Nav from './+nav.svelte';
  import { Drawer  } from '@skeletonlabs/skeleton';
</script>

<div class="header-wrap z-40">
  <header>
    <span>0lly</span>
    <div class="nav-wrap">
      <Nav />
    </div>
  </header>
  <Drawer position="bottom" />
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
    background-color: rgba(29, 30, 41, 0.8);
    backdrop-filter: blur(10px);
    padding: 1em;
    border-radius: 1.5em;
    border: solid 1px #84859c;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

    
  }

  .nav-wrap {
    margin-left: auto;
  }
</style>