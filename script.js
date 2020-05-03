window.addEventListener('load',init)

const levels = {
    easy: 5,
    medium: 3,
    hard: 1
}

let currentScore = 0
const currentLevel = levels.easy
let time = currentLevel
let isPlaying
let high

//Dom
const wordInput = document.getElementById("wordinput")
const currentWord = document.getElementById('current-word')
const scoreDisplay = document.getElementById('score')
const timeDisplay = document.getElementById('time')
const message = document.getElementById('message')
const seconds = document.getElementById('seconds')
const highScore = document.getElementById('highscore')

//array of random numbers
const words = ['hat','river','lucky','statue','generate','stubborn','cocktail',
'runway','joke','developer','establish','hero','firefox','nutrition','revolver',
'echo','siblings','investigate','horrendous','symptom','laughter','magic','master',
'space','definition'];

//init function
function init() {
    seconds.innerHTML = currentLevel
    highScore.innerHTML = localStorage.getItem('high')
    wordInput.addEventListener('input',startMatch)
}
function startGame(button){
if (button.innerHTML == "Exit Game"){document.location.reload()}
else{
    button.innerHTML = "Exit Game"
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}
}
function startMatch(){
if (matchWords()){
    isPlaying = true
    time = currentLevel +1
    showWord(words)
    wordInput.value = ''
    currentScore++
    if(currentScore > localStorage.getItem('high',high)){
        localStorage.setItem('high', currentScore)
        highScore.innerHTML = localStorage.getItem('high')
    }
}
scoreDisplay.innerHTML = currentScore
highScore.innerHTML = localStorage.getItem('high')
}

function showWord(words){
  //get random index
    const randIndex = Math.floor(Math.random() * words.length)
    currentWord.innerHTML = words[randIndex]
}
function matchWords(){
    if (wordInput.value === currentWord.innerHTML){
        message.innerHTML = "Correct!!!"
        return true
    }
    else{
        message.innerHTML = ''
        return false
    }
}
function countdown(){
if (time > 0){
    time--;
}
else if (time == 0){
    isPlaying = false
    document.getElementById('startgame').innerHTML = "Start Game"
    document.location.reload()
}
timeDisplay.innerHTML = time
}
function checkStatus(){
if(isPlaying && time == 0){
    message.innerHTML = "Game Over"
    score = 0
    scoreDisplay.innerHTML = 0
}
}
function removeScore(button){
    localStorage.clear()
    highScore.innerHTML = ''
}