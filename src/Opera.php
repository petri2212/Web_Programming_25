<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Opera</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <div class="griglia">
<?php	
    include 'footer.html';
	include 'nav.html';
?>
<?php	
	// possiamo includere anche pezzi di php
	include 'connect.php';
?>
        <header>OperaDb</header>

        <div class="filtro">Filtro Ricerca</div>
        <div class="contenuto">
<?php
	try {     
		// query
		$result = $conn->query("SELECT * FROM opera");
	} catch(PDOException$e) {
		echo "DB Error on Query: " . $e->getMessage();
		$error = true;
	}
	if(!$error)
	{           
?>            
  <table class="tabella">
					<tr class="testata">
						<th>Codice </th> 
						<th>Autore </th> 
                        <th>titolo </th> 
                        <th>Anno Acquisto </th> 
                        <th>Anno realizzazione </th> 
                        <th>Tipo</th> 
                        <th>Esposta in sala </th> 
					</tr>
<?php
	$i=0;
	foreach($result as $riga) {
		$i=$i+1;
		$classRiga='class="rigaDispari"';
		if($i%2==0) {
			$classRiga='class="rigaPari"';
		}
?>	
						
					<tr <?php	echo $classRiga; ?> > 
						<td > <?php echo $riga["codice"]; ?> </td>
						<td > <?php echo $riga["autore"]; ?> </td>
                        <td > <?php echo $riga["titolo"]; ?> </td>
						<td > <?php echo $riga["annoAcquisto"]; ?> </td> 
                        <td > <?php echo $riga["annoRealizzazione"]; ?> </td>
						<td > <?php echo $riga["tipo"]; ?> </td>  
                        <td > <?php echo $riga["espostaInSala"]; ?> </td>  
					</tr>
<?php
	}
?>  
   	</table>
<?php
}
?> 
       </div> 
    </div>
</body>

</html>