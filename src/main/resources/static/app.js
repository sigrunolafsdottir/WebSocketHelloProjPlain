
var ws;
ws = new WebSocket('ws://localhost:8080/name');
// ws.onmessage = function(data){
//    showGreeting(data.data);

ws.onmessage = function(event) {
    var log = document.getElementById("log");
    var message = event.data;
    log.innerHTML += message + "\n";
}

function send() {
    var content = document.getElementById("username").value;
    var json = JSON.stringify({
        "name":content
    });

    ws.send(json);
}
