const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("passwordOneBox")
let passwordTwoEl = document.getElementById("passwordTwoBox")

function passwordGenerator() {
    let password1 = "";
    let password2 = "";
    for(let i = 0; i <= 15; i++) {
        let randomInt1 = Math.floor(Math.random() * characters.length);
        let character1 = characters[randomInt1]
        password1 += character1; 
    }
    passwordOneEl.textContent = password1;


     for(let i = 0; i <= 15; i++) {
        let randomInt2 = Math.floor(Math.random() * characters.length);
        let character2 = characters[randomInt2]
        password2 += character2; 
    }
    passwordTwoEl.textContent = password2;
}






