import { fetchAPI } from "../utils/fetchAPI.js";

export async function renderCategoryTitle(baseUrl, id) {
  try {
    const categoryUrl = baseUrl + `categories/${id}`;
    const category = await fetchAPI(categoryUrl);
    const title = await category.name;

    return title;
  } catch (e) {
    return "unknown";
  }
}
