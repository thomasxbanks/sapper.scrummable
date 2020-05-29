<script>
  import Button from "../atom/Button.svelte";
  import ButtonContainer from "../atom/ButtonContainer.svelte";
  import Hero from "../molecule/Hero.svelte";
  import Meta from "../molecule/Meta.svelte";

  export let index;
  export let post;
  export let preview;

  import { fly } from "svelte/transition";
  const transition = {
    x: 0,
    y: 80,
    duration: 300,
    delay: (index + 1) * 100
  };
</script>

<style>
  article {
    display: flex;
    flex-direction: column;
  }

  .content {
    padding-top: 0.5rem;
    padding-right: 1rem;
    padding-bottom: 1.5rem;
    padding-left: 1rem;
  }
  .content > * + * {
    margin-top: 1.5em;
  }
  h3 {
    font-size: 2em;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  footer {
    margin-top: auto;
    padding-top: 1rem;
    padding-right: 0.5rem;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
    background-color: whitesmoke;
    color: dimgray;
    font-size: 0.75rem;
  }
</style>

<article class="card" in:fly={transition} id="post-{index}">
  {#if post._embedded && post._embedded['wp:featuredmedia']}
    <Hero
      image={post._embedded['wp:featuredmedia'][0]}
      copy={null}
      size="default" />
  {/if}
  <div class="content">
    {#if post.title}
      <h3 class="heading">
        {@html post.title.rendered}
      </h3>
    {/if}
    {#if post.excerpt}
      {@html post.excerpt.rendered}
    {/if}
    {#if post.slug}
      <div>
        <ButtonContainer>
          <Button href="/article/{post.slug}">Read more</Button>
        </ButtonContainer>
      </div>
    {/if}
  </div>
  <footer>
    <Meta {post} {preview} />
  </footer>
</article>
