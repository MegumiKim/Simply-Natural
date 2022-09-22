import { createThumbnail } from "./createThumbnail.js";
import { userAlert } from "../userAlert.js";
import { fetchAPI } from "../fetchAPI.js";

export async function renderThumbnails(url, container) {
  container.innerHTML = "";
  const fetchedPost = await fetchAPI(url);

  if (fetchedPost.length) {
    fetchedPost.forEach(async function (post) {
      const thumbnail = await createThumbnail(post);
      container.append(thumbnail);
    });
  } else {
    container.innerHTML += userAlert("error", "Sorry, no results");
  }
}
