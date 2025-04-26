
let informazioni;
let contenuto = document.getElementById("contenuto");


function cerca() {
   event.preventDefault();

   const form = document.querySelector("#form");
   const formData = new FormData(form);
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
                     <div class="col"> ${data.codice} </div>
                     <div class="col"> ${data.descrizione} </div>
                </li>
                `;
      righe += riga;
   });
   return righe;

}








