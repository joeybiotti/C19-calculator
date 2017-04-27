"use-strict"

console.log("calculator.js");
console.log("output", output);

var num1 = document.getElementById("number1").value;
var num2 = document.getElementById("number2").value;


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
multiply = function(mult){
  return num1 * num2;
};

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

addition = function(add){
  return num1 + num2;
};

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
subtract = function(sub){
  return num1 - num2;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

divide = function(div){
  return num1 / num2;
};


/* Create a function that accepts three arguments.
1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

var addBtn = document.getElementById("add").addEventListener("click", addition);
var subBtn = document.getElementById("subtract").addEventListener("click", subtract);
var multBtn = document.getElementById("multiply").addEventListener("click", multiply);
var divBtn = document.getElementById("divide").addEventListener("click", divide);
var equalsBtn = document.getElementById("equals").addEventListener('click', equals);
var outputArea = document.getElementById("output");

output = function(math){
  if(addition){
    return add;
  }else if(subtract){
    return sub;
  }else if(multiply){
    return mult;
  }else if(divide){
    return div;
  }
}
























