<?php
require_once('../config.php');

$Opera = $connessione->real_escape_string($_POST['codiceUpdate'] ?? null);
$NomeAutore = $connessione->real_escape_string($_POST['autoreUpdate'] ?? null);
$Titolo = $connessione->real_escape_string($_POST['titoloUpdate'] ?? null);
$AnnoAquisto = $connessione->real_escape_string($_POST['AnnoAquistoUpdate'] ?? null);
$AnnoRealizzazione = $connessione->real_escape_string($_POST['AnnoRealizzazioneUpdate'] ?? null);
$Tipo = $connessione->real_escape_string($_POST['tipoUpdate'] ?? null);
$NomeSala = $connessione->real_escape_string($_POST['NumeroSalaUpdate'] ?? null);


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


//Taglio Id Autore
$Autore = substr($NomeAutore, 0, strpos($NomeAutore, '-') - 1);

//Ricavo Id Sala
$queryIdSala = "SELECT numero FROM sala WHERE nome = '$NomeSala';";

if ($result = $connessione->query($queryIdSala)) {
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $NumeroSala = $row['numero'];
    }
}


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

if(!$stmt->execute()){
    echo "Aggiornamento dei dati riuscito!";
}else{
    echo "Aggiornamento dei dati fallito!";
}

?>