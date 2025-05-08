<?php
require_once('config.php');

$Codice = $connessione->real_escape_string($_POST['Codice'] ?? null);
$Nome = $connessione->real_escape_string($_POST['Nome'] ?? null);
$Cognome = $connessione->real_escape_string($_POST['Cognome'] ?? null);
$Nazione = $connessione->real_escape_string($_POST['Nazione'] ?? null);
$DataNascita = $connessione->real_escape_string($_POST['DataNascita'] ?? null);
$tipo = $connessione->real_escape_string($_POST['VivoMorto'] ?? null);
$DataMorte = $connessione->real_escape_string($_POST['DataMorte'] ?? null);

$sql = "SELECT * FROM autore ";
$count = 0;

if ($Nome != NULL && $count == 0) {
    $sql .= "WHERE nome LIKE '%" . $Nome . "%'";
    $count++;
} elseif ($Nome != NULL) {
    $sql .= "AND nome LIKE '%" . $Nome . "%'";
    $count++;
}

if (!($Cognome == NULL) && $count == 0) {
    $sql .= "WHERE cognome LIKE '%" . $Cognome . "%'";
    $count++;
} elseif ($Cognome != NULL) {
    $sql .= "AND cognome LIKE '%" . $Cognome . "%'";
}

if (!($Nazione == NULL) && $count == 0) {
    $sql .= "WHERE nazione LIKE '%" . $Nazione . "%'";
    $count++;
} elseif ($Nazione != NULL) {
    $sql .= "AND nazione LIKE '%" . $Nazione . "%'";
}
if (!($DataNascita == NULL) && $count == 0) {
    $sql .= "WHERE dataNascita = '$DataNascita' ";
    $count++;
} elseif ($DataNascita != NULL) {
    $sql .= "AND dataNascita = '$DataNascita' ";
}

if (!($tipo == NULL) && $count == 0) {
    $sql .= "WHERE tipo = '$tipo'";
    $count++;
} elseif ($tipo != NULL) {
    $sql .= "AND tipo = '$tipo'";
}

if (!($DataMorte == NULL) && $count == 0) {
    $sql .= "WHERE dataMorte = '$DataMorte' ";
    $count++;
} elseif ($DataMorte != NULL) {
    $sql .= "AND dataMorte = '$DataMorte' ";
}

//$sql = "SELECT * FROM autore WHERE tipo = 'vivo'";


/**
 * 
 * 
 * 
 */
if ($Codice != NULL && $count == 0) {
    $sql .= "WHERE codice = '$Codice'";
    $count++;
} elseif ($Codice != NULL) {
    $sql .= "AND codice = '$Codice '";
    $count++;
}



if ($result = $connessione->query($sql)) {
    $data = [];
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $tep;
        $tmp['codice'] = $row['codice'];
        $tmp['nome'] = $row['nome'];
        $tmp['cognome'] = $row['cognome'];
        $tmp['nazione'] = $row['nazione'];
        $tmp['dataNascita'] = $row['dataNascita'];
        $tmp['tipo'] = $row['tipo'];
        $tmp['dataMorte'] = $row['dataMorte'];

        array_push($data, $tmp);

    }
    echo json_encode($data);
}

$count = 0;

?>