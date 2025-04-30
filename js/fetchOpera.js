
let informazioni;
let contenuto = document.getElementById("contenuto");
let contOverlay = document.getElementById("query");
//devo fare un controllo aggiuntivo perche window.reload quando la pagina si mostra mi 
// cancella id e id1 quindi devo controllare solo quando si apre per la prima volta
const params = new URLSearchParams(window.location.search);
const nome = params.get('nome'); // Prende il valore di "nome"
const nome1 = params.get('nome1'); // Prende il valore di "nome"
if (nome == null && nome1 == null) {
   window.onload = function () {
      cerca();
   };
}

//pagina principale
function cerca(id, id1) {
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
							<div class="col">Codice </div>
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
   let classRiga = 'class="riga"';
   data.forEach(data => {

      riga = `
                <li ${classRiga}>
							<div class="col">${data.codice}</div>
							<div class="col"> <a href="Autore.php?nome=${data.autore}">${data.autore}</a></div>
							<div class="col">${data.titolo}  </div>
							<div class="col"> ${data.annoAcquisto}</div>
							<div class="col">${data.annoRealizzazione}  </div>
							<div class="col">${data.tipo} </div>
							<div class="col"> <a href="Sala.php?nome=${data.espostaInSala}"> ${data.espostaInSala}</a></div>
						</li>
                `;
      righe += riga;
   });
   return righe;

}

function canc() {
   event.preventDefault();

   document.getElementById('a1').value = "";
   document.getElementById('t1').value = "";
   document.getElementById('aa').value = "";
   document.getElementById('ar').value = "";
   document.getElementById('Tipo').value = "";
   document.getElementById('s').value = "";
}









//Overlay
function query() {

   const crudSelect = document.getElementById("crud").value;
   const contenuto = document.getElementById("query");
   const ombra = document.getElementById("contenutoOvelay");
   switch (crudSelect) {
      case "create":
         setTimeout(() => {
            ombra.style.boxShadow =  "0px 0px 100px 0px rgba(215, 127, 83, 0.5)";
         }, 50);

         select();

         break;
      case "read":
         setTimeout(() => {
            ombra.style.boxShadow =  "0px 0px 100px 0px rgba(129, 215, 83, 0.5)";
         }, 50);
         
         contenuto.textContent = "ciao sono READ!";

         break;
      case "update":
         setTimeout(() => {
            ombra.style.boxShadow =  "0px 0px 100px 0px rgba(83, 215, 211, 0.5)";
         }, 50);

         update();

         break;
      case "delete":
         setTimeout(() => {
            ombra.style.boxShadow =  "0px 0px 100px 0px rgba(215, 83, 83, 0.5)";
         }, 50);

         delete0();

         break;
      default:
         setTimeout(() => {
            ombra.style.boxShadow =  "0px 0px 100px 0px rgba(67, 79, 90, 0.5)";
         }, 50);

         contenuto.textContent = "ciao sono READ!";
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

            <ul class="tabellaOver" id="tabellaOverInsert">
					   <li class="testataOver">
							<div class="colOver">Autore </div>
							<div class="colOver">Titolo </div>
							<div class="colOver">Anno acquisto </div>
							<div class="colOver">Anno realizzazione</div>
							<div class="colOver">Tipo</div>
							<div class="colOver">Esposta in sala </div>
						</li>
                    ${generaSelect(informazioni)}
                    `;

         contOverlay.innerHTML = tabella;
         // contenuto.insertAdjacentHTML('beforeend', tabella);
      })
      .catch((error) => {
         console.log('errore: ', error);
      });
}

function generaSelect(data) {
   let select = '';
   //sorry anto se ti rubo il lavor, ho visto che ti stampava gli autori duplicati e non in ordine quindi
   //ho preso data e la rendo un array con i dati di autore, e unaltro array con i dati delle sale, poi 
   //il sort fatto in quel modo serve per sortarli in base al valore del numero e non in base all'id
   //che di nuovo sono in posizioni strane[non tocco puìiu niente i swear]
   let informazioniAut = [...new Set(data.map(data => data.autore))].sort((a, b) => Number(a) - Number(b));
   let informazioniSala = [...new Set(data.map(data => data.espostaInSala))].sort((a, b) => Number(a) - Number(b));

   console.log("queste sono le informazioni", informazioni);
   select += `
               
                  <form id="formCrud" name="myformCrud" method="POST" onsubmit="inserisci(); cancellaValori(); ">
                     <select id="autoreSelect" name="autoreSelect" class="myInput " required>
                `;

   informazioniAut.forEach(informazioniAut => {
      select += `
					         <option value="${informazioniAut}">${informazioniAut}</option>
                `;
   });


   select += `
                     </select>
                     <input type="text" name="titoloSelect" id="titoloSelect" class="myInput" placeholder="titolo" required>
                     <input type="number" min="2019" max="2025" name="AnnoAquistoSelect" id="AnnoAquistoSelect" class="myInput " placeholder="anno di acquisto" required>
				         <input type="number" min="1959" max="2024" name="AnnoRealizzazioneSelect" id="AnnoRealizzazioneSelect" class="myInput " placeholder="anno di realizzazione" required>
                     <select id="tipoSelect" name="tipoSelect" class="myInput " required>
                        <option value="quadro">quadro</option>
					         <option value="scultura">scultura</option>
                     </select>
                     <select id="NumeroSalaSelect" name="NumeroSalaSelect" class="myInput" required>
                 `;

   informazioniSala.forEach(informazioniSala => {
      select += `
                        <option value="${informazioniSala}">sala ${informazioniSala}</option>
                            `;
   });

   select += `
                     </select>
                     <br><br><br>
                     <input type="submit" class="invio sub" value="Inserisci" id="idInvioCrud"/>
                  </form>
					  
                `;



   return select;

}

function inserisci() {
   event.preventDefault();
   const form = document.querySelector("#formCrud");
   const formData = new FormData(form);
   const risposta = document.getElementById("risposta");

   const obj = Object.fromEntries(formData);
   console.log(obj);


   risposta.innerHTML = "Inserimento andato a buon fine!<div id=\"barra\"></div>";
   avviaCaricamento();
   risposta.style.marginTop = "10%" ;
   setTimeout(() => {
      risposta.style.opacity = 1;
   }, 100);
   setTimeout(() => {
      risposta.style.opacity = 0;
   }, 2500);

   console.log(risposta.innerHTML);

   /*fetch('../queries/CRUD_OPERA/insert_opera.php', {

      method: 'POST',
      header: {
         'Content-Type': 'application/json'
      },
      body: formData
   })
   
   .catch((error) => {
      risposta.innerHTML  = "Errore";
   });*/
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
               <ul class="tabellaOver" id="tabellaOverUpdate">
					   <li class="testataOver" >
                     <div class="colOver">Codice</div>
						</li>
               </ul>
                    ${generaUpdateCodice(informazioni)}
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
                    ${generaSelect(informazioni)}
                    `;


         contOverlay.innerHTML = tabella;
         // contenuto.insertAdjacentHTML('beforeend', tabella);
      })
      .catch((error) => {
         console.log('errore: ', error);
      });
}

function generaUpdateCodice(data) {
   let select = '';
   //sorry anto se ti rubo il lavor, ho visto che ti stampava gli autori duplicati e non in ordine quindi
   //ho preso data e la rendo un array con i dati di autore, e unaltro array con i dati delle sale, poi 
   //il sort fatto in quel modo serve per sortarli in base al valore del numero e non in base all'id
   //che di nuovo sono in posizioni strane[non tocco puìiu niente i swear]
   let informazioniAut = [...new Set(data.map(data => data.autore))].sort((a, b) => Number(a) - Number(b));
   let informazioniSala = [...new Set(data.map(data => data.espostaInSala))].sort((a, b) => Number(a) - Number(b));

   console.log("queste sono le informazioni", informazioni);
   select += `
               
                  <form id="formCrud" name="myformCrud" method="POST" onsubmit="aggiorna(); cancellaValori(); ">
                     <select id="codiceUpdate" name="codiceUpdate" class="myInput " required>    
                `;

   data.forEach(data => {
      select += `
                        <option value="${data.codice}">${data.codice}</option>      
    `;

   });


   select += `        
                     </select>          
                `;

   return select;

}

function generaUpdate(data) {
   let select = '';
   let informazioniAut = [...new Set(data.map(data => data.autore))].sort((a, b) => Number(a) - Number(b));
   let informazioniSala = [...new Set(data.map(data => data.espostaInSala))].sort((a, b) => Number(a) - Number(b));

   console.log("queste sono le informazioni", informazioni);
   select += `
               
                  <form id="formCrud" name="myformCrud" method="POST" onsubmit="aggiorna(); cancellaValori(); ">         
                     <select id="autoreUpdate" name="autoreUpdate" class="myInput " required>
                        <option value="">cadwada</option>
                `;

   informazioniAut.forEach(informazioniAut => {
      select += `
					         <option value="${informazioniAut}">cccc${informazioniAut}</option>
                `;
   });


   select += `
                     </select>
                     <input type="text" name="titoloUpdate" id="titoloUpdate" class="myInput" placeholder="titolo" required>
                     <input type="number" min="2019" max="2025" name="AnnoAquistoUpdate" id="AnnoAquistoUpdate" class="myInput " placeholder="anno di acquisto" required>
				         <input type="number" min="1959" max="2024" name="AnnoRealizzazioneUpdate" id="AnnoRealizzazioneUpdate" class="myInput " placeholder="anno di realizzazione" required>
                     <select id="tipoUpdate" name="tipoUpdate" class="myInput " required>
                        <option value="quadro">quadro</option>
					         <option value="scultura">scultura</option>
                     </select>
                     <select id="NumeroSalaUpdate" name="NumeroSalaUpdate" class="myInput" required>
                 `;

   informazioniSala.forEach(informazioniSala => {
      select += `
                        <option value="${informazioniSala}">sala ${informazioniSala}</option>
                            `;
   });

   select += `
                     </select>
                     <input type="submit" class="invio sub" value="Inserisci" id="idInvioCrud"/>
                  </form>
					  
                `;



   return select;

}

function aggiorna() {
   event.preventDefault();
   const form = document.querySelector("#formCrud");
   const formData = new FormData(form);
   const risposta = document.getElementById("risposta");

   const obj = Object.fromEntries(formData);
   console.log(obj);


   risposta.innerHTML = "Dati aggiornati con successo!<div id=\"barra\"></div>";
   avviaCaricamento();
   risposta.style.marginTop = "5%" ;
   setTimeout(() => {
      risposta.style.opacity = 1;
   }, 100);
   setTimeout(() => {
      risposta.style.opacity = 0;
   }, 2500);

   console.log(risposta.innerHTML);

   /*fetch('../queries/CRUD_OPERA/update_opera.php', {

      method: 'POST',
      header: {
         'Content-Type': 'application/json'
      },
      body: formData
   })
   
   .catch((error) => {
      risposta.innerHTML  = "Errore";
   });*/
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
                    ${generaDeleteCodice(informazioni)}
                    `;


         contOverlay.innerHTML = tabella;
         // contenuto.insertAdjacentHTML('beforeend', tabella);
      })
      .catch((error) => {
         console.log('errore: ', error);
      });
}

function generaDeleteCodice(data) {
   let select = '';
   //sorry anto se ti rubo il lavor, ho visto che ti stampava gli autori duplicati e non in ordine quindi
   //ho preso data e la rendo un array con i dati di autore, e unaltro array con i dati delle sale, poi 
   //il sort fatto in quel modo serve per sortarli in base al valore del numero e non in base all'id
   //che di nuovo sono in posizioni strane[non tocco puìiu niente i swear]
   let informazioniAut = [...new Set(data.map(data => data.autore))].sort((a, b) => Number(a) - Number(b));
   let informazioniSala = [...new Set(data.map(data => data.espostaInSala))].sort((a, b) => Number(a) - Number(b));

   console.log("queste sono le informazioni", informazioni);
   select += `
               
                  <form id="formCrud" name="myformCrud" method="POST" onsubmit="aggiorna(); cancellaValori(); ">
                     <select id="codiceUpdate" name="codiceUpdate" class="myInput " required>    
                `;

   data.forEach(data => {
      select += `
                        <option value="${data.codice}">${data.codice}</option>      
    `;

   });


   select += `        
                     </select>          
                `;

   return select;

}


function elimina() {
   event.preventDefault();
   const form = document.querySelector("#formCrud");
   const formData = new FormData(form);
   const risposta = document.getElementById("risposta");

   const obj = Object.fromEntries(formData);
   console.log(obj);


   risposta.innerHTML = "Dati aggiornati con successo!<div id=\"barra\"></div>";
   avviaCaricamento();
   risposta.style.marginTop = "5%" ;
   setTimeout(() => {
      risposta.style.opacity = 1;
   }, 100);
   setTimeout(() => {
      risposta.style.opacity = 0;
   }, 2500);

   console.log(risposta.innerHTML);

   /*fetch('../queries/CRUD_OPERA/insert_opera.php', {

      method: 'POST',
      header: {
         'Content-Type': 'application/json'
      },
      body: formData
   })
   
   .catch((error) => {
      risposta.innerHTML  = "Errore";
   });*/



}



function cancellaValori() {
   event.preventDefault();

   document.getElementById("titoloSelect").value = "";
   document.getElementById("AnnoAquistoSelect").value = "";
   document.getElementById("AnnoRealizzazioneSelect").value = "";

   //nel caso renderla generale con uno switch case per il CRUD
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


