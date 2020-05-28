<script>
  import { name } from "../../Config.js";
  export let image = "images/default-hero.jpg";
  export let copy = name;

  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let show = false;
  onMount(() => {
    show = true;
  });
</script>

<style>
  figure {
    position: relative;
    min-height: 50vh;
  }
  figcaption {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    min-height: 50vh;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.3);
    padding-top: 8vh;
    padding-right: 0;
    padding-bottom: 4vh;
    padding-left: 0;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h1 {
    font-family: "Comfortaa", sans-serif;
    color: white;
    font-size: 3rem;
    line-height: 1.2em;
    width: 100%;
  }
</style>

<figure>
  <img src={image} alt="" role="presentation" />
  {#if copy}
    <figcaption>
      {#if show}
        <h1 class="central_column" transition:fade>
          {@html copy}
        </h1>
      {/if}
    </figcaption>
  {/if}
</figure>
