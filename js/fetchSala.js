
let informazioni;
let contenuto = document.getElementById("contenuto");


function cerca() {
   event.preventDefault();

   const form = document.querySelector("#form");
   const formData = new FormData(form);
   const obj = Object.fromEntries(formData)
   console.log(obj)
   console.log(formData)

   /*  ricordati di fare il reset del forum dopo l'utilizzo
   let form1= document.getElementById("form")
   form1.reset()
*/




   //console.log(formData);

//,body: obj
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
                    <table class="tabella">
					<tr class="testata">
						<th>Codice </th>
						<th>Descrizione </th>
            <th>Superficie </th>
						<th>Tema Sala </th>
					</tr>
                        ${generaRighe(data)}
                    </table>
                    `;
         //let tabellaContainer = document.querySelector("#pippo");

          contenuto.innerHTML = tabella;
        // contenuto.insertAdjacentHTML('beforeend', tabella);
         //tabellaContainer.insertAdjacentHTML('beforeend', tabella);

         //  tabellaContainer.in
         //tabellaContainer.innerHTML(tabella)
      })
      .catch((error) => {
         console.log('errore: ', error);

         /*
                             .then(response => response.text())
           .then(data => {     try {
             console.log(JSON.parse(data));
           } catch (e) {
             console.error('Error parsing JSON:', data);
           }   
         */

      });
}

function generaRighe(data) {
   let righe = '';
   let classRiga = '';
   let i = 0;
   data.forEach(data => {
      i = i + 1;
      classRiga = 'class="rigaDispari"';
      if (i % 2 == 0) {
         classRiga = 'class="rigaPari"';
      }
      let riga = `
                <tr ${classRiga}>
                     <td> ${data.numero} </td>
                     <td> ${data.nome} </td>
                     <td> ${data.superficie} </td>
                     <td> ${data.temaSala} </td>
                </tr>
                `;
      righe += riga;
   });
   return righe;

}