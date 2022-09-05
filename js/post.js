const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `http://localhost:10003/wp-json/wp/v2/posts/${id}`;

const container = document.querySelector(".container");

async function fetchPost() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);
  } catch (e) {
    console.log(e);
  }
}

fetchPost();
