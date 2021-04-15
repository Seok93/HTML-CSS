const btn = document.querySelector(".find-btn");
const rabbit = document.querySelector("#rabbit");

btn.addEventListener("click", (event) => {
  rabbit.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});
