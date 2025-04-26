<?php
require_once('../config.php');

$Autore = $connessione->real_escape_string($_POST['Autore'] ?? null);
$Titolo = $connessione->real_escape_string($_POST['Titolo'] ?? null);
$AnnoAquisto = $connessione->real_escape_string($_POST['AnnoAquisto'] ?? null);
$AnnoRealizzazione = $connessione->real_escape_string($_POST['AnnoRealizzazione'] ?? null);
$Tipo = $connessione->real_escape_string($_POST['Tipo'] ?? null);
$NumeroSala = $connessione->real_escape_string($_POST['NumeroSala'] ?? null);

$sql = "SELECT * FROM opera ";
$count = 0;

if ($Autore != NULL && $count == 0) {
    $sql .= "WHERE autore = '$Autore'";
    $count++;
} elseif ($Autore != NULL) {
    $sql .= "AND autore = '$Autore'";
    $count++;
}

if (!($Titolo == NULL) && $count == 0) {
    $sql .= "WHERE titolo LIKE '%" . $Titolo . "%'";
    $count++;
} elseif ($Titolo != NULL) {
    $sql .= "AND titolo LIKE '%" . $Titolo . "%'";
}

if (!($AnnoAquisto == NULL) && $count == 0) {
    $sql .= "WHERE annoAcquisto = '$AnnoAquisto' ";
    $count++;
} elseif ($AnnoAquisto != NULL) {
    $sql .= "AND annoAcquisto = '$AnnoAquisto' ";
}

if (!($AnnoRealizzazione == NULL) && $count == 0) {
    $sql .= "WHERE annoRealizzazione = '$AnnoRealizzazione' ";
    $count++;
} elseif ($AnnoRealizzazione != NULL) {
    $sql .= "AND annoRealizzazione = '$AnnoRealizzazione' ";
}

if (!($Tipo == NULL) && $count == 0) {
    $sql .= "WHERE tipo = '$Tipo'";
    $count++;
} elseif ($Tipo != NULL) {
    $sql .= "AND tipo = '$Tipo'";
}

if (!($NumeroSala == NULL) && $count == 0) {
    $sql .= "WHERE espostaInSala = '$NumeroSala'";
    $count++;
} elseif ($NumeroSala != NULL) {
    $sql .= "AND espostaInSala = '$NumeroSala'";
}


if ($result = $connessione->query($sql)) {
    $data = [];
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $tep;
        $tmp['codice'] = $row['codice'];
        $tmp['autore'] = $row['autore'];
        $tmp['titolo'] = $row['titolo'];
        $tmp['annoAcquisto'] = $row['annoAcquisto'];
        $tmp['annoRealizzazione'] = $row['annoRealizzazione'];
        $tmp['tipo'] = $row['tipo'];
        $tmp['espostaInSala'] = $row['espostaInSala'];

        array_push($data, $tmp);

    }
    echo json_encode($data);
}

$count = 0;

?>