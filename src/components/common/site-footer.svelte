<script>
  const now = new Date().getFullYear();
</script>

<style>
  footer {
    padding: 0.5rem;
    margin-top: 10vh;
    margin-right: -0.5rem;
    margin-bottom: 0;
    margin-left: -0.5rem;
    background-color: whitesmoke;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border-top: 0.0625rem solid silver;
  }
  footer > * {
    display: block;
    margin: 0.5rem;
    color: dimgray;
    font-size: 0.875rem;
    line-height: 1.6em;
    text-align: center;
  }
  a {
    color: black;
  }
</style>

<footer>
  <span class="colophon">&copy; 2014-{now} Scrummable.</span>
  <span class="description">
    like showing the good jam to the man choking on the dry bread.
  </span>
  <a
    href="https://creativecommons.org/licenses/by-nc-nd/3.0/legalcode"
    class="license">
    Creative Commons: CC BY-NC-ND 3.0
  </a>
</footer>
