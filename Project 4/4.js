let randomNumber = parseInt(Math.random()*100 +1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector("#guessField")

const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    // check value between 1-100 ?
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess < 1)
    {
        alert('Please enter a number more than 1')
    }
    else if(guess < 1)
    {
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMess(`Game Over. Random Number was ${randomNumber}`);
            endgame()
        }

        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    // check right or not
    if(guess === randomNumber){
        displayMess('You guessed it right');
        endgame()
    }
    else if( guess < randomNumber){
        displayMess('Number is Too low');
    }
    else if( guess > randomNumber){
        displayMess('Number is Too High');
    }

}
function displayGuess(guess){
    // it clean up the submit box and update prevGuess array
    userInput.value = ''
    guessSlot.innerHTML += `${guess} ` 
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}
function displayMess(message){
    lowOrHi.innerHTML = message;
}

function endgame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newgame();
}
function newgame(){
    const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}