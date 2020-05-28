<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`/article/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  const removeParagraphFromImages = () => {
    let imgs = document.querySelectorAll("img");
    imgs.forEach(img => {
      var parent = img.parentElement;
      if (parent.tagName === "P") {
        var container = img.parentElement.parentElement;
        var image = parent.firstChild;
        container.insertBefore(image, parent);
        parent.outerHTML = "";
      }
    });
  };
  export let post;
  import { onMount } from "svelte";
  import { name } from "../../Config.js";
  import Hero from "../../components/molecule/Hero.svelte";
  import Meta from "../../components/molecule/Meta.svelte";
  onMount(() => {
    removeParagraphFromImages();
  });
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .meta_container {
    border-bottom: 0.0625rem solid whitesmoke;
    padding: 0.5rem;
  }
</style>

<svelte:head>
  <title>{post.title.rendered} | {name}</title>
</svelte:head>

<Hero
  image={post._embedded['wp:featuredmedia'][0].source_url}
  copy={post.title.rendered} />
<div class="central_column">
  <article class="card article">
    <div class="content">
      <div class="meta_container">
        <Meta {post} />
      </div>
      {@html post.content.rendered}
    </div>
  </article>
</div>
