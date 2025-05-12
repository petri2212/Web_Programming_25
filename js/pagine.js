let pagina = 1;
let numeroRighe = 0;
let paginazione = document.getElementById('paginazione');

window.addEventListener("load", function () {
    paginazione.innerHTML = "Righe: " + (((pagina - 1) * 25) + 1) + "-" + (pagina * 25);
    setTimeout(() => {
        pulsantiDisattiavati();
    }, 100);
});

function aggiornaPagina(valore) {
    var contenitore = $('#contenuto');

    if (valore == "-" && pagina > 1) {
        pagina--;
        cerca(event);

        if (contenitore.scrollTop() > 0) {
            contenitore.animate({ scrollTop: 0 }, 300);
        }
    }

    if (valore == "+" && numeroRighe - pagina * 25 > 0) {
        pagina++;
        cerca(event);

        if (contenitore.scrollTop() > 0) {
            contenitore.animate({ scrollTop: 0 }, 300);
        }
    }
    paginazione.innerHTML = "Righe: " + (((pagina - 1) * 25) + 1) + "-" + (pagina * 25);
    pulsantiDisattiavati();
    console.log(pagina);
}

function pulsantiDisattiavati() {
    let pulasanteSx = document.getElementById('pagSx');
    let pulasanteDx = document.getElementById('pagDx');

    pulasanteSx.innerHTML = pagina - 1;
    pulasanteDx.innerHTML = pagina + 1;

    setTimeout(() => {
        if (pagina == 1) {
            pulasanteSx.style.background = "#fff";
            pulasanteSx.style.color = "#c9c9c9";
            pulasanteSx.style.border = "2px solid #c9c9c9";
            pulasanteSx.style.cursor = "default";
        } else {
            pulasanteSx.style.background = "#434f5a";
            pulasanteSx.style.color = "#fff";
            pulasanteSx.style.border = "2px solid #434f5a";
            pulasanteSx.style.cursor = "pointer";
        }

        if (numeroRighe - pagina * 25 <= 0) {

            pulasanteDx.style.background = "#fff";
            pulasanteDx.style.color = "#c9c9c9";
            pulasanteDx.style.border = "2px solid #c9c9c9";
            pulasanteDx.style.cursor = "default";
        } else {
            pulasanteDx.style.background = "#434f5a";
            pulasanteDx.style.color = "#fff";
            pulasanteDx.style.border = "2px solid #434f5a";
            pulasanteDx.style.cursor = "pointer";
        }
    }, 50);

}

function pagina1() {
    pagina = 1;
    aggiornaPagina();
}