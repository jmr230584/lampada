let lampadaSalaLigada = false;
let lampadaCozinhaLigada = false;

function ligarLampadaSala(){

    if(lampadaSalaLigada == false){
        document.getElementById("lamp-sala").classList.add("acesa");
        document.getElementById("bt-sala").textContent = "Desligar"
        lampadaSalaLigada = true; 
    } else {
        document.getElementById("lamp-sala").classList.remove("acesa");
        document.getElementById("bt-sala").textContent = "Ligar"
        lampadaSalaLigada = false; 
    }   
}

function ligarLampadaCozinha(){
    if(lampadaCozinhaLigada == false){
        lampadaCozinhaLigada = true;
        document.getElementById("bt-cozinha").textContent = "Desligar";
    }
    else{
        lampadaCozinhaLigada = false;
        document.getElementById("bt-cozinha").textContent = "Ligar";
    }
    document.getElementById("lamp-cozinha").classList.toggle("acesa");
}