
let informazioni;
let contenuto = document.getElementById("contenuto");

const params = new URLSearchParams(window.location.search);
const id_1 = params.get('id_1'); // Prende il valore di "id_1"
if (id_1 == null) {
   window.onload = function () {
      cerca();
   };
}

function cerca(id) {
   window.history.replaceState({}, document.title, window.location.pathname); //questo mi fa togliere il path come se fosse senza il GET ?nome
   // stratagemma per non far vdere all'utente la richiesta , dovrei aggiungerlo anche nelle altre pagine cosi almeno quando refresho la pagina non ho la richiesta di nuovo

   const form = document.querySelector("#form");
   const formData = new FormData(form);

   if (id != null) {
      formData.append('Codice', `${id}`);
   } else {
      event.preventDefault();
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
                     
							<div class="col" >Codice</div>
							<div class="col" >Nome</div>
							<div class="col" >Cognome</div>
							<div class="col" >Nazione</div>
							<div class="col" >Data Nascita</div>
							<div class="col" >Vivo/Morto</div>
							<div class="col" >Data Morte</div>
                     
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

function generaRighe(data, id) {
   let righe = '';
   let riga = '';
   let i = 0;
   let classRiga = 'class="riga"';

   data.forEach(data => {
      if (i >= (pagina - 1) * 25 && i < pagina * 25) {
         if (data.dataMorte == null) {
            riga = `
                   <li ${classRiga}>
                        
                        <div class="col"><a href="Opera.php?id_1=${data.codice}">${data.codice}</a></div>
                        <div class="col"> ${data.nome}</div>
                        <div class="col">${data.cognome}  </div>
                        <div class="col"> ${data.nazione}</div>
                        <div class="col">${data.dataNascita}  </div>
                        <div class="col">${data.tipo} </div>
                        <div class="col">--------------</div>
                        
                     </li>
                   `;

         } else {
            riga = `
                   <li ${classRiga}>
                        
                        <div class="col"><a href="Opera.php?id_1=${data.codice}">${data.codice}</a></div>
                        <div class="col"> ${data.nome}</div>
                        <div class="col">${data.cognome}  </div>
                        <div class="col"> ${data.nazione}</div>
                        <div class="col">${data.dataNascita}  </div>
                        <div class="col">${data.tipo} </div>
                        <div class="col"> ${data.dataMorte}</div>
                        
                     </li>
                   `;
         }
         righe += riga;
      }
      i++;
   });
   numeroRighe = i;
   return righe;
}

function canc() {
   event.preventDefault();
   document.getElementById('n').value = "";
   document.getElementById('cg').value = "";
   document.getElementById('na').value = "";
   document.getElementById('dn').value = "";
   document.getElementById('m1').value = "";
   document.getElementById('VivoMorto').value = "";
}
