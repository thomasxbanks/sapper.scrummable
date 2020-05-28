<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`menu.json`)
      .then(r => r.json())
      .then(categories => {
        return { categories };
      });
  }
</script>

<script>
  export let categories;
  import { name } from "../Config";
  import Button from "../components/atom/Button.svelte";
  import ButtonContainer from "../components/atom/ButtonContainer.svelte";
</script>

<style>
  li {
    min-width: 22rem;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 2rem;
    border: 0.0625rem solid rgba(0, 0, 0, 0.15);
  }
  h2 {
    font-weight: bold;
    font-size: 1.66em;
  }
</style>

<svelte:head>
  <title>Menu | {name}</title>
</svelte:head>

<div class="central_column">
  <ul class="grid">
    {#each categories as category, index}
      <li>
        <h2>{category.name}</h2>
        {#if category.description}
          {@html category.description}
        {/if}
        <ButtonContainer>
          <Button href="/category/{category.slug}">View matching posts</Button>
        </ButtonContainer>
      </li>
    {/each}
  </ul>
</div>
