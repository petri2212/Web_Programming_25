const outputElement = document.getElementById('contenuto');

if (outputElement) {
   const params = new URLSearchParams(window.location.search);
   const id_1 = params.get('id_1'); // Prende il valore di "id_1"
   const id_2 = params.get('id_2'); // Prende il valore di "id_2"
   const formData = new FormData();

   if (id_1) {
      cerca(id_1, id_2);
   } else if (id_2) {
      cerca(id_1, id_2);
   }

}

