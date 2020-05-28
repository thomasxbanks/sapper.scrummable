import fetch from 'isomorphic-fetch';

const getPost = async (slug) => {
  const endpoint = `http://scrummable.com/wp-json/wp/v2/posts?_embed&slug=${slug}`;
  const raw = await fetch(endpoint);
  const response = await raw.json();
  console.log('GET SINGLE POST BY SLUG\n>>>>>', response);
  return response;
};

export async function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;
  const post = await getPost(slug);
  if (post) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify(post[0]));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });

    res.end(JSON.stringify({
      message: 'Not found',
    }));
  }
}
