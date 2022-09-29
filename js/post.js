import { renderPost } from "./createHTMLelements/renderPost.js";
import { renderComments } from "./createHTMLelements/renderComments.js";
import { renderRelatedPosts } from "./createHTMLelements/renderRelatedPost.js";
import { postComment } from "./components/form/postComment.js";
import { commentsInputOnBlur } from "./components/form/validateForm.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const baseURL = `https://kimuramegumi.site/SimplyNatural/wp-json/wp/v2/posts/${id}`;
const url =
  baseURL +
  "?_fields=id,date,title,content,_links,_embedded&_embed=wp:featuredmedia,wp:term";

const postContainer = document.querySelector(".blog-container");
const commentsContainer = document.querySelector(".previous-comments");
const commentForm = document.querySelector("#comment-form");
const relatedContainer = document.querySelector(".related-posts-container");

renderPost(url, postContainer);
renderComments(id, commentsContainer);
renderRelatedPosts(url, relatedContainer, id);
commentForm.addEventListener("submit", (event) => postComment(event, id));
commentsInputOnBlur();
