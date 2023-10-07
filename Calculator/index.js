let num1 = 2
let num2 = 4

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

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
