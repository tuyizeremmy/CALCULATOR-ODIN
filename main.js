console.log("hello")



let operator ='';
let previousValue ='';
let currentValue ='';

document.addEventListener("DOMContentLoaded", function(){
    let clear =document.querySelector("#clear-btn");
    let equal =document.querySelector(".equal");
    let decimal =document.querySelector(".decimal");
    let mumbers = document.querySelectorAll(".number");
    let operators =document.querySelectorAll(".operator")

    let previousScreen =document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    mumbers.forEach((Number) => Number.addEventListener("click", function(e){
         handleNumber(e.target.textContent)
         currentScreen.textContent=currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
    handleOperator(e.target.textContent)
    previousScreen.textContent= previousValue+""+operator;
    currentScreen.textContent= currentValue;
    }))
clear.addEventListener("click", function(){
    previousValue='';
    currentValue='';
    operator='';
    previousScreen.textContent='';
    currentScreen.textContent='';
})

equal.addEventListener("click",function(){
   if(currentValue !=''&& previousValue !=''){
         calculate()
         previousScreen.textContent='';
         if(previousValue.length<=5){
        currentScreen.textContent=previousValue;
         }else{
        currentScreen.textContent=previousValue.slice(0,5)+"...";
         }
     }
})

decimal.addEventListener("click", function(){
     addDecimal();
})

})




function handleNumber(num){
    if(currentValue.length<=9){
        currentValue +=num;
    }
}

function handleOperator(op){
    operator=op;
    previousValue=currentValue;
    currentValue='';
   
}

function calculate(){
previousValue=Number(previousValue);
currentValue=Number(currentValue);
if(operator==="+"){
    previousValue+=currentValue;
} else if (operator==="/") {
    previousValue/=currentValue;
} else if (operator==="-") {
    previousValue-=currentValue;
} else{
    previousValue*=currentValue;
}

previousValue = previousValue.toString();
currentValue = previousValue.toString();
}

function addDecimal(){
if (!currentValue.includes(".")) {
    currentValue +='.';
} else {
    
}
}