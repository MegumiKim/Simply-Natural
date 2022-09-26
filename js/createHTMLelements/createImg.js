import { createElement } from "./createElement.js";

export async function createImg(post, parent) {
  try {
    const img = await createElement(
      "img",
      `${parent}-img`,
      undefined,
      undefined,
      post._embedded["wp:featuredmedia"][0].source_url,
      post._embedded["wp:featuredmedia"][0].alt_text
    );

    img.width = "640";
    img.height = "360";
    const imgWrapper = createElement(
      "div",
      `${parent}-img-wrapper`,
      undefined,
      [img]
    );

    return imgWrapper;
  } catch (e) {
    console.log(e);
    return "undefined";
  }
}
