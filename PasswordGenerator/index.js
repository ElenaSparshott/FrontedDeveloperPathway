const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("passwordOneBox")
let passwordTwoEl = document.getElementById("passwordTwoBox")

let password1;
let password2;

function password() {
    let passwords ="";
        for(let i = 0; i <= 15; i++) {
        let randomInt = Math.floor(Math.random() * characters.length);
        let character = characters[randomInt]
        passwords += character;
    }
    return passwords 
}

function passwordGenerator() {
    let password1 = password();
    let password2 = password();

    passwordOneEl.textContent = password1;
    passwordTwoEl.textContent = password2;
}








