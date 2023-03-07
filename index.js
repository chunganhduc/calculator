let num1 = "";
let num2 = "";
let operator = null;

let display = document.getElementById("display");

const add = () => {
  operator = "add";
};

const subtract = () => {
  operator = "subtract";
};

const myclear = () => {
  num1 = "";
  num2 = "";
  operator = null;
  display.innerHTML = "0";
  console.log("hello");
};

const equal = () => {
  let total;
  if (operator === "subtract") {
    total = parseInt(num1) - parseInt(num2);
  } else if (operator === "add") {
    total = parseInt(num1) + parseInt(num2);
  }

  display.innerHTML = total;
};

const addNumber = (num) => {
  if (operator != null) {
    num2 += num;
    display.innerHTML = num2;
  } else {
    num1 += num;
    display.innerHTML = num1;
  }

  console.log(num1);
};
