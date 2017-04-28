const addBtn = document.getElementById("add");
const subBtn = document.getElementById("subtract");
const multBtn = document.getElementById("multiply");
const divBtn = document.getElementById("divide");
const outputArea = document.getElementById("output");


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

multBtn.addEventListener("click", () => {
  const num1 = document.getElementById("value1");
  const num2 = document.getElementById("value2");
  result = multiply(num1.value, num2.value);
  outputArea.innerHTML = result;
});

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

addBtn.addEventListener("click", () =>{
  const num1 = document.getElementById("value1");
  const num2 = document.getElementById("value2");
  result = add(num1.value, num2.value);
  outputArea.innerHTML = result;
})

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

subBtn.addEventListener("click", ()=>{
  const num1 = document.getElementById("value1");
  const num2 = document.getElementById("value2");
  result = subtract(num1.value, num2.value);
  outputArea.innerHTML = result;
})

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

divBtn.addEventListener("click", ()=>{
  const num1 = document.getElementById("value1");
  const num2 = document.getElementById("value2");
  result = divide(num1.value, num2.value);
  outputArea.innerHTML = result;
})

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */


function add(x,y){
  const addAnswer = value1(x) + value2(y);
  return addAnswer;
};

function multiply(x,y){
  const multAnswer = Number(x) * Number(y);
  return multAnswer;
};

function subtract(x,y){
  const subAnswer = Number(x) - Number(y);
  return subAnswer;
};

function divide(x,y){
  const divAnswer = Number(x) / Number(y);
  return divAnswer;
};


