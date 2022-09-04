import {
  createThumbnail,
  fetchCategory,
  fetchImg,
} from "../../createHTMLelements/createThumbnail.js";

const url = "http://localhost:10003/wp-json/wp/v2/posts/";
const container = document.querySelector(".list-of-post_container");
export async function fetchPosts(url, container) {
  try {
    const response = await fetch(url);
    const posts = await response.json();

    posts.forEach(async function (post) {
      console.log(post);
      const thumbnail = await createThumbnail(post);
      const img = await fetchImg(post);
      const category = await fetchCategory(post);
      thumbnail.append(category);
      thumbnail.append(img);
      container.append(thumbnail);
    });
  } catch (e) {
    console.log(e);
  }
}

fetchPosts(url, container);

// function renderThumbnail(post, container) {
//   const title = post.title.rendered;
//   const img = post.featured_media;
//   const date = post.date;
//   const category = post.categories[0];

//   container.append = [title, img];
// }
