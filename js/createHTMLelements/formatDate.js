export function formatDate(post) {
  let initialDate = post.date;

  let formattedDate = new Date(initialDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    // hour: none,
    // minute: none,
    // hour12: false,
  });

  return formattedDate;
}
