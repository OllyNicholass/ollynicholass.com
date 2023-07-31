<script>
  import Nav from './+nav.svelte';
</script>

<div class="header-wrap">
  <header>
    <span>0lly</span>
    <div class="nav-wrap">
      <Nav></Nav>
    </div>
  </header>
</div>

<style>
  .header-wrap {
    display: flex;
    justify-content: center;
  }

  header {
    position: fixed;
    top: 2em;
    max-width: 32em;
    width: 100%;
    background-color: rgba(29, 30, 41, 0.8);
    backdrop-filter: blur(10px);
    padding: 1em;
    border-radius: 1.5em;
    border: solid 1px #84859c;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }

  .nav-wrap {
    margin-left: auto;
  }
</style>