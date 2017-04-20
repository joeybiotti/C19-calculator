/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
var multiply = document.getElementById("multiply").addEventListener("click", function multiplication(event){
  return(value1 * value2);
});
/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
var addition = document.getElementById("add").addEventListener("click", function addition(event){
  return(value1 + value2);
});

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
var subtract = document.getElementById("subtract").addEventListener("click", function subtraction(event){
  return(value1 - value2);
});

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
var divide = document.getElementById("divide").addEventListener("click", function division(event){
  return(value1 - value2);
});


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

var value1 = document.getElementById("number1").input;
var value2 = document.getElementById("number2").input;
var output = document.getElementById("output");
var doMath = document.getElementById("submit").addEventListener("click", function(mathStuff){
  if(multiply){
    return multiply;
  } else if(addition){
      return addition};
    if(subtract){
      return subtract};
    if(divide){
      return(divde)};
});


console.log("Number 1", value1);
console.log("Number 2", value2);

// console.log("The Answer is ", product.value);
// output.innerHTML = "The Answer is ", + product.value;






