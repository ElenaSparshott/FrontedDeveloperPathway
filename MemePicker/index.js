import { catsData } from "./catsData"

const emotionRadios = document.getElementById('emotion-radios')

function getEmotionsArray(cats){
    const emotionsArray = []
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            emotionsArray.push(emotion)
        }
    }
    console.log(emotionsArray)
    return emotionsArray
}

function renderEmotionsRadios(cats){
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `<p>${emotion}</p>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)
