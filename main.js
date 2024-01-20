let abt = document.querySelectorAll("button");
let int = document.querySelector("#int");

// var currentInput = "";

function btnsvl(vl) {
  // currentInput += vl;
  // int.value = currentInput;
  int.value += vl;
}

function clean() {
  // int.value = null;
  int.value = "";
  // currentInput ="";
}

// function calculateResult() {
//   try {
//     // Evaluate the expression using eval() function
//     int.value = eval(int.value);
//   } catch (abt) {
//     int.value = "error";
//   }
// }
function  calculateResult() {
  // eval() ek built-in JavaScript function hai jo ek string ko JavaScript code mein evaluate karta hai. Iska basic syntax yeh hai:
  
  int.value = eval(int.value)

}