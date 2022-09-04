import { createThumbnail } from "../../createHTMLelements/createThumbnail.js";

const container = document.querySelector(".list-of-post_container");

export async function fetchPosts(url, container) {
  const url = "http://localhost:10003/wp-json/wp/v2/posts/";
  try {
    const response = await fetch(url);
    const posts = await response.json();

    posts.forEach(async function (post) {
      console.log(post);
      const thumbnail = await createThumbnail(post);
      container.append(thumbnail);
    });
  } catch (e) {
    console.log(e);
  }
}

fetchPosts(url, container);
