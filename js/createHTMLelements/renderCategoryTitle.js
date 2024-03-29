import { fetchAPI } from "../utils/fetchAPI.js";

export async function renderCategoryTitle(url, id) {
  try {
    const category = await fetchAPI(url);
    const title = await category.name;

    return title;
  } catch (e) {
    return "unknown";
  }
}
