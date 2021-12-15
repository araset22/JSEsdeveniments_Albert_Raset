//Exercici 4
document.onkeydown = function(lletra){
    document.getElementById('teclat').innerHTML=lletra.key
    var contador = document.getElementById('lletres')
    contador.innerHTML += lletra.key + ', '
    var neteja = document.getElementById('netejar')
    neteja.onclick = function(){
        contador.innerHTML =''
    }
}
document.onkeyup=function(){
    document.getElementById('teclat').innerHTML =' '
}