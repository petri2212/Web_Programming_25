const outputElement = document.getElementById('contenuto');

if (outputElement) {
   const params = new URLSearchParams(window.location.search);
   const nome = params.get('nome'); // Prende il valore di "nome"
   const nome1 = params.get('nome1'); // Prende il valore di "nome1"
   const formData = new FormData();



   if (nome) {
      // Aggiungere una coppia chiave/valor 
      /*formData.append('Codice', `${nome}`);
      const obj = Object.fromEntries(formData);
      console.log(obj);*/
      cerca(nome, nome1);

   } else if (nome1) {
      cerca(nome, nome1);
   }

}

