// const url = "http://localhost:10003/wp-json/wp/v2/posts";

export async function fetchPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();

    return posts;
  } catch (e) {
    console.log(e);
  }
}
