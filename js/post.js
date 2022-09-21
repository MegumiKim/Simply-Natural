import { createElement } from "./createHTMLelements/createElement.js";
import { formatDate } from "./createHTMLelements/formatDate.js";
import { renderThumbnails } from "./createHTMLelements/renderThumbnail.js";
import { sendForm } from "./form/sendForm.js";
import { modalFunc } from "./modal.js";
import { userAlert } from "./userAlert.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts/52?_fields=id,date,title,content,_links,_embedded&_embed=wp:featuredmedia,wp:term`;

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
  // console.log(post._embedded["wp:term"][0][0].id);
  const relatedPostUrl =
    "https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts/?category=" +
    post._embedded["wp:term"][0][0].id +
    "&per_page=2";

  const title = document.querySelector("title");
  title.innerHTML = `Simply Natural | ${post.title.rendered}`;
  const h1 = createElement("h1", "h1-post", post.title.rendered);
  const content = createElement("p", "content", post.content.rendered);

  const comment = createElement("div", "comment", undefined);
  const element = createElement("div", "post", undefined, [
    h1,
    content,
    // comment,
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

  renderThumbnails(relatedPostUrl, relatedContainer);
}

// renderRelatedPosts(url, relatedContainer, id);

const form = document.querySelector("#comment-form");
const userFeedback = document.querySelector(".user-feedback");

form.addEventListener("submit", postComment);

async function postComment(event) {
  event.preventDefault();
  const form = event.target;

  const postId = document.querySelector("#postId");
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const comment = document.querySelector("#comment");

  const data = JSON.stringify({
    post: postId.value,
    author_name: name.value,
    author_email: email.value,
    content: comment.value,
  });

  console.log(data);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
  });
  userFeedback.innerHTML = userAlert("success", "Thank you for your message");
  form.reset();
}
