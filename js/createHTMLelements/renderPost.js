import { createElement } from "./createElement.js";
import { modalFunc } from "../components/modal.js";
import { userAlert } from "../utils/userAlert.js";
import { fetchAPI } from "../utils/fetchAPI.js";

export async function renderPost(url, container) {
  container.innerHTML = "";
  try {
    const post = await fetchAPI(url);
    const title = document.querySelector("title");
    title.innerHTML = `Simply Natural | ${post.title.rendered}`;
    const h1 = createElement("h1", "h1-post", post.title.rendered);
    const content = createElement("p", "content", post.content.rendered);
    const element = createElement("div", "post", undefined, [h1, content]);
    container.append(element);
    const figures = document.querySelectorAll("figure");
    modalFunc(figures);
  } catch (e) {
    container.innerHTML = userAlert("error", "failed to fetch data");
  }
}
