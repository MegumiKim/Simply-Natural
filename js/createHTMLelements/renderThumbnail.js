import { createThumbnail } from "./createThumbnail.js";
import { fetchPosts } from "../form/API/fetchPosts.js";
import { userAlert } from "../userAlert.js";

export async function renderThumbnails(url, container) {
  container.innerHTML = "";
  const fetchedPost = await fetchPosts(url);

  if (fetchedPost.length) {
    fetchedPost.forEach(async function (post) {
      console.log(post);
      const thumbnail = await createThumbnail(post);
      container.append(thumbnail);
    });
  } else {
    container.innerHTML += userAlert("error", "Sorry, no results");
  }
}
