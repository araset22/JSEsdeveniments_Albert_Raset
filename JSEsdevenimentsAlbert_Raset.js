//Exercici 2
document.onkeydown=function(lletra){
    document.getElementById('teclat').innerHTML=lletra.key;
}

document.onkeyup=function(){
    document.getElementById('teclat').innerHTML=' ';
}