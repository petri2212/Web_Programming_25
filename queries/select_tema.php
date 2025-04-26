<?php
require_once('config.php');

$descrizione = $connessione->real_escape_string($_POST['Descrizione']);

$sql = "SELECT * FROM tema WHERE descrizione LIKE '%" . $descrizione . "%' ";//WHERE descrizione = "Arte classica" WHERE  descrizione = $descrizione

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










?>