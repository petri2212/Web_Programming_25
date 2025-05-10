<?php
require_once('../config.php');

$Codice = $connessione->real_escape_string($_POST['codiceUpdate'] ?? null);
$Autore = $connessione->real_escape_string($_POST['autoreUpdate'] ?? null);
$Titolo = $connessione->real_escape_string($_POST['titoloUpdate'] ?? null);
$AnnoAquisto = $connessione->real_escape_string($_POST['AnnoAquistoUpdate'] ?? null);
$AnnoRealizzazione = $connessione->real_escape_string($_POST['AnnoRealizzazioneUpdate'] ?? null);
$Tipo = $connessione->real_escape_string($_POST['tipoUpdate'] ?? null);
$NumeroSala = $connessione->real_escape_string($_POST['NumeroSalaUpdate'] ?? null);

$sql = "UPDATE opera SET ";
$count = 0;

if ($Autore != NULL && $count == 0) {
    $sql .= "autore = '$Autore'";
    $count++;
} elseif ($Autore != NULL) {
    $sql .= ", autore = '$Autore'";
    $count++;
}

if (!($Titolo == NULL) && $count == 0) {
    $sql .= "titolo = '$Titolo'";
    $count++;
} elseif ($Titolo != NULL) {
    $sql .= ", titolo = '$Titolo'";
}

if (!($AnnoAquisto == NULL) && $count == 0) {
    $sql .= "annoAcquisto = '$AnnoAquisto' ";
    $count++;
} elseif ($AnnoAquisto != NULL) {
    $sql .= ", annoAcquisto = '$AnnoAquisto' ";
}

if (!($AnnoRealizzazione == NULL) && $count == 0) {
    $sql .= "annoRealizzazione = '$AnnoRealizzazione' ";
    $count++;
} elseif ($AnnoRealizzazione != NULL) {
    $sql .= ", annoRealizzazione = '$AnnoRealizzazione' ";
}

if (!($Tipo == NULL) && $count == 0) {
    $sql .= "tipo = '$Tipo'";
    $count++;
} elseif ($Tipo != NULL) {
    $sql .= ", tipo = '$Tipo'";
}

if (!($NumeroSala == NULL) && $count == 0) {
    $sql .= "espostaInSala = '$NumeroSala'";
    $count++;
} elseif ($NumeroSala != NULL) {
    $sql .= ", espostaInSala = '$NumeroSala'";
}

$sql .= "WHERE codice = '$Codice';";
$stmt = $connessione->prepare($sql);
$stmt->execute();
if(!$stmt->execute()){
    echo "Aggiornamento dei dati riuscito!";
}else{
    echo "Aggiornamento dei dati fallito!";
}

?>