{#each {length: 10} as _, i}
<div class="center" data-iteration={i}>
  <h1 class="h1">ollynicholass.com</h1>
  <h2 class="h2">coming soon</h2>
</div>
{/each}

<style>
  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>