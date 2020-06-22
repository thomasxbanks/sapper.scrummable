import fetch from 'isomorphic-fetch';
import { perPage } from '../../Config';

export const getPosts = async (page) => {
  const endpoint = `http://scrummable.com/wp-json/wp/v2/posts?_embed&per_page=${perPage + 1}&page=${page}`;
  const raw = await fetch(endpoint);
  const posts = await raw.json();
  const hasMore = (posts.length > perPage);
  posts.splice(-1);
  return { hasMore, posts };
};
