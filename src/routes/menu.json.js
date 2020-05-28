import fetch from 'isomorphic-fetch';

const getPosts = async () => {
  const endpoint = 'http://scrummable.com/wp-json/wp/v2/categories?_embed';
  const raw = await fetch(endpoint);
  const response = await raw.json();
  return response;
};


export async function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  const response = await getPosts();
  const contents = JSON.stringify(response);
  res.end(contents);
}
