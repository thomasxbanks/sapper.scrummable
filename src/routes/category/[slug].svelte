<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte

    const res = await this.fetch(`/category/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { response: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let response;
  const { current, posts } = response;
  import Card from "../../components/molecule/Card.svelte";
  import Hero from "../../components/molecule/Hero.svelte";
  import { name } from "../../Config";
</script>

<style>
  .grid {
    padding-top: 4vh;
    padding-bottom: 4vh;
  }
</style>

<svelte:head>
  <title>CATEGORY PAGE | {name}</title>
</svelte:head>

<Hero copy={current.name} />
<div class="central_column">
  <div class="grid">
    {#each posts as post, index}
      <Card {post} {index} preview={true} />
    {:else}
      <!-- Show loading spinner -->
      <p style="flex-basis: 100%;">LOADING</p>
    {/each}
  </div>
</div>
