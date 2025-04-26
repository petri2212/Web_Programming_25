// Controlla se esiste l'elemento con id 'output'
const outputElement = document.getElementById('contenuto');

if (outputElement) {
  const params = new URLSearchParams(window.location.search);
  const nome = params.get('nome'); // Prende il valore di "nome"

  if (nome) {
    outputElement.textContent = `Ciao, ${nome}!`;
  } /*else {
    // Se non c'è il nome, pulisco l'URL
    window.history.replaceState({}, document.title, window.location.pathname);
  }*/
}

// Se non esiste 'output', non fa nulla (pagina 1 è tranquilla)