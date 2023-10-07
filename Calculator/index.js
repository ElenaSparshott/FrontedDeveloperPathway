function add() {
    let add = num1 + num2
    console.log(add)
    document.getElementById("sum-el").innerHTML = add
}

function subtract() {
    let subtract= num1 - num2
    document.getElementById("sum-el").innerHTML = subtract
}

function divide() {
    let divide = num1 / num2
    document.getElementById("sum-el").innerHTML = divide
}

function multiply() {
    let multiply = num1 * num2
    document.getElementById("sum-el").innerHTML = multiply
}
