import { postComment } from "./form/postComment.js";
import { renderRelatedPosts } from "./form/renderRelated.post.js";
import { renderPost } from "./createHTMLelements/renderPost.js";
import { renderComments } from "./createHTMLelements/renderComments.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const baseURL = `https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts/${id}`;
const fieldsPram =
  "?_fields=id,date,title,content,_links,_embedded&_embed=wp:featuredmedia,wp:term";
const url = baseURL + fieldsPram;

const postContainer = document.querySelector(".container");
const commentsContainer = document.querySelector(".previous-comments");
const relatedContainer = document.querySelector(".related-posts-container");
const commentForm = document.querySelector("#comment-form");

renderPost(url, postContainer);
renderComments(id, commentsContainer);
renderRelatedPosts(url, relatedContainer, id);
commentForm.addEventListener("submit", (event) => postComment(event, id));
