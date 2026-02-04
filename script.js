
/* CALCULATOR KATA */

/* This is best done with a JS switch control, though can also be a chain of conditionals. */

/* FUNCTION main() 
 * Perform basic arithmetic as a calculator
 * @param: none (main never gets params)
 * @return: none (main never gets returns)
 */
function main(){
   let operation = prompt("+, -, *, or /")
   let a = parseInt(prompt("What is number a?"));
   let b = parseInt(prompt("What is number b?"));
   let result;
   if (operation == "+"){
      result = add(a,b);
   } else if (operation == "-"){
      
   } else if (operation == "*"){
      result = multiply(a,b);
   } else {
      result = divide(a,b);
   }
   alert(a + operation + b + "=" + result)
 }

/* FUNCTION add(a,b)
 * define a function called add with two number parameters a and b
 * @param: a, b (integers)
 * @return: a + b
 */
function add(a,b){
   return a + b;
}
/* FUNCTION subtract(a,b)
 * define a function called subtract with two number parameters a and b
 * @param: a, b (integers)
 * @return: a - b
 */
function subtract(a,b){
   return a - b;
}
/* FUNCTION multiply(a,b)
 * define a function called multiply with two number parameters a and b
 * @param: a, b (integers)
 * @return: a * b (* means multiply)
 */
function multiply(a,b){
   return a * b;
}
/* FUNCTION divide(a,b)
 * define a function called divide with two number parameters a and b
 * @param: a, b (integers)
 * @return: a / b (/ means divided by)
 */
function divide(a,b){
   return a / b;
}