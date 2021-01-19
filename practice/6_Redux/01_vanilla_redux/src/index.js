const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

let count = 0;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count += 1;
  updateText();
};

const handleMinus = () => {
  count -= 1;
  updateText();
};

const init = () => {
  updateText();
  add.addEventListener("click", handleAdd);
  minus.addEventListener("click", handleMinus);
};

init();
