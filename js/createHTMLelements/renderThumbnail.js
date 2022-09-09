import { createThumbnail } from "./createThumbnail.js";
import { fetchPosts } from "../form/API/fetchPosts.js";

export async function renderThumbnails(url, container) {
  container.innerHTML = "";
  const fetchedPost = await fetchPosts(url);

  fetchedPost.forEach(async function (post) {
    const thumbnail = await createThumbnail(post);
    container.append(thumbnail);
  });
}
