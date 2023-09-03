<script lang="ts">
  export let anchorId: string = 'main';
</script>

<a class="btn variant-filled" href="#{anchorId}">Skip to main content</a>

<style lang="scss">
a {
  position: absolute;
  margin: .5rem;
  inset-block-start: 0;
  inset-inline-start: 0;
  transform: translateY(-999px);
  z-index: 1000;

  &:focus {
    transform: translateY(0);
  }
}
  
</style>