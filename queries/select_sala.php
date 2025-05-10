<?php
require_once('config.php');
$Codice = $connessione->real_escape_string($_POST['Codice'] ?? null);

$Nome = $connessione->real_escape_string($_POST['Nome'] ?? null);
$Superficie = $connessione->real_escape_string($_POST['Superficie'] ?? null);
$Tema_s = $connessione->real_escape_string($_POST['Tema_Sala'] ?? null);

$sql = "SELECT numero, nome, superficie, temaSala, descrizione, COUNT(espostaInSala) AS Quadri_in_sala FROM sala JOIN tema ON codice = temaSala JOIN `opera` ON sala.numero = opera.espostaInSala ";
$count = 0;

if ($Tema_s != NULL && $count == 0) {
    $sql .= "WHERE descrizione LIKE '%" . $Tema_s . "%'";
    $count++;
} elseif ($Tema_s != NULL) {
    $sql .= "AND descrizione LIKE '%" . $Tema_s . "%'";
    $count++;
}

if (!($Nome == NULL) && $count == 0) {
    $sql .= "WHERE nome LIKE '%" . $Nome . "%'";
    $count++;
} elseif ($Nome != NULL) {
    $sql .= "AND nome LIKE '%" . $Nome . "%'";
}

if (!($Superficie == NULL) && $count == 0) {
    $sql .= "WHERE superficie = '$Superficie'";
    $count++;
} elseif ($Superficie != NULL) {
    $sql .= "AND superficie = '$Superficie'";
}


if ($Codice != NULL && $count == 0) {
    $sql .= "WHERE numero = '$Codice'";
    $count++;
} elseif ($Codice != NULL) {
    $sql .= "AND numero = '$Codice '";
    $count++;
}

$sql .= " GROUP BY numero";


if ($result = $connessione->query($sql)) {
    $data = [];
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $tep;
        $tmp['numero'] = $row['numero'];
        $tmp['nome'] = $row['nome'];
        $tmp['superficie'] = $row['superficie'];
        $tmp['temaSala'] = $row['temaSala'];
        $tmp['descrizione'] = $row['descrizione'];
        $tmp['Quadri_in_sala'] = $row['Quadri_in_sala'];
        array_push($data, $tmp);


    }
    echo json_encode($data);
}

$count = 0;

?>