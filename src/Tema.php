<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Tema</title>
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

		<header>
			<h1>TemaDb</h1>
		</header>

		<div class="filtro">
		<!-- <form name="myform" method="POST">
		    <input id="n1" name="name" type="text"/>
		    <input type="submit" value="Cerca"/>
		  </form> -->	
		
		  <form name="myform" method="POST">
			<input type="text" name="Descrizione" id="n1" class="myInput" placeholder="Descrizione">
			<input type="submit" value="Cerca" id="idInvio"/>
			</form>
		</div>

		<div class="contenuto">
			<?php
	if(count($_POST)==0 || $_POST["Descrizione"]=="")
	{           			
		try {
			// query
			$result = $conn->query("SELECT * FROM tema");
		} catch (PDOException $e) {
			echo "DB Error on Query: " . $e->getMessage();
			$error = true;
		}
		if (!$error) {
			?>
			<table class="tabella">
				<tr class="testata">
					<th>Codice </th>
					<th>Descrizione </th>
				</tr>
				<?php
				$i = 0;
				foreach ($result as $riga) {
					$i = $i + 1;
					$classRiga = 'class="rigaDispari"';
					if ($i % 2 == 0) {
						$classRiga = 'class="rigaPari"';
					}
					?>
					<tr <?php echo $classRiga; ?>>
							<td> <?php echo $riga["codice"]; ?> </td>
							<td> <?php echo $riga["descrizione"]; ?> </td>
						</tr>

					
					<?php
				}
				?>
			</table>

				<?php
			}
		}  else {  
			$name=$_POST["Descrizione"];
			$query="SELECT * FROM tema " .
							"WHERE descrizione LIKE '%" . $name ."%' ";
		  echo "<p>Query: " . $query . "</p>";
			try {
				$result = $conn->query($query);
			} catch(PDOException$e) {
				echo "DB Error on Query: " . $e->getMessage();
				$error = true;
			}
			if(!$error)
			{           
	?>
					<table class="tabella">
						<tr class="testata">
							<th>Descrizione che contiene: <?php echo $name; ?> </th> 
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
							<td > <?php echo $riga["descrizione"]; ?> </td> 
						</tr>
	<?php } ?>
				</table>
			<?php }  } ?>


		</div>

	</div>
</body>

</html>