const printText = document.querySelector(".calc__print");
const numBtns = document.querySelectorAll(".js-number");
const resetBtn = document.querySelector(".js-reset");
const plusBtn = document.querySelector(".js-plus");
const minusBtn = document.querySelector(".js-minus");
const multiplyBtn = document.querySelector(".js-multiply");
const divisionBtn = document.querySelector(".js-division");
const equalsBtn = document.querySelector(".js-equals");

const NO_INPUTED_DATA = undefined;
const OPERATOR_NONE = 0;
const OPERATOR_PLUS = 1;
const OPERATOR_MINUS = 2;
const OPERATOR_MULTIPLY = 3;
const OPERATOR_DIVISION = 4;

let beforeData = 0;
let currentData = NO_INPUTED_DATA;
let selectedOperator = OPERATOR_NONE;

function print(number) {
  printText.innerText = number;
}

function saveResult() {
  beforeData = currentData === NO_INPUTED_DATA ? 0 : currentData;
  currentData = undefined;
}

function operate() {
  switch (selectedOperator) {
    case OPERATOR_PLUS:
      currentData = beforeData + currentData;
      break;
    case OPERATOR_MINUS:
      currentData = beforeData - currentData;
      break;
    case OPERATOR_MULTIPLY:
      currentData = beforeData * currentData;
      break;
    case OPERATOR_DIVISION:
      currentData = beforeData / currentData;
      break;
    default:
      return;
  }
  print(currentData);
}

function resetHandler(event) {
  selectedOperator = OPERATOR_NONE;
  currentData = NO_INPUTED_DATA;
  beforeData = 0;
  print(0);
}

function numberHandler(event) {
  const number = parseFloat(event.target.dataset["num"]);

  if (currentData === NO_INPUTED_DATA) currentData = number;
  else currentData = currentData * 10 + number;

  print(currentData);
}

function plusHandler(event) {
  if (selectedOperator === OPERATOR_NONE) {
    selectedOperator = OPERATOR_PLUS;
    saveResult();
    return;
  }

  if (currentData === NO_INPUTED_DATA) return;
  operate();
  saveResult();

  if (selectedOperator !== OPERATOR_PLUS) selectedOperator = OPERATOR_PLUS;
}

function minusHandler(event) {
  if (selectedOperator === OPERATOR_NONE) {
    selectedOperator = OPERATOR_MINUS;
    saveResult();
    return;
  }

  if (currentData === NO_INPUTED_DATA) return;
  operate();
  saveResult();

  if (selectedOperator !== OPERATOR_MINUS) selectedOperator = OPERATOR_MINUS;
}

function multiplyHandler(event) {
  if (selectedOperator === OPERATOR_NONE) {
    selectedOperator = OPERATOR_MULTIPLY;
    saveResult();
    return;
  }

  if (currentData === NO_INPUTED_DATA) return;
  operate();
  saveResult();

  if (selectedOperator !== OPERATOR_MULTIPLY)
    selectedOperator = OPERATOR_MULTIPLY;
}

function divisionHandler(event) {
  if (selectedOperator === OPERATOR_NONE) {
    selectedOperator = OPERATOR_DIVISION;
    saveResult();
    return;
  }

  if (currentData === NO_INPUTED_DATA) return;
  operate();
  saveResult();

  if (selectedOperator !== OPERATOR_DIVISION)
    selectedOperator = OPERATOR_DIVISION;
}

function equalsHandler(event) {
  if (selectedOperator === OPERATOR_NONE) return;
  if (currentData === NO_INPUTED_DATA) return;
  operate();
  // currentData = NO_INPUTED_DATA;
  beforeData = 0;
  selectedOperator = OPERATOR_NONE;
}

function init() {
  // calculator input event
  numBtns.forEach((numBtn) => numBtn.addEventListener("click", numberHandler));

  // calculator function event
  equalsBtn.addEventListener("click", equalsHandler);
  resetBtn.addEventListener("click", resetHandler);
  plusBtn.addEventListener("click", plusHandler);
  minusBtn.addEventListener("click", minusHandler);
  multiplyBtn.addEventListener("click", multiplyHandler);
  divisionBtn.addEventListener("click", divisionHandler);
}
init();
