// generate a random color

const randomColor = function(){
    const hex ="01234567ABCDEF"
    let color = '#'
    for(let i=0;i<6;i++)
    {
        color += hex[Math.floor(Math.random() * 16)];

    }
    return color
};

let intervalID;
const startChanging = function() {
    intervalID = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
    },1000)
}

const stopChanging = function (){
    clearInterval(intervalID)
    intervalID = null;
}


document.querySelector('#start').
addEventListener('click', startChanging);

document.querySelector('#stop').
addEventListener('click', stopChanging);

