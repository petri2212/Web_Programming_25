<?php
require_once('config.php');

$Codice = $connessione->real_escape_string($_POST['Codice'] ?? null);

$descrizione = $connessione->real_escape_string($_POST['Descrizione'] ?? null);

$sql = "SELECT COUNT(temaSala) AS conteggio, codice, descrizione  FROM tema JOIN sala ON tema.codice = sala.temaSala ";//WHERE descrizione = "Arte classica" WHERE  descrizione = $descrizione
$count = 0;
//SELECT COUNT(temaSala)AS conteggio, numero,descrizione FROM `tema` FULL JOIN `sala`ON codice=temaSala GROUP BY codice;

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
    $sql .= "AND codice = '$Codice'";
    $count++;
}

$sql .= " GROUP BY codice";

$stmt = $connessione->prepare($sql);
$stmt->execute();
$result = $stmt->get_result();

$data = [];
while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
     $tep;
        $tmp['codice'] = $row['codice'];
        $tmp['descrizione'] = $row['descrizione'];
        $tmp['conteggio'] = $row['conteggio'];
        array_push($data, $tmp);
}
 echo json_encode($data);
/*
if ($result = $connessione->query($sql)) {
    $data = [];
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $tep;
        $tmp['codice'] = $row['codice'];
        $tmp['descrizione'] = $row['descrizione'];
        $tmp['conteggio'] = $row['conteggio'];
        array_push($data, $tmp);

    }
    echo json_encode($data);
}*/

$count = 0;
?>