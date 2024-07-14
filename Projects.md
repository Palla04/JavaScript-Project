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


