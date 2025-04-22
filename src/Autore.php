<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autore</title>
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

<header>AutoreDb</header>

        <div class="filtro">Filtro Ricerca</div>
        <div class="contenuto">
<?php
	try {     
		// query
		$result = $conn->query("SELECT * FROM autore");
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
						<th>Nome </th> 
                        <th>Cognome </th> 
                        <th>Nazione </th> 
                        <th>Data Nascita </th> 
                        <th>VIVO/MORTO </th> 
                        <th>Data Morte </th> 
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
						<td > <?php echo $riga["nome"]; ?> </td>
                        <td > <?php echo $riga["cognome"]; ?> </td>
						<td > <?php echo $riga["nazione"]; ?> </td> 
                        <td > <?php echo $riga["dataNascita"]; ?> </td>
						<td > <?php echo $riga["tipo"]; ?> </td>  
                        <td > <?php echo $riga["dataMorte"]; ?> </td>  
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