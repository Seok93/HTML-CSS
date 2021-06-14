const addListBtn = document.querySelector("#jsAddListBtn");
const inputListTxt = document.querySelector("#jsInputListTxt");
const listContainer = document.querySelector("#jsListContainer");

const TODOS_LS = "toDos";

let toDos = [];

const onLoadList = () => {
  const list = JSON.parse(localStorage.getItem(TODOS_LS));
  list.forEach((item) => {
    toDos.push(item);
    createList(item);
  });
};

const onSaveList = () => {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
};

const createList = (text) => {
  const rowContainer = document.createElement("div");
  const textContainer = document.createElement("span");
  const funcContainer = document.createElement("span");
  const trashIcon = document.createElement("i");
  const checkIcon = document.createElement("i");

  rowContainer.setAttribute("class", "shopping-list__row");
  rowContainer.append(textContainer, funcContainer);
  listContainer.appendChild(rowContainer);
  rowContainer.scrollIntoView({ block: "center" });

  textContainer.setAttribute("class", "shopping-list__text");
  textContainer.textContent = text;

  trashIcon.classList.add("far");
  trashIcon.classList.add("fa-trash-alt");
  trashIcon.classList.add("remove-btn");
  trashIcon.addEventListener("click", removeList);

  checkIcon.classList.add("fas");
  checkIcon.classList.add("fa-check-circle");
  checkIcon.classList.add("check-btn");
  checkIcon.addEventListener("click", checkList);

  // 기능 컨테이너 부분
  funcContainer.setAttribute("class", "shopping-list__func");
  funcContainer.append(trashIcon, " | ", checkIcon);
};

const onAddList = (event) => {
  const text = inputListTxt.value;

  if (text.trim().length === 0) {
    alert("구매 목록을 입력해주세요.");
    return;
  }

  toDos.push(text);
  onSaveList();

  createList(text);
  inputListTxt.value = "";
  inputListTxt.focus();
};

const removeList = (event) => {
  const removeListBtn = event.target;
  const listText = removeListBtn.parentElement.parentElement.children[0];
  const targetListContiner = removeListBtn.parentElement.parentElement;

  toDos = toDos.filter((toDo) => {
    return toDo != listText.innerText;
  });
  onSaveList();

  targetListContiner.remove();
};

const checkList = (event) => {
  const checkListBtn = event.target;
  const listText = checkListBtn.parentElement.parentElement.children[0];
  const isChecked = checkListBtn.dataset.checked;

  if (isChecked === "true") {
    checkListBtn.dataset.checked = false;
    checkListBtn.classList.add("btn--no-checked");
    checkListBtn.classList.remove("btn--checked");
    listText.classList.add("text--no-checked");
    listText.classList.remove("text--checked");
  } else {
    checkListBtn.dataset.checked = true;
    checkListBtn.classList.add("btn--checked");
    checkListBtn.classList.remove("btn--no-checked");
    listText.classList.add("text--checked");
    listText.classList.remove("text--no-checked");
  }
};

const init = () => {
  onLoadList();
  addListBtn.addEventListener("click", onAddList);
  inputListTxt.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      onAddList();
    }
  });
};
init();
