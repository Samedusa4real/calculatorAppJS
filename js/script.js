let display = document.querySelector(".display")
let buttons = document.querySelectorAll(".keypad button")

// let displayOutput = display.innerText BELE YAZANDA INNERTEXTI TANIMADI (NE DE TEXTCONTENTI)
let result = 0; 
let input = "";
let operator = "";


calculatorApp(buttons);




function calculatorApp(buttons){
    withKeyboard()
    withMouse(buttons)
}



function withKeyboard(){
    window.addEventListener("keydown", function(e){
        const keyboardEvent = e.key
        if(keyboardEvent === "+" || keyboardEvent === "/" || keyboardEvent === "*" || keyboardEvent === "-" ){
            addOperator(keyboardEvent)
        }
        else if(keyboardEvent === "=" || keyboardEvent === "Enter"){
            addEqual("-","*")
        }
        else if(keyboardEvent === "."){
            addDot(keyboardEvent)
        }
        else if(keyboardEvent === "Delete"){
            resetBtn()
        }
        else if(keyboardEvent === "0"){
            handleZero(keyboardEvent)
        }
        else if(keyboardEvent === "1" || keyboardEvent === "2" || keyboardEvent === "3" || keyboardEvent === "4" || keyboardEvent === "5" || keyboardEvent === "6" || keyboardEvent === "7" || keyboardEvent === "8" || keyboardEvent === "9"){
            addNumber(keyboardEvent)
        }
    })

}
function withMouse(buttons){
    buttons.forEach((button => {
        button.addEventListener("click", function(){
            const buttonContent = button.innerText
            if(buttonContent === "+" || buttonContent === "/" || buttonContent === "×" || buttonContent === "−"){
                addOperator(buttonContent)
            }
            else if(buttonContent === "="){
                addEqual("−","×")
            }
            else if(buttonContent === "."){
                addDot(buttonContent)
            }
            else if(buttonContent === "C"){
                resetBtn()
            }
            else if(buttonContent === "0"){
                handleZero(buttonContent)
            }
            else{
                addNumber(buttonContent)
            }
        })
    }))
}




function addOperator(buttonContent) {
    operator = buttonContent
    result = parseFloat(input)
    input = ""
    display.innerText = operator
}
function addEqual(weirdOperator1,weirdOperator2) {
    if(operator === "+"){
        result = result + parseFloat(input)
        display.innerText = result
    }
    else if(operator === `${weirdOperator1}`){
        result = result - parseFloat(input)
        display.innerText = result
    }
    else if(operator === `${weirdOperator2}`){
        result = result * parseFloat(input)
        display.innerText = result
    }
    else if(operator === "/"){
        result = result / parseFloat(input)
        display.innerText = result
    }
    input = result
    operator = ""
    // input = "" YENI EDED DAXIL EDENDE NETICEYE ISLEYIR AMMA 2CI EMELIYYATDAN SONRA NaN VERIR 
}
function addDot(buttonContent){
    if(input !== "" && !input.toString().includes(".")){
        input += buttonContent
        display.innerText = input
    }
}
function resetBtn(){
    result = 0;
    input = "";
    operator = ""
    display.innerText = "0"
}
function handleZero(buttonContent){
    if(input.toString().length === 0){
        result = 0
        display.innerText = 0
    }
    else{
        input += buttonContent
        display.innerText = input
    }
}
function addNumber(buttonContent){
    if(input.toString()[0] === "0"){
        if(!input.toString().includes(".")){
            input += "."
            display.innerText = input
        }
    }
    input += buttonContent
    display.innerText = input
}









// let operatorButtons = document.querySelectorAll(".keypad .operators button")
// let numberButtons = document.querySelectorAll(".keypad .numbers-and-methods .numbers")


// let operator = "";
// let displayOutput = display.textContent
// let result = 0;

// operatorButtons.forEach((operatorButton =>{
//     operatorButton.addEventListener("click", function(){
//         if(operatorButton.textContent === "+"){
//             operator = "+"
//         }
//         else if(operatorButton.textContent === "-"){
//             operator = "-"
//         }
//         else if(operatorButton.textContent === "*"){
//             operator = "*"
//         }
//         else if(operatorButton.textContent === "/"){
//             operator = "/"
//         }
//     })
// }))


// numberButtons.forEach((numberButton => {
//     numberButton.addEventListener("click", function(){
//         let number = parseFloat(numberButton.textContent)
//         return number
//     })
// }))

// if(operator === "+"){
//     displayOutput = result + number
//     result = displayOutput
//     console.log(result);
// }
// else if(operator === "-"){
//     displayOutput = result - number
//     result = displayOutput
// }
// else if(operator === "*"){
//     displayOutput = result * number
//     result = displayOutput
// }
// else if(operator === "/"){
//     displayOutput = result / number
//     result = displayOutput
// }


// DAYAN GORUM BURDA




// const number = numberButtons.forEach((numberButton => {
//     console.log(numberButton.textContent);
// }))





// let workNumber = 0;
// let displayOutput = display.innerText;

// numberButtons.forEach((numberButton => {
//     const number = parseFloat(numberButton.textContent)
//     numberButton.addEventListener("click", function(){
//         switch (number) {
//             case 1:
//                 workNumber = workNumber + 1
//                 console.log(workNumber);
//                 displayOutput = "1";
//                 break;
//             case 2:
//                 workNumber = workNumber + 2
//                 console.log(workNumber);
//                 break;
//             case 3:
//                 workNumber = 3
//                 break;
//             case 4:
//                 workNumber = 4
//                 break;
//             case 5:
//                 workNumber = 5
//                 break;
//             case 6:
//                 workNumber = 6
//                 break;
//             case 7:
//                 workNumber = 7
//                 break;
//             case 8:
//                 workNumber = 8
//                 break;
//             case 9:
//                 workNumber = 9
//                 break;
//             case 0:
//                 workNumber = 0
//                 break;
        
//             default:
//                 break;
//         }
//     })
// }))








// let btn = document.querySelector(".operators")
// let test = btn.innerText.split(" ")
// console.log(test[0]);
// btn.addEventListener("click", function(){
//     if(test === "+"){
//         console.log("sea");
//     }
// })

// let displayOutput = display.innerText

// operatorButtons.forEach((operatorButton) =>{
//     const operatorType = operatorButton.innerText
//     operatorButton.addEventListener("click", function(){
//         if(operatorType === "+"){
//             console.log();
//         }
//     })
// })