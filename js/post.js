import { createElement } from "./createHTMLelements/createElement.js";
import { formatDate } from "./createHTMLelements/formatDate.js";
import { renderThumbnails } from "./createHTMLelements/renderThumbnail.js";
import { modalFunc } from "./modal.js";
import { userAlert } from "./userAlert.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts/${id}?_fields=id,date,title,content,_links,_embedded&_embed=wp:featuredmedia,wp:term`;

// const url = `https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts/${id}?_embed`;

const container = document.querySelector(".container");

async function fetchPost(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();

    return json;
  } catch (e) {
    container.innerHTML = userAlert("error", "Failed to fetch data");
  }
}

async function renderPost(url) {
  const post = await fetchPost(url);
  console.log(post._embedded["wp:term"][0][0].id);
  const relatedPostUrl =
    "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts/?category=" +
    post._embedded["wp:term"][0][0].id +
    "&per_page=2";

  console.log(relatedPostUrl);

  const title = document.querySelector("title");
  title.innerHTML = `Simply Natural | ${post.title.rendered}`;
  const h1 = createElement("h1", "h1-post", post.title.rendered);
  const content = createElement("p", "content", post.content.rendered);

  const comment = createElement("div", "comment", undefined);
  const element = createElement("div", "post", undefined, [
    h1,
    content,
    comment,
  ]);

  container.append(element);
  const figures = document.querySelectorAll("figure");
  modalFunc(figures);
}

renderPost(url);

// async function modalFunc(figures) {
//   figures.forEach(function (figure) {
//     console.log(figure);
//   });
// }

// Show Comments

// const commentsContainer = document.querySelector(".comments");
// async function fetchComments(id) {
//   const commentsUrl = `https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/comments?post=${id}`;

//   const response = await fetch(commentsUrl);
//   const json = await response.json();

//   return json;
// }

// async function renderComment(postID) {
//   const comments = await fetchComments(postID);

//   if (comments) {
//     comments.forEach((comment) => {
//       const name = createElement("p", "name_comment", comment.author_name);
//       const dateFormatted = formatDate(comment);
//       const date = createElement("time", "date_comment", dateFormatted);
//       const metaData = createElement("div", "comment-meta", undefined, [
//         name,
//         date,
//       ]);
//       const content = comment.content.rendered;
//       const element = createElement("div", "user-comment", content, [metaData]);

//       commentsContainer.append(element);
//     });
//   }
// }

// renderComment(id);

const relatedContainer = document.querySelector(".related-posts-container");

async function renderRelatedPosts(url, relatedContainer, excludeID) {
  const post = await fetchPost(url);

  const categoryID = post._embedded["wp:term"][0][0].id;
  const argument =
    "&_fields=id,date,title,_links,_embedded&_embed=wp:featuredmedia,wp:term";
  const relatedPostUrl =
    "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts/?per_page=2" +
    argument +
    "&category=" +
    categoryID +
    `&exclude=${excludeID}`;

  console.log(relatedPostUrl);

  renderThumbnails(relatedPostUrl, relatedContainer);
}

renderRelatedPosts(url, relatedContainer, id);

const commentForm = document.querySelector("#comment-form");

commentForm.onsubmit = async function postForm() {
  // const proxy = "https://noroffcors.herokuapp.com/";
  const url =
    "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/comments?post=52";
  try {
    console.log(new FormData(form));
    const response = await fetch(url, {
      method: form.method,
      body: new FormData(form),
    });

    form.innerHTML = userAlert("success", "Thank you");
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
