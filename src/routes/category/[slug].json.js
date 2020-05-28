import fetch from 'isomorphic-fetch';

const getPosts = async (slug) => {
  const categoryUrl = 'http://scrummable.com/wp-json/wp/v2/categories?_embed';
  const menu = await fetch(categoryUrl);
  const cats = await menu.json();
  const current = cats.filter((item) => item.slug === slug)[0];
  const endpoint = `http://scrummable.com/wp-json/wp/v2/posts?_embed&categories=${current.id}`;
  const raw = await fetch(endpoint);
  const posts = await raw.json();
  return { current, posts };
};


export async function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  const response = await getPosts(req.params.slug);
  const contents = JSON.stringify(response);
  res.end(contents);
}
