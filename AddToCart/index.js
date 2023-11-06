require('dotenv').config()
console.log(DATABASE)
import { initializeApp, } from FIREBASE
import { getDatabase, ref, push, onValue, remove  } from FIRE

const appSettings = {
    databaseURL: DATABASE
}

const app = initializeApp(appSettings)
const realtimeDatabase = getDatabase(app)
const shopping = ref(realtimeDatabase, "shopping")


const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {

    let inputValue = inputFieldEl.value.trim()

    if(!inputValue) {
        return
    }
    
    push(shopping, inputValue)
    
    clearInputFieldEl()
})


        
    onValue(shopping, function(snapshot) {

        if (snapshot.exists()) {
            let itemsArray = Object.entries(snapshot.val())
            clearShoppingListEl()

            for(let currentItem of itemsArray) {
                appendItemToShoppingListEl(currentItem)
            }

        } else {
            shoppingListEl.innerHTML = "No items here ... yet!"
        }

        let itemsArray = Object.entries(snapshot.val())
        clearShoppingListEl()

        for(let currentItem of itemsArray) {
            appendItemToShoppingListEl(currentItem)
        }
})

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}


function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(item) {

    let [itemID, itemValue] = item
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue

    newEl.addEventListener("click", function() {
        
        let exactLocationOfItemInDB = ref(realtimeDatabase, `shopping/${itemID}`)
        console.log(exactLocationOfItemInDB)
        remove(exactLocationOfItemInDB)

    })
    
    shoppingListEl.append(newEl)
}