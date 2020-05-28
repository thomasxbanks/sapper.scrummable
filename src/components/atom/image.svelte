<script>
  export let alt = false;
  export let classes = null;
  export let height = null;
  export let hero = false;
  export let src = null;
  export let width = null;
  // export let lazy = window ? "IntersectionObserver" in window : false;
  export let lazy = false;

  let loading = true;
  let observer;

  const cloudinarify = (url, thumb) => {
    const size = thumb ? "w_15,h_15,c_fit/" : "";
    return `https://res.cloudinary.com/scrummable/${size}scrummable/${
      url.split("http://scrummable.com/wp-content/uploads/")[1]
    }`;
  };
  console.log("I AM TEH IMG:", src, cloudinarify(src));

  const onIntersect = async entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const { target } = entry;
        observer.unobserve(target);
      }
    });
    loading = !entries[0].isIntersecting;
  };

  const lazyLoad = node => {
    observer && observer.observe(node);
    return {
      destroy() {
        observer && observer.unobserve(node);
      }
    };
  };

  if (lazy) {
    observer = new IntersectionObserver(onIntersect, {});
  } else {
    loading = false;
  }
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
    opacity: 0;
  }
</style>

<img
  use:lazyLoad
  class={classes}
  class:hero
  class:loading
  src={!loading ? cloudinarify(src) : null}
  style={loading ? `width: ${width}px; height: ${height}px` : null}
  {alt}
  role={!alt ? 'presentation' : null}
  {width}
  {height} />
