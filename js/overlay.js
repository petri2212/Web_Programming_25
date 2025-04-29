function on() {

    console.log("on")
    document.getElementById("overlay").style.display = "block";
    let messaggio = document.getElementById("messaggioUscita");

    setTimeout(() => {
        messaggio.style.opacity = 1;
    }, 100);
    setTimeout(() => {
        messaggio.style.opacity = 0;
    }, 2500);
    
}

function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay").style.opacity = 1;
}





