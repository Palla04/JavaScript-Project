# Project Related to DOM

## Project link
[Click here](http://127.0.0.1:5500/index.html)

## Projrct 1 Solution
```
const buttons = document.querySelectorAll('.button')
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'pink'; 
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = 'white'; 
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue'; 
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow'; 
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id; 
        }
    });
})

```

## Project 2 solution
```
const form = document.querySelector('form');
//this usecase will give you empty value
//const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height === ''|| height<0 || isNaN(height)){
        result.innerHTML = 'Please give a valid height';
    }
    
    else if(weight === ''|| weight<0 || isNaN(weight)){
        result.innerHTML = 'Please give a valid weight';
    }
    
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML = bmi
    }

})
```

## Project 3 solution

```
const clock = document.getElementById('clock')

let date = new Date();
console.log(date.toLocaleTimeString());

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
    
}, 1000);
```

## Projrct 4 Solution

```
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
```

