
let informazioni;
let contenuto = document.getElementById("contenuto");
//devo fare un controllo aggiuntivo perche window.reload quando la pagina si mostra mi 
// cancella id e id1 quindi devo controllare solo quando si apre per la prima volta
const params = new URLSearchParams(window.location.search);
  const nome = params.get('nome'); // Prende il valore di "nome"
  const nome1 = params.get('nome1'); // Prende il valore di "nome"
if(nome == null && nome1 == null){
window.onload = function() {
   cerca();
};
}


function cerca(id,id1) {
   

   const form = document.querySelector("#form");
   const formData = new FormData(form);
   
   if(id != null){
      formData.append('Autore', `${id}`);
   }else if(id1 != null){
      formData.append('NumeroSala', `${id1}`);
   }else{
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

function canc(){
   event.preventDefault();

   document.getElementById('a1').value = "";
   document.getElementById('t1').value = "";
   document.getElementById('aa').value = "";
   document.getElementById('ar').value = "";
   document.getElementById('Tipo').value = "";
   document.getElementById('NumeroSala').value = "";
}