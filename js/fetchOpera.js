
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

function query() {

   const crudSelect = document.getElementById("crud").value;
   const contenuto = document.getElementById("query");
   switch (crudSelect) {
      case "create":
         select();
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
         console.log('dati ricevuti: ', data);
         let tabella = ` 

            <ul class="tabellaOver">
					   <li class="testataOver">
							<div class="colOver">Autore </div>
							<div class="colOver">Titolo </div>
							<div class="colOver">Anno acquisto </div>
							<div class="colOver">Anno realizzazione</div>
							<div class="colOver">Tipo</div>
							<div class="colOver">Esposta in sala </div>
						</li>
                    ${generaSelect(data)}
                    </ul>
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
   select += `
               <form id="formCrud" name="myformCrud" method="POST" onsubmit="return cerca()">
               <select id="autoreSelect" name="aus" class="myInput" required>
                `;

   data.forEach(data => {
      select += `
					   <option value="${data.autore}">autore ${data.autore}</option>
                `;
   });

   select += `
               </select>
               <input type="text" name="titoloSelect" id="t1s" class="myInput" placeholder="titolo" required>
               <input type="number" min="2019" max="2025" name="AnnoAquistoSelect" id="aas" class="myInput" placeholder="anno di acquisto" required>
				   <input type="number" min="1959" max="2024" name="AnnoRealizzazioneSelect" id="ars" class="myInput" placeholder="anno di realizzazione" required>
               <select id="tipoSelect" name="tis" class="myInput" required>
                  <option value="quadro">quadro</option>
					   <option value="scultura">scultura</option>
               </select>
               <select id="NumeroSala" name="ss" class="myInput" required>
                 `;

   data.forEach(data => {
      select += `
                  <option value="${data.espostaInSala}">sala ${data.espostaInSala[0]}</option>
                            `;
   });



   return select;

}