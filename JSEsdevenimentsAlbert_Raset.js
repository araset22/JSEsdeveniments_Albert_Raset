//Exercici 1
var button = document.getElementById('boto')
button.addEventListener('mousedown', blau)
button.addEventListener('mouseup', taronja)
document.body.style.backgroundColor = 'green';

function taronja() {
    document.body.style.backgroundColor = 'orange';
}

function blau() {
    document.body.style.backgroundColor = 'blue';
}