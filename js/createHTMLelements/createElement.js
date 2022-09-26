export function createElement(tag, classes, innerHTML, children, src, altText) {
  const element = document.createElement(tag);
  element.classList.add(classes);

  if (innerHTML) {
    element.innerHTML = innerHTML;
  }

  if (Array.isArray(children) && children.length) {
    element.append(...children);
  }
  if (src) {
    element.src = src;
  }
  if (altText) {
    element.alt = altText;
  }

  return element;
}
