const special = document.querySelector(".special");
const scrollBy = document.getElementById("scroll-by");
const scrollTo = document.getElementById("scroll-to");
const scrollInto = document.getElementById("scroll-into");

(function init() {
  scrollBy.addEventListener("click", (event) => {
    window.scrollBy({
      top: 100,
      left: 0,
      behavior: "smooth",
    });
  });

  scrollTo.addEventListener("click", (event) => {
    window.scrollTo(0, 100);
  });

  scrollInto.addEventListener("click", (event) => {
    special.scrollIntoView();
  });

  special.addEventListener("click", (event) => {
    const rect = special.getBoundingClientRect();
    console.log(rect);
    console.log(`clientX: ${event.clientX}, clientY: ${event.clientY}`);
    console.log(`pageX: ${event.pageX}, pageY: ${event.pageY}`);
  });
})();
