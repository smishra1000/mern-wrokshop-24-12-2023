// let a = 10;
// let b = 20;
// console.log(a+b)

function calculate(){
   let firstNumber = document.getElementById("firstnumber").value;
   let secondNumber = document.getElementById("secondnumber").value;
   console.log(firstNumber,secondNumber)
   let result = +firstNumber + +secondNumber;
   let  p = document.createElement("p");
   p.style.color="red";
   p.textContent="sum of 2 number = "+result;
   document.body.appendChild(p)


}