//Exercici 3
document.onkeydown = function(lletra){
    document.getElementById('teclat').innerHTML=lletra.key
    var contador = document.getElementById('lletres')
    contador.innerHTML += lletra.key + ', '
}
document.onkeyup=function(){
    document.getElementById('teclat').innerHTML =' '
}