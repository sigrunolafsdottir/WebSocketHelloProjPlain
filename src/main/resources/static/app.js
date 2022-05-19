
let ws = new WebSocket('ws://localhost:8080/name');

ws.onmessage = function(event) {
    let textArea = document.getElementById("log");
    let socketArea = document.getElementById("sock");
    let message = event.data;
    console.log(message);
    if (message.startsWith('Hello')){
        textArea.innerHTML += message + "\n";
    }
    else{
        socketArea.innerHTML = message + "\n";
    }
}

function send() {
    let textFieldValue = document.getElementById("username").value;
    let json = JSON.stringify({
        "name":textFieldValue
    });

    ws.send(json);
}
