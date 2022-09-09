const proxy = "https://noroffcors.herokuapp.com/";
const url = "http://localhost:10003/wp-json/wp/v2/categories/";

export function sortByCategory() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const categoryID = params.get("category");
  const categoryUrl = url + `?category=${categoryID}`;

  if (categoryID) {
    return getItems(categoryUrl, productsContainer);
  } else {
    return getItems(url, productsContainer);
  }
}
