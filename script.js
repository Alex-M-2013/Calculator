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

function clearDisplay() {
    userInput = "";
    updateDisplay();
}

function calculate() {
    if (userInput.trim() === "") {
        return;
    } else {
        try {
            const result = eval(userInput.trim());
            userInput = "";
            output.textContent = result;
        } catch (error) {
            clearDisplay();
            console.error(`Could not evaluate statement: ${error}`);
        }
    }
}
