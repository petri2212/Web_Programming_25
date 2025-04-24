<?php
    require_once('config.php');

    $sql = 'SELECT * FROM tema ';//WHERE descrizione = "Arte classica"

    


if($result = $connessione -> query($sql)){
    $data= [];
    while($row = $result -> fetch_array(MYSQLI_ASSOC)) { 
        $tep ;
        $tmp ['codice'] = $row['codice'];
        $tmp ['descrizione'] = $row['descrizione'];
        array_push($data, $tmp);
    
    }
    echo json_encode($data);
}










?>