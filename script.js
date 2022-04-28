// Variables and constants
let displayTotal = 0;
const clearBtn = document.getElementById("clear");
const sevenBtn = document.getElementById("seven");
const equalBtn = document.getElementById("equal");

// Events listeners
clearBtn.addEventListener("click", () => {
    console.log("clear");
});

sevenBtn.addEventListener("click", () => {
    console.log("7");
});

equalBtn.addEventListener("click", () => {
    document.getElementById("totalDisplay").innerText = displayTotal;
});