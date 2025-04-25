<?php
require_once('config.php');

//$descrizione = $connessione ->real_escape_string($_POST['Descrizione']);
$Nome = $connessione ->real_escape_string($_POST['Nome'] );
$Superficie = $connessione ->real_escape_string($_POST['Superficie'] );
$Tema_s = $connessione ->real_escape_string($_POST['Tema_Sala'] );

$Tema_s  = NULL;
/*
if($Superficie == ''){
    $sql = "SELECT * FROM sala  ";
}else{

    $sql = "SELECT * FROM sala WHERE superficie = '$Superficie' AND nome LIKE '%" . $Nome ."%' ";
}
    */

       // $sql = "SELECT * FROM sala WHERE temaSala = $Tema_s AND superficie = '$Superficie' AND nome LIKE '%" . $Nome ."%'";
//$sql = "SELECT * FROM sala WHERE ($Tema_s IS NULL OR temaSala = $Tema_s";


   //$sql = "SELECT * FROM sala WHERE temaSala = '$Tema_s' AND nome LIKE '%" . $Nome ."%' ";
   //$sql = "SELECT * FROM sala WHERE  temaSala = $Tema_s  ";


   

//$sql = "SELECT * FROM sala WHERE superficie = '$Superficie' ";//WHERE descrizione = "Arte classica" WHERE  descrizione = $descrizione
//nome LIKE '%" . $Nome ."%' AND
if ($result = $connessione->query($sql)) {
    $data = [];
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
        $tep;
        $tmp['numero'] = $row['numero'];
        $tmp['nome'] = $row['nome'];
        $tmp['superficie'] = $row['superficie'];
        $tmp['temaSala'] = $row['temaSala'];
        array_push($data, $tmp);

    }
    echo json_encode($data);
}










?>