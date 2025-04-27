
let informazioni;
let contenuto = document.getElementById("contenuto");


function cerca() {
   window.history.replaceState({}, document.title, window.location.pathname);
   event.preventDefault();

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
         console.log('dati ricevuti: ', data);
         let tabella = ` 

            <ul class="tabella">
					<nav class="fissa">
					   <li class="testata">
							<div class="col">Codice </div>
							<div class="col">Nome </div>
							<div class="col">Cognome </div>
							<div class="col">Nazione </div>
							<div class="col">Data Nascita </div>
							<div class="col">Vivo/Morto </div>
							<div class="col">Data Morte </div>
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
      if (data.dataMorte == null) {
         riga = `
                <li ${classRiga}>
							<div class="col">${data.codice}</div>
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
							<div class="col">${data.codice}</div>
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
   });
   return righe;

}

function canc(){
   event.preventDefault();

   document.getElementById('n').value = "";
   document.getElementById('cg').value = "";
   document.getElementById('na').value = "";
   document.getElementById('dn').value = "";
   document.getElementById('m1').value = "";
   document.getElementById('VivoMorto').value = "";
}