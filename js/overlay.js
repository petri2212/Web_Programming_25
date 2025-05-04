function on() {

    console.log("on")

    let over = document.getElementById("overlay");
    let testo = document.getElementById("text");
    let selezionaOperazione = document.getElementById("selezionaOperazione");
    setTimeout(() => {
        over.style.display = "block";
        testo.style.opacity = 1;

    }, 10);
    
    let messaggio = document.getElementById("messaggioUscita");
    messaggio.textContent = "Per chiudere cliccare fuori dalla finestra bianca";
    setTimeout(() => {
        messaggio.style.opacity = 1;
        selezionaOperazione.style.opacity = 1;
    }, 200);
    setTimeout(() => {
        messaggio.style.opacity = 0;
    }, 2500);

    setTimeout(() => {
        messaggio.textContent = "";
    }, 3500);
    
}

function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay").style.opacity = 1;
}





