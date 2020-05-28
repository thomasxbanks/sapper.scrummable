<script>
  import moment from "../../../node_modules/moment/moment";

  export let post;

  export let preview = false;

  const format = date => moment(date).format("Do MMMM YYYY");

  import Icon from "../atom/Icon.svelte";

  const wordCount = post.content.rendered.split(" ").length;
  const wordsPerMinute = 240;
  const readingTime = `${Math.ceil(wordCount / wordsPerMinute)} minute${
    wordCount !== 1 ? "s" : ""
  }`;
</script>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    margin: -0.5rem;
  }
  div > * {
    margin: 0.5rem;
  }
  span {
    display: flex;
    align-items: flex-start;
  }

  span > *:last-child {
    margin-inline-start: 0.5ch;
  }
  .list .item {
    display: inline-block;
    vertical-align: middle;
    line-height: 1em;
  }
  .item:not(:last-of-type) {
    margin-right: 2ch;
  }
</style>

<div>
  <span>
    <Icon icon="user" />
    <cite>{post._embedded.author[0].name}</cite>
  </span>
  <span>
    <Icon icon="calendar" />
    <time datetime={post.date}>{format(post.date)}</time>
  </span>
  {#if !preview}
    <span>
      <Icon icon="time" />
      <b>{readingTime}</b>
    </span>
    <span>
      <Icon icon="folder" />
      <ul class="list">
        {#each post._embedded['wp:term'][0] as term}
          <li class="item">
            <a
              title="This article is in the {term.name} category"
              href="/{term.taxonomy}/{term.slug}">
              {term.name}
            </a>
          </li>
        {/each}
      </ul>
    </span>
  {/if}
</div>
