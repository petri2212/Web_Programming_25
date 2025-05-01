
let informazioni;
let contenuto = document.getElementById("contenuto");
let contOverlay = document.getElementById("query");
let formDataDelete = "";
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


//Overlay
function query() {
   const crudSelect = document.getElementById("crud").value;
   const contenuto = document.getElementById("query");
   const ombra = document.getElementById("contenutoOvelay");
   switch (crudSelect) {
      case "create":
         setTimeout(() => {
            ombra.style.boxShadow = "0px 0px 100px 0px rgba(101, 215, 83, 0.5)";
         }, 10);

         select();

         break;
      case "update":
         setTimeout(() => {
            ombra.style.boxShadow = "0px 0px 100px 0px rgba(83, 215, 211, 0.5)";
         }, 10);

         update();

         break;
      case "delete":
         setTimeout(() => {
            ombra.style.boxShadow = "0px 0px 100px 0px rgba(215, 83, 83, 0.5)";
         }, 10);

         delete0();

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
   let informazioniAut = [...new Set(data.map(data => data.autore))].sort((a, b) => Number(a) - Number(b));
   let informazioniSala = [...new Set(data.map(data => data.espostaInSala))].sort((a, b) => Number(a) - Number(b));

   console.log("queste sono le informazioni", informazioni);
   select += `
               
                  <form id="formSelect" name="myformSelect" method="POST" onsubmit="inserisci(); cancellaValori(); aggiornaCerca();">
                     <select id="autoreSelect" name="autoreSelect" class="myInput select" required>
                        <option value="">null</option> 
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
                     <select id="tipoSelect" name="tipoSelect" class="myInput select" required>
                        <option value="">null</option> 
                        <option value="quadro">quadro</option>
					         <option value="scultura">scultura</option>
                     </select>
                     <select id="NumeroSalaSelect" name="NumeroSalaSelect" class="myInput select" required>
                     <option value="">null</option> 
                 `;

   informazioniSala.forEach(informazioniSala => {
      select += `
                        <option value="${informazioniSala}">sala ${informazioniSala}</option>
                            `;
   });

   select += `
                     </select>
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
      risposta.innerHTML  = "Errore";
   });
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
                    ${generaUpdate(informazioni)}
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
   
   console.log("queste sono le informazioni", informazioni);
   select += `
               
                  <form id="formUpdate" name="myformUpdate" method="POST" onsubmit="aggiorna(); cancellaValori(); aggiornaCerca();">
                     <select id="codiceUpdate" name="codiceUpdate" class="myInput update" required>
                        <option value="">null</option> 
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
               
                  <form id="formUpdate" name="myformUpdate" method="POST" onsubmit="aggiorna(); cancellaValori(); aggiornaCerca();">         
                     <select id="autoreUpdate" name="autoreUpdate" class="myInput update">
                        <option value="">null</option> 
                `;

   informazioniAut.forEach(informazioniAut => {
      select += `
					         <option value="${informazioniAut}">${informazioniAut}</option>
                `;
   });


   select += `
                     </select>
                     <input type="text" name="titoloUpdate" id="titoloUpdate" class="myInput" placeholder="titolo" >
                     <input type="number" min="2019" max="2025" name="AnnoAquistoUpdate" id="AnnoAquistoUpdate" class="myInput " placeholder="anno di acquisto" >
				         <input type="number" min="1959" max="2024" name="AnnoRealizzazioneUpdate" id="AnnoRealizzazioneUpdate" class="myInput " placeholder="anno di realizzazione" >
                     <select id="tipoUpdate" name="tipoUpdate" class="myInput update" >
                        <option value="">null</option> 
                        <option value="quadro">quadro</option>
					         <option value="scultura">scultura</option>
                     </select>
                     <select id="NumeroSalaUpdate" name="NumeroSalaUpdate" class="myInput update" >
                        <option value="">null</option> 
                 `;

   informazioniSala.forEach(informazioniSala => {
      select += `
                        <option value="${informazioniSala}">sala ${informazioniSala}</option>
                            `;
   });

   select += `
                     </select>
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
   risposta.style.marginTop = "5%";
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
   
   console.log("queste sono le informazioni", informazioni);
   select += `
               
                  <form id="formDelete" name="myformDelete" method="POST" onsubmit="sicurezzaOn(); cancellaValori(); aggiornaCerca();">
                     <select id="codiceDelete" name="codiceDelete" class="myInput delete" required>
                        <option value="">null</option> 
                `;

   data.forEach(data => {
      select += `
                        <option value="${data.codice}">${data.codice}</option>      
    `;

   });


   select += `        
                     </select>
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
   formDataDelete = new FormData(form);
   const obj = Object.fromEntries(formDataDelete);
   console.log(obj);
   console.log("sei sicuro?")
   document.getElementById("overlayDelete").style.display = "block";


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

function aggiornaCerca() {
   document.getElementById("a1").value = "";
   document.getElementById("t1").value = "";
   document.getElementById("aa").value = "";
   document.getElementById("ar").value = "";
   document.getElementById("Tipo").value = "";
   document.getElementById("s").value = "";
   cerca();
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


