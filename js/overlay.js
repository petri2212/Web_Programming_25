function on() {
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
}

function query() {

    const crudSelect = document.getElementById("crud").value;
    const contenuto = document.getElementById("query");
    switch (crudSelect) {
        case "create":
            contenuto.textContent = "ciao sono CREATE!";
            break;
        case "read":
            contenuto.textContent = "ciao sono READ!";
            break;
        case "update":
            contenuto.textContent = "ciao sono UPDATE!";
            break;
        case "delete":
            contenuto.textContent = "ciao sono DELETE!";
            break;
        default:
            contenuto.textContent = "ciao sono DEFAULT!"; 
    }
}

import * as opera from "../js/fetchOpera";

