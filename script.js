// Variables and constants
let displayTotal = "0";
let currentEntry = 0;
let pastEntry  = 0;
let operator = "";

const clearBtn = document.getElementById("clear");
const plusMinusBtn = document.getElementById("plusMinus");
const percentBtn = document.getElementById("percent");
const divideBtn = document.getElementById("divide");
const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");
const multiplyBtn = document.getElementById("multiply");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const subtractBtn = document.getElementById("subtract");
const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const addBtn = document.getElementById("add");
const zeroBtn = document.getElementById("zero");
const pointBtn = document.getElementById("point");
const equalBtn = document.getElementById("equal");
const totalDisplay = document.getElementById("totalDisplay");

// Events listeners
oneBtn.addEventListener("click", oneFunc);
twoBtn.addEventListener("click", twoFunc);
threeBtn.addEventListener("click", threeFunc);
fourBtn.addEventListener("click", fourFunc);
fiveBtn.addEventListener("click", fiveFunc);
sixBtn.addEventListener("click", sixFunc);
sevenBtn.addEventListener("click", sevenFunc);
eightBtn.addEventListener("click", eightFunc);
nineBtn.addEventListener("click", nineFunc);

document.addEventListener("keyup", function(e) {
    e.preventDefault();
    switch(e.key) {
        case "1":
            oneFunc();
            break;

        case "2":
            twoFunc();
            break;
            
        case "3":
            threeFunc();
            break;

        case "4":
            fiveFunc();
            break;
            
        case "5":
            fiveFunc();
            break;

        case "6":
            sixFunc();
            break;
            
        case "7":
            sevenFunc();
            break;

        case "8":
            eightFunc();
            break;
            
        case "9":
            nineFunc();
            break;   
    }
})

clearBtn.addEventListener("click", () => {
    location.reload();
});

plusMinusBtn.addEventListener("click", () => {
    displayTotal = totalDisplay.innerText;
    displayTotal.includes("-") ? displayTotal = displayTotal.replace("-", "") 
            : displayTotal = "-" + displayTotal;      
    updateDisplay();
});

percentBtn.addEventListener("click", () => {
    displayTotal = (Number(displayTotal) / 100).toString();
    updateDisplay();
});

divideBtn.addEventListener("click", () => {
    if (hasOperator()) {
        converToCurrentEntry();
        operate();
        operator = "/";
    } else {
        operator = "/";
        convertToPastEntry();
    }
});

multiplyBtn.addEventListener("click", () => {
    if (hasOperator()) {
        converToCurrentEntry();
        operate();
        operator = "*";
    } else {
        operator = "*";
        convertToPastEntry();
    }
});

subtractBtn.addEventListener("click", () => {
    if (hasOperator()) {
        converToCurrentEntry();
        operate();
        operator = "-";
    } else {
        operator = "-";
        convertToPastEntry();
    }
});

addBtn.addEventListener("click", () => {
    if (hasOperator()) {
        converToCurrentEntry();
        operate();
        operator = "+";
    } else {
        operator = "+";
        convertToPastEntry();
    }
});

zeroBtn.addEventListener("click", () => {
    if (displayTotal !== "0") {
        displayTotal += "0";
        updateDisplay();
    }
});

pointBtn.addEventListener("click", () => {
    if (!displayTotal.includes(".")) {
        displayTotal += ".";
        updateDisplay();
    }
});

equalBtn.addEventListener("click", () => {
    converToCurrentEntry();
    operate();
})

// Functions
function oneFunc() {
    displayTotal === "0" ? displayTotal = "1": displayTotal += "1";
    updateDisplay();
}

function twoFunc() {
    displayTotal === "0" ? displayTotal = "2": displayTotal += "2";
    updateDisplay();
}

function threeFunc() {
    displayTotal === "0" ? displayTotal = "3": displayTotal += "3";
    updateDisplay();
}

function fourFunc() {
    displayTotal === "0" ? displayTotal = "4": displayTotal += "4";
    updateDisplay();
}

function fiveFunc() {
    displayTotal === "0" ? displayTotal = "5": displayTotal += "5";
    updateDisplay();
}

function sixFunc() {
    displayTotal === "0" ? displayTotal = "6": displayTotal += "6";
    updateDisplay();
}

function sevenFunc() {
    displayTotal === "0" ? displayTotal = "7": displayTotal += "7";
    updateDisplay();
}

function eightFunc() {
    displayTotal === "0" ? displayTotal = "8": displayTotal += "8";
    updateDisplay();
}

function nineFunc() {
    displayTotal === "0" ? displayTotal = "9": displayTotal += "9";
    updateDisplay();
}

function updateDisplay() {
    totalDisplay.innerText = displayTotal;
}

function displayFinalResult() {
    totalDisplay.innerText = pastEntry.toString();
}

function hasOperator() {
    return operator !== "";
}

function convertToPastEntry() {
    pastEntry = Number(displayTotal);
    displayTotal = "0";
}

function converToCurrentEntry() {
    currentEntry = Number(displayTotal);
    displayTotal = "0";
}

function operate() {
    switch (operator) {
        case "+":
            addition();
            displayFinalResult();
            break;

        case "-":
            subtract();
            displayFinalResult();
            break;
        
        case "*":
            multiply();
            displayFinalResult();
            break;
            
        case "/":
            if (currentEntry !== 0) {
                division();
                displayFinalResult();
            } else {
                totalDisplay.innerText = "Cannot divide by zero";
            }
            break;    
    }
}

function division() {
    pastEntry = pastEntry / currentEntry;
}

function multiply() {
    pastEntry = pastEntry * currentEntry;
}

function subtract() {
    pastEntry = pastEntry - currentEntry;
}

function addition() {
    pastEntry = pastEntry + currentEntry;
}