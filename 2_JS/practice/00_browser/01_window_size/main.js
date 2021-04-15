const tag = document.querySelector(".tag");

const updatePageSize = (event) => {
  const screenSizeText = `window.screen: ${window.screen["width"]}, ${window.screen["height"]}`;
  const outerSizeText = `window.outer: ${window.outerWidth}, ${window.outerHeight}`;
  const innerSizeText = `window.inner: ${window.innerWidth}, ${window.innerHeight}`;
  const clientSizeText = `documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;

  const textAray = [
    screenSizeText,
    outerSizeText,
    innerSizeText,
    clientSizeText,
  ];

  let idx = 0;
  for (const child of tag.children) {
    child.innerText = textAray[idx++];
  }
};

const init = () => {
  window.addEventListener("resize", updatePageSize);
  updatePageSize();
};

init();
