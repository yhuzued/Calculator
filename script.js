//create display
let value = "";
let secondValue = "";
let firstOperand = "default";
let choosenOperator = "default";
let secondOperand = "default"

const display = document.querySelector(".display");
display.textContent = "Start"

const operand = document.querySelectorAll(".operand");
operand.forEach(item =>{
    item.addEventListener("click", function(e){
        if (choosenOperator === "default"){
            value += item.value;
            display.textContent = value;
        } else {
            secondOperand = "";
            secondValue += item.value;
            secondOperand += secondValue;
            display.textContent = `${firstOperand} ${choosenOperator} ${secondOperand}`;
        }
        console.log(firstOperand);
        console.log(choosenOperator);
        console.log(secondOperand);
    })
})

const operator = document.querySelectorAll(".operator");
operator.forEach(item =>{
    item.addEventListener("click", function(e){
        if (display.textContent === "Start"){
            console.log("Bro, you can't calculate without clicking any number")
        } else {
            if (firstOperand === "default"){
                firstOperand = value;
                choosenOperator = item.value;
                console.log(firstOperand);
                console.log(choosenOperator);
                console.log(secondOperand);
            } else if (choosenOperator === "default") {
                choosenOperator = item.value;
                console.log(firstOperand);
                console.log(choosenOperator);
                console.log(secondOperand);
            } else if (secondOperand === "default" || secondOperand === "") {
                secondOperand += item.value;
                choosenOperator = item.value;
                secondOperand = secondValue;
                console.log(firstOperand);
                console.log(choosenOperator);
                console.log(secondOperand);
            } else if (choosenOperator === "+"
                    || choosenOperator === "-"
                    || choosenOperator === "/"
                    || choosenOperator === "*" && !(secondOperand === "default")) {
                display.textContent = `${firstOperand} ${choosenOperator}`;
                operandClicked();
                choosenOperator = item.value;
                console.log(firstOperand);
                console.log(choosenOperator);
                console.log(secondOperand);
            } 
        value += item.value;
        display.textContent = `${firstOperand} ${choosenOperator}`;
        }
    })
})

const equal = document.querySelector(".equals");
equal.addEventListener("click", () =>{
    if (secondOperand === "default" || secondOperand === ""){
        //do nothing
    } else{
        equalsClicked();
    }
})

const zero = document.querySelector("#zero");
zero.addEventListener("click", () =>{
    if (value.charAt(0) === "0"){
        value = "";
    }
})

//function

function equalsClicked(){
    if(!(firstOperand === "default"
        && secondOperand === "default"
        && choosenOperator === "default")){
            value = operate(firstOperand, choosenOperator, secondOperand)
            display.textContent = value;
            firstOperand = value;
            secondOperand = "default";
            choosenOperator = "default";
            secondValue = "";
            value = "";
            console.log(firstOperand);
            console.log(choosenOperator);
            console.log(secondOperand);
        }
        
    if (firstOperand === undefined){
        display.textContent = "Start";
        firstOperand = "default";
    }
}

function operandClicked(){
    value = operate(firstOperand, choosenOperator, secondOperand)
    display.textContent = value;
    firstOperand = value;
    secondOperand = "default";
    secondValue = "";
}

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
    return parseInt(a) + parseInt(b);
}

function substract(a, b){
    return parseInt(a) - parseInt(b);
}

function multiply(a, b){
    return parseInt(a) * parseInt(b);
}

function divide(a, b){
    return parseInt(a) / parseInt(b);
}