<script>

</script>

<style>
  .button_container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin: -0.5rem;
  }
  :global(.button_container > *) {
    margin: 0.5rem;
  }
</style>

<div class="button_container">
  <slot />
</div>
