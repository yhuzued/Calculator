// let just 0 from the begining
let firstOperand = "";
let secondOperand = "";
let choosenOperator = "";
let firstFinal = "";
let secondFinal = "";

let displayEquation = "";
let displayResult = ""
let nonPermaValue = "";

let finalValue = "";

const display = document.querySelector(".display");
display.textContent = "0";

const operand = document.querySelectorAll(".operand");
operand.forEach(element =>
    element.addEventListener("click", () =>{
        if (!(firstFinal == "")){
            firstFinal = "";
        } 
        if (firstOperand === "") {
            nonPermaValue += element.value;
            display.textContent = nonPermaValue;
        } else {
            secondOperand += element.value;
            display.textContent = `${firstOperand} ${choosenOperator} ${secondOperand}`
        }
        console.log({nonPermaValue});
        console.log({firstOperand});
        console.log({choosenOperator});
        console.log({secondOperand});
    })
)

const operator= document.querySelectorAll(".operator");
operator.forEach(element =>
    element.addEventListener("click", () =>{
        //when al value isnt ready
        if (firstFinal === ""){
            if (firstOperand === "" || secondOperand === "" || choosenOperator === ""){
                if (firstOperand === ""){
                    firstOperand = nonPermaValue;
                    nonPermaValue = "";
                    choosenOperator = element.value;
                    display.textContent = `${firstOperand} ${choosenOperator} ${secondOperand}`
                } else {
                    secondOperand = nonPermaValue;
                    nonPermaValue = "";
                    choosenOperator = element.value;
                    display.textContent = `${firstOperand} ${choosenOperator} ${secondOperand}`
                }
                //when ready
            } else if (!(firstOperand === "" && secondOperand === "" && choosenOperator === "")) {
                finalValue = operate(firstOperand, choosenOperator, secondOperand);
                firstOperand = finalValue;
                choosenOperator = element.value;
                secondOperand = "";
                display.textContent = `${finalValue} ${choosenOperator}`;
            }
        } else {
            firstOperand = firstFinal;
            firstFinal = "";
            choosenOperator = element.value;
            display.textContent = `${firstOperand} ${choosenOperator} ${secondOperand}`;
        }
        console.log({nonPermaValue});
        console.log({firstOperand});
        console.log({choosenOperator});
        console.log({secondOperand});
    })
)

const equal = document.querySelector(".equals")
equal.addEventListener("click", function(e){
    /// sedang di sini
    if (!(firstOperand === "" || secondOperand === "" || choosenOperator === "")){
        finalValue = operate(firstOperand, choosenOperator, secondOperand);
        firstOperand = "";
        firstFinal = finalValue;
        choosenOperator = "";
        secondOperand = "";
        display.textContent = `${finalValue}`;
    } 
})

const clear = document.querySelector(".clear")
clear.addEventListener("click", function(){
    firstOperand = "";
    secondOperand = "";
    choosenOperator = "";
    firstFinal = "";
    secondFinal = "";

    displayEquation = "";
    displayResult = ""
    nonPermaValue = "";

    finalValue = "";
    display.textContent = "0";
})

const decimal = document.querySelector("#decimal")
decimal.addEventListener("click", () =>{
    if (nonPermaValue === "" && firstOperand === ""){
        // do nothing
        nonPermaValue = "0."
        display.textContent = nonPermaValue;
    } else if (nonPermaValue.includes(".")){
        // also do nothinge
    } else if (firstOperand === "") {
        nonPermaValue += decimal.value;
        display.textContent = nonPermaValue;
    } else if (secondOperand.includes(".") || secondOperand === "") {
        // do nothinge
    } else {
        secondOperand += decimal.value;
        display.textContent = `${firstOperand} ${choosenOperator} ${secondOperand}`
    }
})

const backspace = document.querySelector(".backspace")
backspace.addEventListener("click", function(){
    // sampai sini
    if (!(nonPermaValue === "")){
        let del = nonPermaValue;
        let nonPermaAfterDeleted = del.slice(0, -1);
        nonPermaValue = nonPermaAfterDeleted;
        display.textContent = nonPermaValue;
        if (nonPermaValue === ""){
            display.textContent = "0";
        }
    } else if (!(secondOperand ==="")){
        let del = secondOperand;
        let nonPermaAfterDeleted = del.slice(0, -1);
        secondOperand = nonPermaAfterDeleted;
        display.textContent = `${firstOperand} ${choosenOperator} ${secondOperand}`;
    }
})

const zero = document.querySelector("#zero")
zero.addEventListener("click", function(){
    if (!(firstFinal == "")){
        firstFinal = "";
    } 
    if (firstOperand === "") {
        if (nonPermaValue === "" || nonPermaValue === "0"){
            nonPermaValue = zero.value;
            display.textContent = nonPermaValue;
        } else {
            nonPermaValue += zero.value;
            display.textContent = nonPermaValue;
        }
    } else {
        if (secondOperand === "" || secondOperand === "0"){
            secondOperand = zero.value;
            display.textContent = `${firstOperand} ${choosenOperator} ${secondOperand}`
        } else {
            secondOperand += zero.value;
            display.textContent = `${firstOperand} ${choosenOperator} ${secondOperand}`
        }
    }
    console.log({nonPermaValue});
    console.log({firstOperand});
    console.log({choosenOperator});
    console.log({secondOperand});
})

//function
function operate(a, operator, b,){
    switch(operator){
        case "+":
            return add(a, b);
            break;
        case "-":
            return substract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
        
}

function add(a, b){
    if (a === "Bruh?"){
        a = 0;
    }
    if (b === "Bruh?"){
        b = 0;
    }
    let sum = parseFloat(a) + parseFloat(b);
    return sum = +sum.toFixed(2);
    
}

function substract(a, b){
    if (a === "lmao"){
        a = 0;
    }
    if (b === "lmao"){
        b = 0;
    }
    let sum = parseFloat(a) - parseFloat(b);
    return  sum = +sum.toFixed(2);
}

function multiply(a, b){
    if (a === "lmao"){
        a = 0;
    }
    if (b === "lmao"){
        b = 0;
    }
    let sum = parseFloat(a) * parseFloat(b);
    return sum = +sum.toFixed(2);
}

function divide(a, b){
    if (a === "lmao"){
        a = 0;
    }
    if (b === "lmao"){
        b = 0;
    }

    if (b === "0"){
        return "lmao"
    }

    let sum = parseFloat(a) / parseFloat(b);
    return  sum = +sum.toFixed(2);
}