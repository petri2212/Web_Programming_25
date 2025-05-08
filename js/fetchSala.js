
let informazioni;
let contenuto = document.getElementById("contenuto");


const params = new URLSearchParams(window.location.search);
const id_1 = params.get('id_1'); // Prende il valore di "id_1"
const id_2 = params.get('id_2'); // Prende il valore di "id_2"
if (id_1 == null && id_2 == null) {
   window.onload = function () {
      cerca(event);
   };
}




function cerca(event, id_1, id_2) {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
   }
   window.history.replaceState({}, document.title, window.location.pathname);

   const form = document.querySelector("#form");
   const formData = new FormData(form);

   if (id_1 != null) {
      formData.append('Codice', `${id_1}`);
   } else if (id_2 != null) {
      formData.append('Tema_Sala', `${id_2}`);
   } 

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
         console.log('dati ricevuti: ', data);
         let tabella = ` 
            <ul class="tabella">
               <nav class="fissa">
					   <li class="testata">
                     
						   <div class="col">Codice </div>
						   <div class="col">Descrizione </div>
                     <div class="col">Superficie </div>
						   <div class="col">Tema Sala </div>
                     
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
                     
                     <div class="col"> <a href="Opera.php?id_2=${data.numero}">${data.numero} </a></div>
                     <div class="col"> ${data.nome} </div>
                     <div class="col"> ${data.superficie} </div>
                     <div class="col"><a href="Tema.php?id_1=${data.temaSala}"> ${data.temaSala} </a></div>
                     
                </tr>
                `;
      righe += riga;
      }
      i++;
   });
   numeroRighe = i;
   return righe;

}

function canc(event) {
   document.getElementById('n1').value = "";
   document.getElementById('s1').value = "";
   document.getElementById('t1').value = "";
   cerca(event);
}