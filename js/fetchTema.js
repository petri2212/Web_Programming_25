
let informazioni;
let contenuto = document.getElementById("contenuto");


const params = new URLSearchParams(window.location.search);
const nome = params.get('nome'); // Prende il valore di "nome"
const nome1 = params.get('nome1'); // Prende il valore di "nome"
if (nome == null && nome1 == null) {
   window.onload = function () {
      cerca();
   };
}





function cerca(id) {
   window.history.replaceState({}, document.title, window.location.pathname);
   // event.preventDefault();

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
						   <div class="col">Codice </div>
						   <div class="col">Descrizione </div>
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
                     <div class="col"> <a href="Sala.php?nome1=${data.codice}">${data.codice} </a></div>
                     <div class="col"> ${data.descrizione} </div>
                </li>
                `;
      righe += riga;
   });
   return righe;

}

function canc() {
   event.preventDefault();

   document.getElementById('n1').value = "";
}






