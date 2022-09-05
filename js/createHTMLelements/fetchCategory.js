export async function fetchCategory(post) {
  const id = post.categories[0];
  const url = "http://localhost:10003/wp-json/wp/v2/categories/" + id;

  try {
    const response = await fetch(url);
    const json = await response.json();

    const element = document.createElement("p");
    element.innerHTML = json.name;
    element.classList.add("category");

    return element;
  } catch (e) {
    console.log(e);
  }
}
