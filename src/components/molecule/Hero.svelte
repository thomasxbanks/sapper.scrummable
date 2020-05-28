<script>
  import { name } from "../../Config.js";
  export let image = null;
  export let copy = null;

  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import Image from "../atom/image.svelte";

  let show = false;
  onMount(() => {
    show = true;
  });

  console.log("I AM TEH IMAAAAAAGE", image);
</script>

<style>
  figure {
    position: relative;
    min-height: 50vh;
  }
  figure.dark {
    background-color: black;
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
  h1 {
    font-family: "Comfortaa", sans-serif;
    color: white;
    font-size: 3rem;
    line-height: 1.2em;
    width: 100%;
  }
</style>

<figure class:dark={copy}>
  <Image
    hero={true}
    alt=""
    src={image.source_url}
    width={image.media_details.width}
    height={image.media_details.height} />
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
