var selectors = { 
    area: "#contenuto",
    pulsanteInvio: "#idInvio",
    descrizione: "#Descrizione",
  };

// appende la lista dei risultati nel HTML preposto
function MostraLista( lista ) {
    var area = $(selectors.area);
    area.html("<p>Trovati " + lista.list.length + " esseri</p>");
 
    var i;
    for( i=0; i < lista.list.length; i++) {
       $("<div>" + (i+1) + ". " + 
                                 lista.list[i].nome + " " + 
                                 lista.list[i].cognome +
           "</div>").appendTo(selectors.area);
    }
 }

  // non dovrebbe mai essere eseguita... ma in caso...
function MostraErrore( errorThrown ) {
    var area = $(selectors.area);
    area.html("<p>Spiacenti, errore rilevato: " + errorThrown + "</p>");
 }
 
 // gestione del caso di successo 
 var success = function ( data, textStatus, jqXHR ) {
    MostraLista( data );
 };
 
 // gestione del caso di fallimento
 var failure = function( jqXHR, textStatus, errorThrown ) {
    MostraErrore( errorThrown );
 };

 /* generazione di un parte della query 
function AppendToQuery( oldQuery, name, val ) {
    var query;
    if( oldQuery.length==0)
       query = "?";
    else
       query = oldQuery + "&";
 
    query += name + "=" + val;
    
    return query;
 }*/

// gestore dell'evento
var eventHandler = function ( event ) {
    event.preventDefault();
      //lettura dei parametri di ricerca
    var desc = $(selectors.descrizione).val();


    /*
    C'è un problema, ed è il seguente, visto che è un file js non mi va <?php ?> perciò la query che voglio fare non funziona, sarebbe
    da cercare su internet come faccio le query da js. Per ora implemento le query dentro Tema.php, non è bellissimo ma va bene cosi
    per ora.
    
    */







    
      // composizione della query
    var query = "";
 
         // definizione del codice da richiamare   
    var ajaxConf = {
       url: "../Tema.php" + query,
       type: "GET",
       dataType: "json"
    };
    
      // call ajax al php di interesse
    $.ajax( ajaxConf ).done( success ).fail( failure );   
 };


 var starter = function() {
    $(selectors.pulsanteInvio).bind("click", eventHandler);
 }
 
 $(starter);