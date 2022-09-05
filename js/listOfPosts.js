import { fetchPosts } from "./form/API/fetchPosts.js";
import { createThumbnail } from "./createHTMLelements/createThumbnail.js";
const container = document.querySelector(".list-of-post_container");

// fetchPosts(10, container);

async function showThumbnails() {
  const fetchedPost = await fetchPosts(4);

  fetchedPost.forEach(async function (post) {
    const thumbnail = await createThumbnail(post);
    container.append(thumbnail);
  });
}

showThumbnails();
