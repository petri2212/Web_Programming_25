
let informazioni;
let contenuto = document.getElementById("contenuto");
let contOverlay = document.getElementById("query");
let formDataDelete = "";
let autoriArray = [];
let nomeAutoriArray = [];
let saleArray = [];
let opereArray = [];

//devo fare un controllo aggiuntivo perche window.reload quando la pagina si mostra mi 
// cancella id_1 e id_2 quindi devo controllare solo quando si apre per la prima volta
const params = new URLSearchParams(window.location.search);
const id_1 = params.get('id_1'); // Prende il valore di "id_1"
const id_2 = params.get('id_2'); // Prende il valore di "id_2"
if (id_1 == null && id_2 == null) {
   window.onload = function () {
      cerca(event);
   };
}

//pagina principale
function cerca(event, id, id1) {
   if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
   }
   window.history.replaceState({}, document.title, window.location.pathname);

   const form = document.querySelector("#form");
   const formData = new FormData(form);

   if (id != null) {
      formData.append('Autore', `${id}`);
   } else if (id1 != null) {
      formData.append('NumeroSala', `${id1}`);
   }
   const obj = Object.fromEntries(formData);
   console.log(obj);
   console.log(formData);

   fetch('../queries/CRUD_OPERA/select_opera.php', {

      method: 'POST',
      header: {
         'Content-Type': 'application/json'
      },
      body: formData
   })

      .then(response => response.json())
      .then(data => {
         informazioni = data;
         console.log('dati ricevuti: ', data);
         let tabella = ` 

            <ul class="tabella">
					<nav class="fissa">
					   <li class="testata">
							  <!--<div class="col">Codice </div>-->
							<div class="col">Autore </div>
							<div class="col">Titolo </div>
							<div class="col">Anno acquisto </div>
							<div class="col">Anno realizzazione</div>
							<div class="col">Tipo</div>
							<div class="col">Esposta in sala </div>
						</li>
					</nav>
                    ${generaRighe(data)}
                    </ul>
                    `;

         contenuto.innerHTML = tabella;
         // contenuto.insertAdjacentHTML('beforeend', tabella);
      })
      .catch((error) => {
         console.log('errore: ', error);
      });
}

function generaRighe(data) {
   let righe = '';
   let riga = '';
   let i = 0;
   let classRiga = 'class="riga"';
   data.forEach(data => {
      if (i >= (pagina - 1) * 25 && i < pagina * 25) {
         riga = `
         <li ${classRiga}>
              <!--<div class="col">${data.codice}</div>-->
              <div class="col"> <a href="Autore.php?id_1=${data.autore}">${data.full_name}</a></div>
              <div class="col">${data.titolo}  </div>
              <div class="col"> ${data.annoAcquisto}</div>
              <div class="col">${data.annoRealizzazione}  </div>
              <div class="col">${data.tipo} </div>
              <div class="col"> <a href="Sala.php?id_2=${data.espostaInSala}"> ${data.nome_sala}</a></div>
           </li>
         `;
         righe += riga;
      }
      i++;

   });
   numeroRighe = i;
   return righe;

}

//Overlay
function query() {
   const crudSelect = document.getElementById("crud").value;
   const contenuto = document.getElementById("query");
   const ombra = document.getElementById("contenutoOvelay");
   switch (crudSelect) {
      case "create":
         setTimeout(() => {
            ombra.style.boxShadow = "0px 0px 100px 0px rgba(101, 215, 83, 0.5)";
            contenuto.style.paddingBottom = "120px";
         }, 10);

         select();

         setTimeout(() => {
            autocomplete(document.getElementById("autoreSelect"), autoriArray);
            autocomplete(document.getElementById("NumeroSalaSelect"), saleArray);
         }, 100);

         break;
      case "update":
         setTimeout(() => {
            ombra.style.boxShadow = "0px 0px 100px 0px rgba(83, 215, 211, 0.5)";
            contenuto.style.paddingBottom = "20px";
         }, 10);

         update();

         setTimeout(() => {
            autocomplete(document.getElementById("codiceUpdate"), opereArray);
            autocomplete(document.getElementById("autoreUpdate"), autoriArray);
            autocomplete(document.getElementById("NumeroSalaUpdate"), saleArray);
         }, 100);

         break;
      case "delete":
         setTimeout(() => {
            ombra.style.boxShadow = "0px 0px 100px 0px rgba(215, 83, 83, 0.5)";
         }, 10);

         delete0();

         setTimeout(() => {
            autocomplete(document.getElementById("codiceDelete"), opereArray);
         }, 100);

         break;
      default:
         setTimeout(() => {
            ombra.style.boxShadow = "0px 0px 100px 0px rgba(67, 79, 90, 0.5)";
         }, 10);

         contenuto.textContent = "";
   }
}









//CREATE
function select(id, id1) {
   window.history.replaceState({}, document.title, window.location.pathname);

   const form = document.querySelector("#form");
   const formData = new FormData(form);

   if (id != null) {
      formData.append('Autore', `${id}`);
   } else if (id1 != null) {
      formData.append('NumeroSala', `${id1}`);
   } else {
      event.preventDefault();
   }
   const obj = Object.fromEntries(formData)
   console.log(obj)
   console.log(formData)

   fetch('../queries/CRUD_OPERA/select_opera.php', {

      method: 'POST',
      header: {
         'Content-Type': 'application/json'
      },
      body: formData
   })

      .then(response => response.json())
      .then(data => {
         informazioni = data;

         console.log('dati ricevuti: ', informazioni);
         let tabella = ` 
            <hr>
            <h3>Selezionare quale opera si intende modificare</h3>
            <ul class="tabellaOver" id="tabellaOverInsert">
					   <li class="testataOver">
							<div class="colOver">Autore </div>
							<div class="colOver">Titolo </div>
							<div class="colOver">Anno acquisto </div>
							<div class="colOver">Anno realizzazione</div>
							<div class="colOver">Tipo</div>
							<div class="colOver">Esposta in sala </div>
						</li>
                    ${generaSelect()}
                    `;

         contOverlay.innerHTML = tabella;
         // contenuto.insertAdjacentHTML('beforeend', tabella);
      })
      .catch((error) => {
         console.log('errore: ', error);
      });
}

function generareAutoriArray(event) {
   if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
   }
   window.history.replaceState({}, document.title, window.location.pathname);

   const form = document.querySelector("#form");
   const formData = new FormData(form);
   const obj = Object.fromEntries(formData)
   console.log(obj)
   console.log(formData)

   fetch('../queries/select_autore.php', {

      method: 'POST',
      header: {
         'Content-Type': 'application/json'
      },
      body: formData
   })

      .then(response => response.json())
      .then(data => {
         informazioni = data;

         console.log('dati ricevuti: ', informazioni);

         let idAutore = [...new Set(informazioni.map(informazioni => informazioni.codice))];
         let nomeAutore = informazioni.map(informazioni => informazioni.nome);
         let cognomeAutore = informazioni.map(informazioni => informazioni.cognome);

         for (let i = 0; i < idAutore.length; i++) {
            autoriArray.push(`${idAutore[i]} - ${cognomeAutore[i]} ${nomeAutore[i]}`);
         }
      })
      .catch((error) => {
         console.log('errore: ', error);
      });
}

function generareSaleArray(event) {
   if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
   }
   window.history.replaceState({}, document.title, window.location.pathname);

   const form = document.querySelector("#form");
   const formData = new FormData(form);
   const obj = Object.fromEntries(formData)
   console.log(obj)
   console.log(formData)

   fetch('../queries/select_sala.php', {

      method: 'POST',
      header: {
         'Content-Type': 'application/json'
      },
      body: formData
   })

      .then(response => response.json())
      .then(data => {
         informazioni = data;

         console.log('dati ricevuti: ', informazioni);

         let nomeSale = [...new Set(informazioni.map(informazioni => informazioni.nome))];

         for (let i = 0; i < nomeSale.length; i++) {
            saleArray.push(`${nomeSale[i]}`);
         }

      })
      .catch((error) => {
         console.log('errore: ', error);
      });
}

function generaSelect() {
   let select = '';
   generareAutoriArray(event);
   generareSaleArray(event);
   console.log("queste sono le informazioni", informazioni);
   select += `
               
                  <form id="formSelect" autocomplete="off" name="myformSelect" method="POST" onsubmit="return gestisciSubmitSelect();">
                     <div class="autocomplete">
                        <input id="autoreSelect" type="text" name="autoreSelect" class="autocompleteInput" placeholder="Cerca autore..." required>
                     </div>
                     

                     <input type="text" name="titoloSelect" id="titoloSelect" class="myInput" placeholder="titolo" required>
                     <input type="number" min="2019" max="2025" name="AnnoAquistoSelect" id="AnnoAquistoSelect" class="myInput " placeholder="anno di acquisto" required>
				         <input type="number" min="1959" max="2024" name="AnnoRealizzazioneSelect" id="AnnoRealizzazioneSelect" class="myInput " placeholder="anno di realizzazione" required>
                     <select id="tipoSelect" name="tipoSelect" class="myInput select" required>
                        <option value="">Tipo...</option> 
                        <option value="quadro">quadro</option>
					         <option value="scultura">scultura</option>
                     </select>

                     <div class="autocomplete">
                        <input id="NumeroSalaSelect" type="text" name="NumeroSalaSelect" class="autocompleteInput" placeholder="Cerca sala..." required>
                     </div>
                     

                     <br><br><br>
                     <input type="submit" class="invio" value="Inserisci" id="idInvioInsert"/>
                  </form>
					  
                `;



   return select;

}

function inserisci() {
   event.preventDefault();
   const form = document.querySelector("#formSelect");
   const formData = new FormData(form);
   const risposta = document.getElementById("risposta");

   const obj = Object.fromEntries(formData);
   console.log(obj);


   risposta.innerHTML = "Inserimento andato a buon fine!<div id=\"barra\"></div>";
   avviaCaricamento();
   risposta.style.marginTop = "10%";
   setTimeout(() => {
      risposta.style.opacity = 1;
   }, 100);
   setTimeout(() => {
      risposta.style.opacity = 0;
   }, 2500);

   console.log(risposta.innerHTML);

   aggiornaCerca();

   fetch('../queries/CRUD_OPERA/insert_opera.php', {

      method: 'POST',
      header: {
         'Content-Type': 'application/json'
      },
      body: formData
   })

      .catch((error) => {
         risposta.innerHTML = "Errore";
      });
}

function gestisciSubmitSelect() {
   if (!controlloInputSelect()) {
      return false;
   } else {
      inserisci();
      cancellaValori();
      autocomplete(document.getElementById("autoreSelect"), autoriArray);
      autocomplete(document.getElementById("NumeroSalaSelect"), saleArray);
      aggiornaCerca();
      return true;
   }

}


function controlloInputSelect() {
   const annoAc = parseInt(document.getElementById('AnnoAquistoSelect').value);
   const annoRe = parseInt(document.getElementById('AnnoRealizzazioneSelect').value);
   const autore = document.getElementById('autoreSelect').value;
   const sala = document.getElementById('NumeroSalaSelect').value;

   if (!(autoriArray.includes(autore))) {
      overlayMessaggioOn("autore");
      return false;
   }

   if (!(saleArray.includes(sala))) {
      overlayMessaggioOn("sala");
      return false;
   }

   if (annoAc < annoRe) {
      overlayMessaggioOn("anno");
      return false;
   }
   return true;
}






//UPDATE

function update(id, id1) {
   window.history.replaceState({}, document.title, window.location.pathname);

   const form = document.querySelector("#form");
   const formData = new FormData(form);

   if (id != null) {
      formData.append('Autore', `${id}`);
   } else if (id1 != null) {
      formData.append('NumeroSala', `${id1}`);
   } else {
      event.preventDefault();
   }
   const obj = Object.fromEntries(formData)
   console.log(obj)
   console.log(formData)

   fetch('../queries/CRUD_OPERA/select_opera.php', {

      method: 'POST',
      header: {
         'Content-Type': 'application/json'
      },
      body: formData
   })

      .then(response => response.json())
      .then(data => {
         informazioni = data;

         console.log('dati ricevuti: ', informazioni);
         let tabella = ` 
               <hr>
               <h3>Selezionare quale opera si intende modificare</h3>
                    ${generaUpdateCodice()}
               <hr>
               <h4>Inserire i nuovi valori nei parametri da modificare</h4>
               <ul class="tabellaOver" id="tabellaOverInsert">
					   <li class="testataOver">
							<div class="colOver">Autore</div>
							<div class="colOver">Titolo</div>
							<div class="colOver">Anno acquisto</div>
							<div class="colOver">Anno realizzazione</div>
							<div class="colOver">Tipo</div>
							<div class="colOver">Esposta in sala</div>
						</li>
                    ${generaUpdate()}
                    `;


         contOverlay.innerHTML = tabella;
         // contenuto.insertAdjacentHTML('beforeend', tabella);
      })
      .catch((error) => {
         console.log('errore: ', error);
      });
}

function generareOpereArray(event) {
   if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
   }
   window.history.replaceState({}, document.title, window.location.pathname);

   const form = document.querySelector("#form");
   const formData = new FormData(form);
   const obj = Object.fromEntries(formData)
   console.log(obj)
   console.log(formData)

   fetch('../queries/CRUD_OPERA/select_opera.php', {

      method: 'POST',
      header: {
         'Content-Type': 'application/json'
      },
      body: formData
   })

      .then(response => response.json())
      .then(data => {
         informazioni = data;

         console.log('dati ricevuti: ', informazioni);

         let titoliOpera = informazioni.map(informazioni => informazioni.titolo);
         let autoriOpere = informazioni.map(informazioni => informazioni.autore);
         opereArray.length = 0;

         getNomeAutori(autoriOpere, event).then(() => {
            for (let i = 0; i < titoliOpera.length; i++) {
               opereArray.push(`${titoliOpera[i]} - ${nomeAutoriArray[i]}`);
            }
         });


         console.log(opereArray);
      })
      .catch((error) => {
         console.log('errore: ', error);
      });
}

function getNomeAutori(idAutoriOpere, event) {
   if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
   }
   window.history.replaceState({}, document.title, window.location.pathname);

   const form = document.querySelector("#form");
   const formData = new FormData(form);

   return fetch('../queries/select_autore.php', {
      method: 'POST',
      header: {
         'Content-Type': 'application/json'
      },
      body: formData
   })
      .then(response => response.json())
      .then(data => {
         informazioni = data;

         console.log('dati ricevuti: ', informazioni);

         let idAutore = [...new Set(informazioni.map(info => info.codice))];
         let nomeAutore = informazioni.map(info => info.nome);
         let cognomeAutore = informazioni.map(info => info.cognome);
         let autoreMap = {};

         for (let i = 0; i < idAutore.length; i++) {
            autoreMap[idAutore[i]] = `${cognomeAutore[i]} ${nomeAutore[i]}`;
         }

         // Pulisce l’array per evitare duplicazioni
         nomeAutoriArray.length = 0;

         for (let i = 0; i < idAutoriOpere.length; i++) {
            if (autoreMap[idAutoriOpere[i]]) {
               nomeAutoriArray.push(autoreMap[idAutoriOpere[i]]);
            }
         }
      });
}


function generaUpdateCodice() {
   let select = '';
   generareOpereArray(event);

   select += `
               
                  <form id="formUpdate" name="myformUpdate" method="POST" onsubmit="return gestisciSubmitUpdate()">
                     <div class="autocomplete">
                        <input id="codiceUpdate" type="text" name="codiceUpdate" class="autocompleteInput opera" placeholder="Cerca opera..." required>
                     </div>             
                `;

   return select;

}

function generaUpdate() {
   let select = '';
   generareAutoriArray(event);
   generareSaleArray(event);

   select += `
               
                  <form id="formUpdate" name="myformUpdate" method="POST" onsubmit="return gestisciSubmitUpdate()">         

                     <div class="autocomplete">
                        <input id="autoreUpdate" type="text" name="autoreUpdate" class="autocompleteInput" placeholder="Cerca autore...">
                     </div>

                     <input type="text" name="titoloUpdate" id="titoloUpdate" class="myInput" placeholder="titolo" >
                     <input type="number" min="2019" max="2025" name="AnnoAquistoUpdate" id="AnnoAquistoUpdate" class="myInput " placeholder="anno di acquisto" >
				         <input type="number" min="1959" max="2024" name="AnnoRealizzazioneUpdate" id="AnnoRealizzazioneUpdate" class="myInput " placeholder="anno di realizzazione" >
                     <select id="tipoUpdate" name="tipoUpdate" class="myInput update" >
                        <option value="">Tipo...</option> 
                        <option value="quadro">quadro</option>
					         <option value="scultura">scultura</option>
                     </select>
                  
                     <div class="autocomplete">
                        <input id="NumeroSalaUpdate" type="text" name="NumeroSalaUpdate" class="autocompleteInput" placeholder="Cerca sala...">
                     </div>

                     <br><br><br>
                     <input type="submit" class="invio sub" value="Aggiorna" id="idInvioUpdate"/>
                  </form>
					  
                `;



   return select;

}

function aggiorna() {
   event.preventDefault();
   const form = document.querySelector("#formUpdate");
   const formData = new FormData(form);
   const risposta = document.getElementById("risposta");

   const obj = Object.fromEntries(formData);
   console.log(obj);


   risposta.innerHTML = "Dati aggiornati con successo!<div id=\"barra\"></div>";
   avviaCaricamento();
   risposta.style.marginTop = "10%";
   setTimeout(() => {
      risposta.style.opacity = 1;
   }, 100);
   setTimeout(() => {
      risposta.style.opacity = 0;
   }, 2500);

   console.log(risposta.innerHTML);

   aggiornaCerca();

   fetch('../queries/CRUD_OPERA/update_opera.php', {

      method: 'POST',
      header: {
         'Content-Type': 'application/json'
      },
      body: formData
   })

      .catch((error) => {
         risposta.innerHTML = "Errore";
      });
}

function gestisciSubmitUpdate() {
   if (!controlloInputUpdate()) {
      return false;
   } else {
      aggiorna();
      cancellaValori();
      autocomplete(document.getElementById("codiceUpdate"), opereArray);
      autocomplete(document.getElementById("autoreUpdate"), autoriArray);
      autocomplete(document.getElementById("NumeroSalaUpdate"), saleArray);
      aggiornaCerca();
      return true;
   }

}

function controlloInputUpdate() {
   const annoAc = document.getElementById('AnnoAquistoUpdate').value;
   const annoRe = document.getElementById('AnnoRealizzazioneUpdate').value;
   const opera = document.getElementById('codiceUpdate').value;
   const autore = document.getElementById('autoreUpdate').value;
   const titolo = document.getElementById('titoloUpdate').value;
   const tipo = document.getElementById('tipoUpdate').value;
   const sala = document.getElementById('NumeroSalaUpdate').value;

   const annoAcInt = parseInt(annoAc);
   const annoReInt = parseInt(annoRe);

   let inputArray = [autore, titolo, annoAc, annoRe, tipo, sala];

   if (!(opereArray.includes(opera))) {
      overlayMessaggioOn("opera");
      return false;
   }

   if ((!(autoriArray.includes(autore))) && autore !== "") {  //true
      overlayMessaggioOn("autore");
      return false;
   }

   if ((!(saleArray.includes(sala))) && sala !== "") {
      overlayMessaggioOn("sala");
      return false;
   }

   if (inputArray.every(val => val.trim() === "")) {
      overlayMessaggioOn("noInput");
      return false;
   }

   if (annoAcInt < annoReInt) {
      overlayMessaggioOn("anno");
      return false;
   }
   return true;
}

function overlayMessaggioOn(messaggio) {
   const overlayMessaggio = document.getElementById('overlayMessaggio');
   const testoMessaggio = document.getElementById("testoMessaggioOver");

   switch (messaggio) {
      case "anno":
         testoMessaggio.innerHTML = "ANNO DI ACQUISTO deve essere maggiore o uguale dell'ANNO DI REALIZZAZIONE!"
         overlayMessaggio.style.display = "block";
         break;
      case "autore":
         testoMessaggio.innerHTML = "L'AUTORE inserito NON &Egrave; PRESENTE nella lista degli autori!"
         overlayMessaggio.style.display = "block";
         break;
      case "sala":
         testoMessaggio.innerHTML = "LA SALA inserita NON &Egrave; PRESENTE nella lista delle sale!"
         overlayMessaggio.style.display = "block";
         break;
      case "opera":
         testoMessaggio.innerHTML = "L'OPERA inserita NON &Egrave; PRESENTE nella lista delle opere!"
         overlayMessaggio.style.display = "block";
         break;
      case "noInput":
         testoMessaggio.innerHTML = "NON &Egrave; STATO inserito NESSUN NUOVO valore nei parametri!"
         overlayMessaggio.style.display = "block";
         break;

      default:

   }

}

function overlayMessaggioOff() {
   const overlayMessaggio = document.getElementById('overlayMessaggio');
   overlayMessaggio.style.display = "none";
}





//DELETE
function delete0(id, id1) {
   window.history.replaceState({}, document.title, window.location.pathname);

   const form = document.querySelector("#form");
   const formData = new FormData(form);

   if (id != null) {
      formData.append('Autore', `${id}`);
   } else if (id1 != null) {
      formData.append('NumeroSala', `${id1}`);
   } else {
      event.preventDefault();
   }
   const obj = Object.fromEntries(formData)
   console.log(obj)
   console.log(formData)

   fetch('../queries/CRUD_OPERA/select_opera.php', {

      method: 'POST',
      header: {
         'Content-Type': 'application/json'
      },
      body: formData
   })

      .then(response => response.json())
      .then(data => {
         informazioni = data;

         console.log('dati ricevuti: ', informazioni);
         let tabella = ` 
               <hr>
               <h3>Selezionare quale opera si intende modificare</h3>
               <ul class="tabellaOver" id="tabellaOverUpdate">
					   <li class="testataOver" >
                     <div class="colOver">Codice</div>
						</li>
               </ul>
                    ${generaDeleteCodice()}
                    `;


         contOverlay.innerHTML = tabella;
         // contenuto.insertAdjacentHTML('beforeend', tabella);
      })
      .catch((error) => {
         console.log('errore: ', error);
      });
}

function generaDeleteCodice() {
   let select = '';
   generareOpereArray();
   console.log("queste sono le informazioni", informazioni);
   select += `
               
                  <form id="formDelete" name="myformDelete" method="POST" onsubmit="sicurezzaOn();">
                     <div class="autocomplete">
                        <input id="codiceDelete" type="text" name="codiceDelete" class="autocompleteInput opera" placeholder="Cerca opera..." required>
                     </div>   
                     <br><br><br>
                     <input type="submit" class="invio InvioDelete" value="Elimina"/>
                  </form>          
                `;

   return select;

}



function elimina() {
   event.preventDefault();
   const obj = Object.fromEntries(formDataDelete);
   console.log(obj);


   risposta.innerHTML = "Dati eliminati con successo!<div id=\"barra\"></div>";
   avviaCaricamento();
   risposta.style.marginTop = "15%";
   setTimeout(() => {
      risposta.style.opacity = 1;
   }, 100);
   setTimeout(() => {
      risposta.style.opacity = 0;
   }, 2500);

   console.log(risposta.innerHTML);

   aggiornaCerca();

   fetch('../queries/CRUD_OPERA/delete_opera.php', {

      method: 'POST',
      header: {
         'Content-Type': 'application/json'
      },
      body: formDataDelete
   })

      .catch((error) => {
         risposta.innerHTML = "Errore";
      });



}

function sicurezzaOn() {
   event.preventDefault();
   const form = document.querySelector("#formDelete");
   const opera = document.getElementById("codiceDelete").value;
   formDataDelete = new FormData(form);
   const obj = Object.fromEntries(formDataDelete);
   console.log(obj);


   if (!(opereArray.includes(opera))) {
      console.log(opera);
      console.log(opereArray);
      overlayMessaggioOn("opera");
      return false;
   }
   document.getElementById("overlayDelete").style.display = "block";
   cancellaValori();
   autocomplete(document.getElementById("codiceDelete"), opereArray);
   aggiornaCerca();
   return true;

}

function sicurezzaOff() {

   event.preventDefault();
   document.getElementById("overlayDelete").style.display = "none";

}



function cancellaValori() {
   const crudSelect = document.getElementById("crud").value;
   event.preventDefault();

   switch (crudSelect) {
      case "create":
         document.getElementById("autoreSelect").value = "";
         document.getElementById("titoloSelect").value = "";
         document.getElementById("AnnoAquistoSelect").value = "";
         document.getElementById("AnnoRealizzazioneSelect").value = "";
         document.getElementById("tipoSelect").value = "";
         document.getElementById("NumeroSalaSelect").value = "";
         break;
      case "update":
         document.getElementById("codiceUpdate").value = "";
         document.getElementById("autoreUpdate").value = "";
         document.getElementById("titoloUpdate").value = "";
         document.getElementById("AnnoAquistoUpdate").value = "";
         document.getElementById("AnnoRealizzazioneUpdate").value = "";
         document.getElementById("tipoUpdate").value = "";
         document.getElementById("NumeroSalaUpdate").value = "";
         break;
      case "delete":
         document.getElementById("codiceDelete").value = "";
         break;
      default:


   }
}

function aggiornaCerca(event) {


   document.getElementById("a1").value = "";
   document.getElementById("t1").value = "";
   document.getElementById("aa").value = "";
   document.getElementById("ar").value = "";
   document.getElementById("Tipo").value = "";
   document.getElementById("s").value = "";
   cerca(event);

}

//barra di caricamento
function avviaCaricamento() {
   const barra = document.getElementById("barra");
   const durataSecondi = 3;
   const fps = 60; // fotogrammi al secondo (fluidità)
   const intervallo = 1000 / fps;
   const incremento = 100 / (durataSecondi * fps);

   let larghezza = 0;
   barra.style.width = "0%";

   const timer = setInterval(() => {
      larghezza += incremento;
      if (larghezza >= 18) {

         larghezza = 20;
         clearInterval(timer);
         // reset dopo 1s
         setTimeout(() => barra.style.width = "0%", 2000);
      }
      barra.style.width = larghezza + "%";
   }, intervallo);
}


function accedi() {
   event.preventDefault();

   const form = document.querySelector("#loginForm");
   const formData = new FormData(form);

   const username = formData.get("username");
   const password = formData.get("password");

   const passwordbox = document.getElementById("password");
   const contenutoOvelay = document.getElementById("contenutoOvelay");
   const risposta = document.getElementById("messaggioLogin");
   const messaggioUscita = document.getElementById("messaggioUscita");

   if (username === "admin" && password === "admin") {
      sessionStorage.setItem("loggedIn", "true"); // salva lo stato di login, uso sessionStorage perche si autocancella quando chiudo il browser

      risposta.style.color = "green";
      risposta.innerHTML = "Benvenuto!";
      console.log("password CORRETTA!")

      setTimeout(() => {
         risposta.style.opacity = 1;
      }, 100);

      setTimeout(() => {
         risposta.style.opacity = 0;
         contenutoOvelay.style.width = "70%";
         contenutoOvelay.style.height = "70%";
         contenutoOvelay.style.left = "15%";

         messaggioUscita.style.width = "70%";
         messaggioUscita.style.left = "15%";
         contenutoOvelay.style.borderRadius = "2px";
         gestisciOverlay();
      }, 2000);
   } else {
      passwordbox.classList.add("shake");
      risposta.style.color = "red";
      risposta.innerHTML = "Credenziali errate!";
      setTimeout(() => {
         passwordbox.classList.remove("shake");
      }, 400);

      risposta.style.top = "15%";
      setTimeout(() => {
         risposta.style.opacity = 1;
      }, 100);
      setTimeout(() => {
         risposta.style.opacity = 0;
      }, 1200);

      console.log("password ERRATA!")
   }
}


function gestisciOverlay() {
   const loginPage = document.getElementById("login");
   const textPage = document.getElementById("text");
   const contenutoOvelay = document.getElementById("contenutoOvelay");
   const messaggioUscita = document.getElementById("messaggioUscita");
   on();
   if (sessionStorage.getItem("loggedIn") === "true") {
      loginPage.style.display = "none";
      textPage.style.display = "block";
      textPage.style.opacity = 1;
   } else {
      messaggioUscita.style.width = "25%";
      contenutoOvelay.style.width = "25%";
      contenutoOvelay.style.borderRadius = "40px";
      contenutoOvelay.style.height = "50%";
      messaggioUscita.style.left = "37.3%";
      contenutoOvelay.style.left = "37.3%";
      loginPage.style.display = "block";
      textPage.style.display = "none";
      textPage.style.opacity = 0;
   }
}

