/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
var multply = document.getElementById("multiply").addEventListener("click", function multiplication(event){
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

var mathed = function mathItUp(math){
  if(addition){
    return addition
  } else if(multiply){
      return(multiply){
    if(subtract){
      return(subtract);
    if(divide){
      return(divide);
  }
};

var output = document.getElementById("output");

console.log("The Answer is ", mathed.value);
output.innerHTML = "The Answer is ", + mathed.value;






