
let ws = new WebSocket('ws://localhost:8080/name');

ws.onmessage = function(event) {
    let textArea = document.getElementById("log");
    let message = event.data;
    textArea.innerHTML += message + "\n";
}

function send() {
    let textFieldValue = document.getElementById("username").value;
    let json = JSON.stringify({
        "name":textFieldValue
    });

    ws.send(json);
}
