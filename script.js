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

// Events listeners
clearBtn.addEventListener("click", () => {
    location.reload();
});

plusMinusBtn.addEventListener("click", () => {
    displayTotal = document.getElementById("totalDisplay").innerText;
    displayTotal.includes("-") ? displayTotal = displayTotal.replace("-", "") 
            : displayTotal = "-" + displayTotal;      
    updateDisplay();
});

percentBtn.addEventListener("click", () => {
    location.reload();
});

divideBtn.addEventListener("click", () => {
    if (operator !== "") {
        converToCurrentEntry();
        operate();
        operator = "/";
    } else {
        operator = "/";
        convertToPastEntry();
    }
});

sevenBtn.addEventListener("click", () => {
    displayTotal === "0" ? displayTotal = "7": displayTotal += "7";
    updateDisplay();
});

eightBtn.addEventListener("click", () => {
    displayTotal === "0" ? displayTotal = "8": displayTotal += "8";
    updateDisplay();
});

nineBtn.addEventListener("click", () => {
    displayTotal === "0" ? displayTotal = "9": displayTotal += "9";
    updateDisplay();
});

multiplyBtn.addEventListener("click", () => {
    if (operator !== "") {
        converToCurrentEntry();
        operate();
        operator = "*";
    } else {
        operator = "*";
        convertToPastEntry();
    }
});

fourBtn.addEventListener("click", () => {
    displayTotal === "0" ? displayTotal = "4": displayTotal += "4";
    updateDisplay();
});

fiveBtn.addEventListener("click", () => {
    displayTotal === "0" ? displayTotal = "5": displayTotal += "5";
    updateDisplay();
});

sixBtn.addEventListener("click", () => {
    displayTotal === "0" ? displayTotal = "6": displayTotal += "6";
    updateDisplay();
});

subtractBtn.addEventListener("click", () => {
    if (operator !== "") {
        converToCurrentEntry();
        operate();
        operator = "-";
    } else {
        operator = "-";
        convertToPastEntry();
    }
});

oneBtn.addEventListener("click", () => {
    displayTotal === "0" ? displayTotal = "1": displayTotal += "1";
    updateDisplay();
});

twoBtn.addEventListener("click", () => {
    displayTotal === "0" ? displayTotal = "2": displayTotal += "2";
    updateDisplay();
});

threeBtn.addEventListener("click", () => {
    displayTotal === "0" ? displayTotal = "3": displayTotal += "3";
    updateDisplay();
});

addBtn.addEventListener("click", () => {
    if (operator !== "") {
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
    }
    updateDisplay();
});

pointBtn.addEventListener("click", () => {
    if (!displayTotal.includes(".")) {
        displayTotal += ".";
        updateDisplay();
    }
});

equalBtn.addEventListener("click", () => {
    document.getElementById("totalDisplay").innerText = displayTotal;
});

// Functions
function updateDisplay() {
    document.getElementById("totalDisplay").innerText = displayTotal;
}

function displayFinalResult() {
    displayTotal = pastEntry.toString();
    updateDisplay();

}

function isAnotherOperation() {
    return (!operator === "");
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
            break;

        case "-":
            subtract();
            break;
        
        case "*":
            multiply();
            break;
            
        case "/":
            division();
            break;    
    }
    displayFinalResult();
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