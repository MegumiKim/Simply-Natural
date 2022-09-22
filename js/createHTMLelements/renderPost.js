import { createElement } from "./createElement.js";
import { modalFunc } from "../modal.js";
import { userAlert } from "../userAlert.js";
import { fetchAPI } from "../fetchAPI.js";

export async function renderPost(url, container) {
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
