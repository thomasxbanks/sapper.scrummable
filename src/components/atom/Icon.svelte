<script>
  export let icon;
</script>

<style>
  b {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
</style>

<b class="icon">
  <svg>
    <use xlink:href="#icon-{icon}" role="presentation" />
  </svg>
</b>
