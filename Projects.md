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


