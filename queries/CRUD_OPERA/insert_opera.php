<?php
require_once('../config.php');

$Autore = $connessione->real_escape_string($_POST['autoreSelect'] ?? null);
$Titolo = $connessione->real_escape_string($_POST['titoloSelect'] ?? null);
$AnnoAquisto = $connessione->real_escape_string($_POST['AnnoAquistoSelect'] ?? null);
$AnnoRealizzazione = $connessione->real_escape_string($_POST['AnnoRealizzazioneSelect'] ?? null);
$Tipo = $connessione->real_escape_string($_POST['tipoSelect'] ?? null);
$NumeroSala = $connessione->real_escape_string($_POST['NumeroSalaSelect'] ?? null);
$max_codice;

$query = "SELECT MAX(codice) AS max_codice FROM opera;";

if ($result = $connessione->query($query)) {
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {      
        $max_codice = $row['max_codice'];
    }
}
$max_codice++;

$sql = "INSERT INTO opera (codice,autore,titolo,annoAcquisto,annoRealizzazione,tipo,espostaInSala) VALUES ('$max_codice','$Autore','$Titolo','$AnnoAquisto', '$AnnoRealizzazione', '$Tipo', '$NumeroSala')";


if($connessione->query($sql) === true){
    echo "Inserimento riuscito!";
}else{
    echo "Inserimento fallito!";
}

?>
