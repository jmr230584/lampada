let lampadaSalaLigada = false;
let lampadaCozinhaLigada = false;

////// -- Broker
let clienteWeb = null;

const clientId = 'Esp32' + Math.floor(Math.random() * 900) + 100;
clienteWeb = new Paho.MQTT.Client('broker.hivemq.com', 8884, clientId);

clienteWeb.connect({   
    useSSL: true, 
    onSuccess: function() {
        alert('A conexão com Broker foi bem sucedida');
    },
    onFailure: function() {
        alert('A conexão com Broker falhou');
    }
});
//////// Broker

function ligarLampadaSala(){

    const msg = new Paho.MQTT.Message("");

    if(lampadaSalaLigada == false){
        document.getElementById("lamp-sala").classList.add("acesa");
        document.getElementById("bt-sala").textContent = "Desligar"
        lampadaSalaLigada = true; 
        msg.destinationName = "senai661/lampada/sala/on";

    } else {
        document.getElementById("lamp-sala").classList.remove("acesa");
        document.getElementById("bt-sala").textContent = "Ligar"
        lampadaSalaLigada = false; 
        msg.destinationName = "senai661/lampada/sala/off";
    }   

    clienteWeb.send(msg)
}

function ligarLampadaCozinha(){

    const msg = new Paho.MQTT.Message("");

    if(lampadaCozinhaLigada == false){
        lampadaCozinhaLigada = true;
        document.getElementById("bt-cozinha").textContent = "Desligar";
        msg.destinationName = "senai661/lampada/cozinha/on";
    }
    else{
        lampadaCozinhaLigada = false;
        document.getElementById("bt-cozinha").textContent = "Ligar";
        msg.destinationName = "senai661/lampada/cozinha/on";
    }
    document.getElementById("lamp-cozinha").classList.toggle("acesa");
    clienteWeb.send(msg)
}