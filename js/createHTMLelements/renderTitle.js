import { fetchAPI } from "../utils/fetchAPI.js";

export async function renderTitle(url) {
  try {
    const category = await fetchAPI(url);
    const title = await category.name;

    return title;
  } catch (e) {
    return "title not available";
  }
}
