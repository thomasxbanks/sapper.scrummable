<script>

</script>

<style>
  header {
    background-color: black;
  }
  .central_column {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .grid {
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
  }
</style>

<header>
  <div class="central_column">
    <div class="grid">
      <slot />
    </div>
  </div>

</header>
