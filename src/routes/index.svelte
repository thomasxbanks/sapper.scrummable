<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`index.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
  import Card from "../components/molecule/Card.svelte";
  import { description, name } from "../Config";
</script>

<style>
  .grid {
    padding-top: 4vh;
    padding-bottom: 4vh;
  }
</style>

<svelte:head>
  <title>{name} | {description}</title>
</svelte:head>

<div class="central_column">
  <section class="grid">
    <h2 style="position: fixed; left: -55000px;">Posts</h2>
    {#each posts as post, index}
      <Card {post} {index} preview={true} />
    {:else}
      <!-- Show loading spinner -->
      <p style="flex-basis: 100%;">LOADING</p>
    {/each}
  </section>
</div>
