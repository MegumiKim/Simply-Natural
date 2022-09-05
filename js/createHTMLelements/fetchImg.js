export async function fetchImg(post) {
  const id = post.featured_media;
  const url = "http://localhost:10003/wp-json/wp/v2/media/" + id;

  try {
    const response = await fetch(url);
    const json = await response.json();

    const element = document.createElement("img");
    element.src = json.guid.rendered;
    element.classList.add("thumbnail_img");

    return element;
  } catch (e) {
    console.log(e);
  }
}
