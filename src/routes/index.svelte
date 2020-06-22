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
  import Button from "../components/atom/Button.svelte";
  import Card from "../components/molecule/Card.svelte";
  import Loading from "../components/atom/Loading.svelte";
  import { description, name } from "../Config";
  import { getPosts } from "../utils/get/posts";
  let page = 1;
  let loading = false;
  const loadMore = async event => {
    loading = true;
    const response = await getPosts(++page);
    posts.hasMore = response.hasMore;
    posts.posts = [...posts.posts, ...response.posts];
    loading = false;
    if (!response.hasMore) event.target.remove();
  };
</script>

<style>
  .grid {
    padding-top: 4vh;
    padding-bottom: 4vh;
  }
  .button_container {
    justify-content: center;
  }
</style>

<svelte:head>
  <title>{name} | {description}</title>
</svelte:head>

<div class="central_column">
  <section class="grid">
    <h2 style="position: fixed; left: -55000px;">Posts</h2>
    {#each posts.posts as post, index}
      <Card {post} {index} preview={true} />
    {:else}
      <!-- Show loading spinner -->
      <p style="flex-basis: 100%;">LOADING</p>
    {/each}
  </section>
  <div class="grid button_container">
    <Button on:click={loadMore} variant="primary" classes="button fixed-width">
      {#if loading}
        <Loading />
      {:else}Load more{/if}
    </Button>
  </div>
</div>
