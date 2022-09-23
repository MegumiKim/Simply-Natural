import { fetchAPI } from "../fetchAPI.js";
import { userAlert } from "../userAlert.js";

export async function renderTitle(url) {
  try {
    const category = await fetchAPI(url);
    const title = await category.name;
    console.log(category);

    return title;
  } catch (e) {
    const errorMessage = userAlert("error", "failed to fetch data");
    return errorMessage;
  }
}
