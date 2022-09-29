export async function fetchAPI(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();

    return json;
  } catch (e) {
    console.log(e);
  }
}
