<script>
  import Nav from "../components/common/Nav.svelte";
  import SiteHeader from "../components/common/site-header.svelte";
  import SiteFooter from "../components/common/site-footer.svelte";
  import SpriteSheet from "../components/common/sprite-sheet.svelte";

  export let segment;
</script>

<style>
  a {
    font-family: "Comfortaa", sans-serif;
    color: white;
  }
</style>

<SiteHeader>
  <a href="/" class="site-title">Scrummable</a>
  <Nav {segment} />
</SiteHeader>

<main>
  <slot />
</main>

<SiteFooter />
<SpriteSheet />
