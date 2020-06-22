<script>
  export let alt = false;
  export let classes = null;
  export let hero = false;
  export let src = null;
  export let lazy = false;
  import { beforeUpdate } from "svelte";
  import { fade } from "svelte/transition";

  const pixel =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII=";

  let progressive;
  let observer;
  let loading = true;

  const cloudinarify = (url, thumb) => {
    console.log(url);
    if (url.indexOf("default-hero") > -1) {
      console.log("fallback image");
      return url;
    }
    const size = thumb ? "w_15,h_15,c_fit/" : "";
    return `https://res.cloudinary.com/scrummable/${size}scrummable/${
      url.split("http://scrummable.com/wp-content/uploads/")[1]
    }`;
  };

  const setImage = thumb => {
    if (thumb.src.indexOf("scrummable/scrummable") > -1) return;
    loading = false;
    thumb.src = cloudinarify(src, true);
    const full = document.createElement("img");
    full.src = cloudinarify(src);
    full.addEventListener("load", () => {
      thumb.src = full.src;
    });
  };

  const onIntersect = async entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const { target } = entry;
        setImage(target);
        observer.unobserve(target);
      }
    });
  };

  const lazyLoad = node => {
    observer && observer.observe(node);
    return {
      destroy() {
        observer && observer.unobserve(node);
      }
    };
  };

  beforeUpdate(() => {
    lazy = lazy || "IntersectionObserver" in window;
    if (lazy) {
      observer = new IntersectionObserver(onIntersect, {});
    } else {
      loading = false;
      progressive.src = cloudinarify(src);
    }
  });
</script>

<style>
  .hero {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  img {
    transition: opacity var(--transition) 300ms;
  }
  .loading {
    opacity: 0.5;
  }
</style>

<img
  bind:this={progressive}
  use:lazyLoad
  class={classes}
  class:hero
  class:loading
  src={pixel}
  {alt}
  role={!alt ? 'presentation' : null} />
