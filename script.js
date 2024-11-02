let numbers = document.querySelector("#numbers");
let screen = document.querySelector("#screen");
let operators = document.querySelector("#operatorsList");
let row1 = document.querySelector("#row1");
let row2 = document.querySelector("#row2");
let row3 = document.querySelector("#row3");
let row4 = document.querySelector("#row4");

//takes whatevers on the screen and returns it as an array
function getInput() {
    let content = screen.innerHTML.trim();

    let result = content.split(/(X|\/|\+|\-)/);
    
    
    return result;
}
//does all the math
function operate(operator, number1, number2) {
    result = 0;
    let num1 = Number(number1);
    let num2 = Number(number2);
    
    if (operator === "+") {
        result = (num1 + num2);
    }

    if (operator === "-") {
        result = (num1 - num2);
    }

    if (operator === "X") {
        result = (num1 * num2);
    }

    if (operator === "/") {
        result = (num1 / num2);
    }

    return result;
}

function getSolution() {
    let input = getInput();
    
    let numbers = [];
    let operands = [];
    //Separates the array into numbers and operators
    for (let i = 0; i < input.length; i++) {
        
        if (input[i] === "+" ||
            input[i] === "-" ||
            input[i] === "/" ||
            input[i] === "X"
        ) {
            operands.push(input[i]);
            
        }
        else {
            numbers.push(input[i]);
        }
        

        
    }
    let result = numbers[0];
    //parses both arrays and calculates results
    for (let j = 0; j < operands.length; j++) {
        nextNumber = numbers[j+1];

        result = operate(operands[j], result, nextNumber);
    }

    return result;
}
//creates and adds the numbers to the page
function getButtons() {
    for (let i = 0; i < 10; i++) {
        let number = document.createElement("button");
        number.innerHTML = i;
        number.addEventListener('click', () => {
            screen.innerHTML += number.innerHTML;

        });

        

        if (i === 1 || i === 2 || i === 3) {
            row1.appendChild(number);
        }

        if (i === 4 || i === 5 || i === 6) {
            row2.appendChild(number);
        }

        if (i === 7 || i === 8 || i === 9) {
            row3.appendChild(number);
        } 

        if (i === 0) {
            row4.appendChild(number);
        }

        
        
    }
}
//creates and adds the operators to the page
function getOperators() {
    let plus = document.createElement("button");
    plus.innerHTML = "+";
    plus.classList.add("operatorsList")
    operators.appendChild(plus);
    plus.addEventListener('click', () => {
        screen.innerHTML += plus.innerHTML;

    });


    let minus = document.createElement("button");
    minus.innerHTML = "-";
    minus.classList.add("operatorsList");
    operators.appendChild(minus);
    minus.addEventListener('click', () => {
        screen.innerHTML += minus.innerHTML;

    });


    let multiply = document.createElement("button");
    multiply.innerHTML = "X";
    operators.appendChild(multiply);
    multiply.classList.add("operatorsList");
    multiply.addEventListener('click', () => {
        screen.innerHTML += multiply.innerHTML;

    });


    let divide = document.createElement("button");
    divide.innerHTML = "/";
    divide.classList.add("operatorsList");
    operators.appendChild(divide);
    divide.addEventListener('click', () => {
        screen.innerHTML += divide.innerHTML;

    });


    let equals = document.createElement("button");
    equals.innerHTML = "=";
    equals.classList.add("operatorsList");
    equals.addEventListener('click', () => {
        screen.innerHTML = getSolution();
    });
    operators.appendChild(equals);

    let clear = document.createElement("button");
    clear.classList.add("operatorsList");
    clear.innerHTML = "CE";
    clear.addEventListener('click', () => {
        screen.innerHTML = "";
    });
    operators.appendChild(clear);

    let backspace = document.createElement("button");
    backspace.innerHTML = "Back";
    backspace.classList.add("operatorsList");
    backspace.addEventListener('click', () => {
        let content = screen.innerHTML;
        
        screen.innerHTML = content.slice(0, -1);
    });
    operators.appendChild(backspace);
    
}





getButtons();
getOperators();


