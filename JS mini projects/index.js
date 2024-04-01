//map method

import { playlistArr } from '/playlist.js'

const playlistHtml = playlistArr.map(function(song){
    return `<section class="card">
    <div class="card-start">
        <img src="/images/${song.albumArt}">
    </div>
        <div class="card-mid">
            <h4 class="card-title">${song.title}</h4>
            <p class="card-artist">${song.artist}</p>
        </div>
    <div class="card-end">
        <p class="card-menu">...</p>
    </div>
</section>
    `
}).join("")

document.getElementById('container').innerHTML = playlistHtml

//join method

const guestsArr = ['Amy', 'Clare', 'Keith', 'Dan'] 

console.log(guestsArr.join(''))

//forEach() vs map()
// forEach does not return a new array.
// map() returns a new array.

//textContent passes text only


//Hoisting - function declrations are moved to the top of their scope before execution.

//Function expressions are not hoisted.

console.log(getSpendAlert(150))

const getSpendAlert = function(amount){
    return `Warning! You just spent £${amount}!`
}

/*
Challenge:
    1. Convert this function declaration to a function expression.
*/

// function getTheftAlert(numberOfTransactionsHour) {
//     if (numberOfTransactionsHour > 5) {
//         return `You have made ${numberOfTransactionsHour} transactions 
//                 in the past hour. We think your card might have been 
//                 compromised`
//     }
// }

// console.log(getTheftAlert(6))


const getTheftAlert = function(numberOfTransactionsHour){
        if (numberOfTransactionsHour > 5) {
        return `You have made ${numberOfTransactionsHour} transactions 
                in the past hour. We think your card might have been 
                compromised`
    }
}

console.log(getTheftAlert(6))

