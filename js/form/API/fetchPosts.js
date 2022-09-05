// import { createThumbnail } from "../../createHTMLelements/createThumbnail.js";

// const url = "http://localhost:10003/wp-json/wp/v2/posts/";

export async function fetchPosts(numberOfPosts) {
  const url =
    "http://localhost:10003/wp-json/wp/v2/posts?per_page=" + numberOfPosts;
  try {
    const response = await fetch(url);
    const posts = await response.json();
    return posts;
  } catch (e) {
    console.log(e);
  }
}

// export async function fetchPosts(numberOfPosts, container) {
//   const url =
//     "http://localhost:10003/wp-json/wp/v2/posts?per_page=" + numberOfPosts;
//   try {
//     const response = await fetch(url);
//     const posts = await response.json();

//     posts.forEach(async function (post) {
//       console.log(post);
//       const thumbnail = await createThumbnail(post);
//       container.append(thumbnail);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// }

// fetchPosts(url, container);
