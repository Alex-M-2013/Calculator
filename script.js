const output = document.getElementById("output");

let userInput = "";

function updateDisplay() {
    const userInputArray = userInput.trim().split("");
    let userInputDisplay = userInputArray.slice();

    for (let i = 0; i < userInputArray.length; i++) {
        if (userInputArray[i] === "*") {
            userInputDisplay[i] = "x";
        }

        if (userInputArray[i] === "/") {
            userInputDisplay[i] = "÷";
        }
    }

    output.textContent = userInputDisplay.join(" ");
}

function calculate() {
    if (userInput.trim() === "") {
        return;
    } else {
        const result = eval(userInput.trim());
        userInput = "";
        output.textContent = result;
    }
}