<?php
require_once('config.php');

$Codice = $connessione->real_escape_string($_POST['Codice'] ?? null);
$Nome = $connessione->real_escape_string ($_POST['Nome'] ?? null);
$Cognome = $connessione->real_escape_string($_POST['Cognome'] ?? null);
$Nazione = $connessione->real_escape_string($_POST['Nazione'] ?? null);
$DataNascita = $connessione->real_escape_string($_POST['DataNascita'] ?? null);
$tipo = $connessione->real_escape_string($_POST['VivoMorto'] ?? null);
$DataMorte = $connessione->real_escape_string($_POST['DataMorte'] ?? null);

$sql = "SELECT autore.codice, nome, cognome, nazione,dataNascita, autore.tipo, dataMorte, COUNT(opera.codice) AS num_opere FROM autore JOIN opera ON autore.codice = opera.autore ";
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
    $sql .= "WHERE autore.tipo = '$tipo' ";
    $count++;
} elseif ($tipo != NULL) {
    $sql .= "AND autore.tipo = '$tipo'";
}

if (!($DataMorte == NULL) && $count == 0) {
    $sql .= "WHERE dataMorte = '$DataMorte' ";
    $count++;
} elseif ($DataMorte != NULL) {
    $sql .= "AND dataMorte = '$DataMorte' ";
}
if ($Codice != NULL && $count == 0) {
    $sql .= "WHERE autore.codice = '$Codice'";
    $count++;
} elseif ($Codice != NULL) {
    $sql .= "AND autore.codice = '$Codice '";
    $count++;
}


$sql .= " GROUP BY autore.codice";

$stmt = $connessione->prepare($sql);
$stmt->execute();
$result = $stmt->get_result();

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
        $tmp['num_opere'] = $row['num_opere'];

        array_push($data, $tmp);
}
 echo json_encode($data);
/*
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
        $tmp['num_opere'] = $row['num_opere'];

        array_push($data, $tmp);

    }
    echo json_encode($data);
}*/

$count = 0;

?>