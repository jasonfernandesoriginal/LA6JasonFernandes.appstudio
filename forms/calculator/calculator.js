/*
btnCalc.onclick=function(){
  let num1 = Number(num1Input.value)
  let num2 = Number(num2Input.value)
  let sum = num1 + num2
  lblcalcMessage.value = "Your two numbers added together are: " + sum
}
*/
btnAdd.onclick=function() {
int1 = Number(num1Input.value)
int2 = Number(num2Input.value)
let sum = int1 + int2
lblcalcMessage.value= "The answer is " + sum
}

btnMultiply.onclick=function() {
int1 = Number(num1Input.value)
int2 = Number(num2Input.value)
mult = int1*int2 
lblcalcMessage.value = "The answer is"+ mult 
}


resetOnClick.onclick=function(){
  lblCalcMessage.value = ""
}