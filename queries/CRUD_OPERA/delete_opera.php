<?php
require_once('../config.php');

$Codice = $connessione->real_escape_string($_POST['codiceDelete'] ?? null);

$sql = "DELETE FROM opera WHERE codice = '448';";

if($connessione->query($sql) === true){
    echo "Eliminazione dei dati riuscita!";
}else{
    echo "Eliminazione dei dati fallita!";
}

?>