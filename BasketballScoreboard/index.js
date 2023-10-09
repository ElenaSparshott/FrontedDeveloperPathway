let homeScore = 0
let guestScore = 0

function addHome(inc) {
    homeScore += inc
    document.getElementById("homeScore").innerHTML = homeScore
}

function addGuest (inc) {
    guestScore += inc
    document.getElementById("guestScore").innerHTML = guestScore
}

let count;
let counter;

function timer() {
    clearInterval(counter);
    count = 10;
    document.getElementById("timer").innerHTML=count;
    counter=setInterval(timerbody, 1000);
}

function timerbody() {
    count -= 1;
    if (count < 0)
    {
        clearInterval(counter);
        document.getElementById("timer").innerHTML="Start";
        return;
    }
    document.getElementById("timer").innerHTML=count;
}

    
