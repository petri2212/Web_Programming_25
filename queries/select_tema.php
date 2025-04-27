<?php
require_once('config.php');

$Codice = $connessione->real_escape_string($_POST['Codice'] ?? null);

$descrizione = $connessione->real_escape_string($_POST['Descrizione'] ?? null);

$sql = "SELECT * FROM tema ";//WHERE descrizione = "Arte classica" WHERE  descrizione = $descrizione
$count = 0;

if (!($descrizione == NULL) && $count == 0) {
    $sql .= "WHERE descrizione LIKE '%" . $descrizione . "%'";
    $count++;
} elseif ($descrizione != NULL) {
    $sql .= "AND descrizione LIKE '%" . $descrizione . "%'";
}

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
        $tmp['descrizione'] = $row['descrizione'];
        array_push($data, $tmp);

    }
    echo json_encode($data);
}

$count = 0;



?>