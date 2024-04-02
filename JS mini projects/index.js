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


//Arrow function,

let speedWarning = speed => `Yow are going at ${speed}`

console.log(speedWarning(100))


// arrow function with return

const speedingWarning = (speedlimit, speed) => {
    if(speed > speedlimit) {
        return `You are going fast ${speed}`
    }
 }

 console.log(speedingWarning(60, 40))

 //arrow functions 


 const distanceTraveledMiles = [267, 345, 234, 190, 299]

const distanceTraveledKm = distanceTraveledMiles.map( distance => Math.round(distance * 1.6 ))

console.log(distanceTraveledKm)


const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

/*
Challenge:
Convert this anonymous function to an arrow function. 
Be as concise as you can.
*/


const totalGrades = grades.reduce((total, currentGrade) => total + currentGrade)


console.log(`The class average is ${totalGrades/grades.length}`)


//reduce function using 0 overide for objects when adding numbers from an object.

import { studentsArr } from '/studentsArr'

function calculateClassAverage(studentsArr) {
    const totalGrades = studentsArr.reduce(function(total, currentStudent){
        return total + currentStudent.grade
    }, 0)
    return totalGrades / studentsArr.length
}

console.log(calculateClassAverage(studentsArr))