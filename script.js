const output = document.getElementById("output")

let user_input = ""

function update() {
    if (user_input.trim() === "") {
        output.style.color = "rgba(0, 0, 0, 0.4)"
        output.style.fontStyle = "italic"
        output.style.fontFamily = "sans-serif"
        return
    }
    else {
        output.style.color = "rgba(0, 0, 0, 1)"
        output.style.fontStyle = "normal"
        output.style.fontFamily = "Trebuchet MS"
        output.innerHTML = user_input
    }
}

let update_interval = setInterval(update, 10)

function calculate() {
    let result = eval(user_input.trim())
    clearInterval(update_interval)
    user_input = ""
    output.innerHTML = result
}

function check_input_change() {
    if (user_input === "") {
        return
    }
    else {
        update_interval = setInterval(update, 10)
    }
}

setInterval(check_input_change, 10)