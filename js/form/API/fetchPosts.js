// const url = "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts";

export async function fetchPosts(url) {
  try {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(response.body);
    // const total = response.headers.get("x-wp-total");
    // console.log(total);

    return posts;
  } catch (e) {
    console.log(e);
  }
}
