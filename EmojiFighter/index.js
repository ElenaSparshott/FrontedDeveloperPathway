let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let randomIndex1 = Math.floor( Math.random() * fighters.length )
    let randomIndex2 = Math.floor( Math.random() * fighters.length )
    let fighterOne = fighters[randomIndex1]
    let fighterTwo = fighters[randomIndex2]
    stageEl.textContent =  fighterOne + " VS " + fighterTwo
    
})