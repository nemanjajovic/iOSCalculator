const numbers = document.querySelectorAll(".numbers");
const result = document.querySelector(".result");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".ac");
const plusMinus = document.querySelector(".pm");
const percent = document.querySelector(".percent");

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let operator = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    let atr = e.target.getAttribute("value");
    if (isFirstValue === false) {
      getFirstValue(atr);
    }
    if (isSecondValue === false) {
      getSecondValue(atr);
    }
  });
}

function getFirstValue(el) {
  result.innerHTML = "";
  firstValue += el;
  result.innerHTML = firstValue;
  firstValue = +firstValue;
}

function getSecondValue(el) {
  if (firstValue !== "" && operator !== "") {
    secondValue += el;
    result.innerHTML = secondValue;
    secondValue = +secondValue;
  }
}

function getOperator() {
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", (e) => {
      operator = e.target.getAttribute("value");
      isFirstValue = true;
    });
  }
}
getOperator();

equal.addEventListener("click", () => {
  result.innerHTML = "";
  if (operator === "+") {
    resultValue = firstValue + secondValue;
  } else if (operator === "-") {
    resultValue = firstValue - secondValue;
  } else if (operator === "x") {
    resultValue = firstValue * secondValue;
  } else if (operator === "/") {
    resultValue = firstValue / secondValue;
  }
  result.innerHTML = resultValue;

  firstValue = resultValue;
  secondValue = "";

  checkResultLength();
});

function checkResultLength() {
  resultValue = JSON.stringify(resultValue);

  if (resultValue.length >= 8) {
    resultValue = JSON.parse(resultValue);
    result.innerHTML = resultValue.toFixed(5);
  }
}

plusMinus.addEventListener("click", () => {
  result.innerHTML = "";
  if (firstValue !== "") {
    resultValue = -firstValue;
    firstValue = resultValue;
  }
  if (firstValue !== "" && secondValue !== "" && operator !== "") {
    resultValue = -resultValue;
  }

  result.innerHTML = resultValue;
});

percent.addEventListener("click", () => {
  result.innerHTML = "";
  if (firstValue !== "") {
    resultValue = firstValue / 100;
    firstValue = resultValue;
  }
  if (firstValue !== "" && secondValue !== "" && operator !== "") {
    resultValue = resultValue / 100;
  }

  result.innerHTML = resultValue;
});

clear.addEventListener("click", () => {
  result.innerHTML = 0;
  firstValue = "";
  isFirstValue = false;
  secondValue = "";
  isSecondValue = false;
  operator = "";
  resultValue = 0;
});
