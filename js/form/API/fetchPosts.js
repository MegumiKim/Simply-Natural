// const url = "http://localhost:10003/wp-json/wp/v2/posts";

export async function fetchPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    // const total = response.headers.get("x-wp-total");
    // console.log(total);

    return posts;
  } catch (e) {
    console.log(e);
  }
}
