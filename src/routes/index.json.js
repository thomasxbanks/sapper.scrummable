import { getPosts } from '../utils/get/posts';

export async function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  const response = await getPosts(1);
  console.log(Array.isArray(response.posts));
  const contents = JSON.stringify(response);
  res.end(contents);
}
