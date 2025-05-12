
let informazioni;
let contenuto = document.getElementById("contenuto");
let nomeArray = [];
let cognomeArray = [];
let nazioneArray = [];

const params = new URLSearchParams(window.location.search);
const id_1 = params.get('id_1'); // Prende il valore di "id_1"
if (id_1 == null) {
   window.onload = function () {
      cerca(event);
   };
}

function cerca(event, id) {
   if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
   }
   window.history.replaceState({}, document.title, window.location.pathname); //questo mi fa togliere il path come se fosse senza il GET ?nome
   // stratagemma per non far vdere all'utente la richiesta , dovrei aggiungerlo anche nelle altre pagine cosi almeno quando refresho la pagina non ho la richiesta di nuovo
   const form = document.querySelector("#form");
   const formData = new FormData(form);

   if (id != null) {
      formData.append('Codice', `${id}`);
   }

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
         console.log('dati ricevuti: ', data);
         let tabella = ` 

            
            <ul class="tabella">
					<nav class="fissa">
					   <li class="testata">
                     
							
							<div class="col" >Nome</div>
							<div class="col" >Cognome</div>
							<div class="col" >Nazione</div>
							<div class="col" >Data Nascita</div>
							<div class="col" >Vivo/Morto</div>
							<div class="col" >Data Morte</div>
                     <div class="col" >Numero opere realizzate</div>
                     
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
   generaInput(event);
   let classRiga = 'class="riga"';

   data.forEach(data => {
      if (i >= (pagina - 1) * 25 && i < pagina * 25) {
         if (data.dataMorte == null) {
            riga = `
                   <li ${classRiga}>
                        
                        
                        <div class="col"> ${data.nome}</div>
                        <div class="col">${data.cognome}  </div>
                        <div class="col"> ${data.nazione}</div>
                        <div class="col">${data.dataNascita}  </div>
                        <div class="col">${data.tipo} </div>
                        <div class="col">🟩 In vita</div>
                        <div class="col"><a href="Opera.php?id_1=${data.codice}">${data.num_opere}</a></div>
                        
                     </li>
                   `;

         } else {
            riga = `
                   <li ${classRiga}>
                        
                        
                        <div class="col"> ${data.nome}</div>
                        <div class="col">${data.cognome}  </div>
                        <div class="col"> ${data.nazione}</div>
                        <div class="col">${data.dataNascita}  </div>
                        <div class="col">${data.tipo} </div>
                        <div class="col">✞ ${data.dataMorte}</div>
                        <div class="col"><a href="Opera.php?id_1=${data.codice}">${data.num_opere}</a></div>
                     </li>
                   `;
         }
         righe += riga;
      }
      i++;
   });
   numeroRighe = i;
   autocomplete(document.getElementById("n"), nomeArray);
   autocomplete(document.getElementById("cg"), cognomeArray);
   autocomplete(document.getElementById("na"), nazioneArray);
   return righe;
}

function canc(event) {
   event.preventDefault();
   document.getElementById('n').value = "";
   document.getElementById('cg').value = "";
   document.getElementById('na').value = "";
   document.getElementById('dn').value = "";
   document.getElementById('m1').value = "";
   document.getElementById('VivoMorto').value = "";
   cerca(event);
}

async function generaInput(event) {
   if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
   }
   window.history.replaceState({}, document.title, window.location.pathname);

   const form = document.querySelector("#form");
   const formData = new FormData(form);
   const obj = Object.fromEntries(formData);

   try {
      const response = await fetch('../queries/select_autore.php', {
         method: 'POST',
         body: formData
      });
      const data = await response.json();

      informazioni = data;

      let nomeAutore = [...new Set(informazioni.map(info => info.nome))];
      let cognomeAutore = [...new Set(informazioni.map(info => info.cognome))];
      let nazioneAutore = [...new Set(informazioni.map(info => info.nazione))];

      nomeArray.length = 0;
      cognomeArray.length = 0;
      nazioneArray.length = 0;

      for (let i = 0; i < nomeAutore.length; i++) {
         nomeArray.push(nomeAutore[i]);
         cognomeArray.push(cognomeAutore[i]);
         nazioneArray.push(nazioneAutore[i]);
      }

      return true; // 👈 ritorni qualcosa per poter usare .then()
   } catch (error) {
      console.error('errore: ', error);
      return false;
   }
}
