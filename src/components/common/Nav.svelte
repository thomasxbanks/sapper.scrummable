<script>
  export let segment;
</script>

<style>
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: -0.5rem;
  }
  li {
    margin: 0.5rem;
  }
  a {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: white;
    font-weight: bold;
    font-size: 1.25em;
    text-decoration: none;
    border-bottom-width: 0;
    border-bottom-style: solid;
    border-bottom-color: white;
    transition: ease 300ms;
  }
  a[aria-current="page"] {
    border-bottom-width: 0.0625rem;
  }
  a:hover {
    border-bottom-width: 0.125rem;
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === 'menu' ? 'page' : undefined} href="menu">
        Menu
      </a>
    </li>
  </ul>
</nav>
