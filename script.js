const button = document.getElementById('button');
const hex = document.getElementById('hex');

let arr1 = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function randomColour() {
    newArr = ['#']
    for (i = 0; i < 6; i++) {
    let randomSelector = Math.floor(Math.random() * 16);
    newArr += arr1[randomSelector];
}   return newArr;
}

function changeColour() {
    document.body.style.backgroundColor = randomColour();
}

function buttonClick() {
    button.addEventListener('click', function() {
        changeColour();
    })
}

function hexText() {
    button.addEventListener('click', function(){
        hex.innerHTML = 'HEX: ' + randomColour();
    }) 
    }


buttonClick();
hexText();





