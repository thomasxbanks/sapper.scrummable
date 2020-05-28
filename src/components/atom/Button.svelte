<script>
  export let href = false;
  export let size = "regular";
  export let variant = "default";

  const classes = `${size} ${variant}`;
</script>

<style>
  a,
  button {
    line-height: 1.8em;
    padding: 0.5em;
    display: inline-block;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 2rem;
    margin-right: 0;
    margin-bottom: 1rem;
    margin-left: 0;
    position: relative;
    transition: box-shadow cubic-bezier(0.64, 0.22, 0.69, 0.98) 250ms;
    cursor: pointer;
    color: #343840;
  }
  a:after,
  button:after,
  a:before,
  button:before {
    color: #a1213d;
  }
  a:before,
  button:before {
    content: "";
    height: 0.25rem;
    background-color: currentColor;
    position: absolute;
    bottom: 0;
    border-radius: 500rem;
  }
  a:after,
  button:after {
    content: "〉";
    font-size: 1.25em;
    margin-inline-start: 0.5ch;
    position: absolute;
  }
  a:hover:after,
  button:hover:after {
    animation: arrowbounce ease 600ms 1 300ms;
  }
  a:hover:before,
  button:hover:before {
    animation: underline ease 600ms 1;
  }
  a {
    text-decoration: none;
  }
  .small {
    font-size: 0.75rem;
  }
  .regular {
    font-size: 1rem;
  }
  .large {
    font-size: 1.25rem;
  }

  @keyframes arrowbounce {
    0% {
      transform: translateX(0);
    }
    20% {
      transform: translateX(100%);
    }
    50% {
      transform: translateX(-0.3125em);
    }
    70% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes underline {
    0% {
      opacity: 0;
      width: 0;
      left: 0;
    }
    50% {
      opacity: 1;
      width: calc(100% - 0.75rem);
      left: 0;
    }
    100% {
      opacity: 0;
      width: 0;
      left: calc(100% - 0.75em);
    }
  }
</style>

{#if href}
  <a {href} rel="prefetch" class={classes}>
    <slot />
  </a>
{:else}
  <button class={classes} on:click>
    <slot />
  </button>
{/if}
