
let informazioni;
let contenuto = document.getElementById("contenuto");


const params = new URLSearchParams(window.location.search);
const id_1 = params.get('id_1'); // Prende il valore di "id_1"
if (id_1 == null ) {
   window.onload = function () {
      cerca();
   };
}


function cerca(id) {
   window.history.replaceState({}, document.title, window.location.pathname);

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
   fetch('../queries/select_tema.php', {

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
                     <div class="col-1" ><button type="button" class="invio pag" id="pagSx" onclick="aggiornaPagina('-')"><</button></div>
						   <div class="col">Codice </div>
						   <div class="col">Descrizione </div>
                     <div class="col-1" ><button type="button" class="invio pag" id="pagDx" onclick="aggiornaPagina('+')">></button></div>
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
                     <div class="col-1"></div>
                     <div class="col"> <a href="Sala.php?id_2=${data.codice}">${data.codice} </a></div>
                     <div class="col"> ${data.descrizione} </div>
                     <div class="col-1"></div>
                </li>
                `;
      righe += riga;
      }
   i++;
   });
   numeroRighe = i;
   return righe;

}

function canc() {
   event.preventDefault();

   document.getElementById('n1').value = "";
}






