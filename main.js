let abt = document.querySelectorAll("button");
let int = document.querySelector("#int");

var currentInput = "" ;



function btnsvl(num){
   
    currentInput += num;
    updateDisplay()
     

}
function updateDisplay() {
    int.value = currentInput || '0';
}