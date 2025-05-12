<?php
require_once('../config.php');

$Opera = $connessione->real_escape_string($_POST['codiceDelete'] ?? null);

//Ricavo Id Opera
$TitoloOpera = substr($Opera, 0, strpos($Opera, '-') - 1);
$AutoreOpera = substr($Opera, strpos($Opera, '-') + 2);

$parti = explode(" ", $AutoreOpera);

$cognome = $parti[0];
$nome = $parti[1];

$queryIdOpera = "SELECT opera.codice AS codiceOpera FROM opera JOIN autore ON autore.codice = opera.autore WHERE opera.titolo = '$TitoloOpera' AND autore.nome = '$nome' AND autore.cognome = '$cognome';";

if ($result = $connessione->query($queryIdOpera)) {
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $Codice = $row['codiceOpera'];
    }
}

$sql = "DELETE FROM opera WHERE codice = '$Codice';";

$stmt = $connessione->prepare($sql);
$stmt->execute();
if(!$stmt->execute()){
    echo "Eliminazione dei dati riuscita!";
}else{
    echo "Eliminazione dei dati fallita!";
}

/*
if($connessione->query($sql) === true){
    echo "Eliminazione dei dati riuscita!";
}else{
    echo "Eliminazione dei dati fallita!";
}*/

?>