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

		<header>
			<h1>AutoreDb</h1>
		</header>

		<div class="filtro">
			<p3>Filtro Ricerca</p3>
			<input type="text" name="filtroRicerca" id="codice" class="myInput" placeholder="codice">
			<input type="text" name="filtroRicerca" id="nome" class="myInput" placeholder="nome">
			<input type="text" name="filtroRicerca" id="cognome" class="myInput" placeholder="cognome">
			<input type="text" name="filtroRicerca" id="nazione" class="myInput" placeholder="nazione">
			<input type="text" name="filtroRicerca" id="dataNascita" class="myInput" placeholder="data di nascita">
			<input type="text" name="filtroRicerca" id="vivoMorto" class="myInput" placeholder="vivo o morto">
			<input type="text" name="filtroRicerca" id="dataMorte" class="myInput" placeholder="data di nascita">
		</div>


		<div class="contenuto">
			<?php
			try {
				// query
				$result = $conn->query("SELECT * FROM autore");
			} catch (PDOException $e) {
				echo "DB Error on Query: " . $e->getMessage();
				$error = true;
			}
			if (!$error) {
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
							<td> <?php echo $riga["nome"]; ?> </td>
							<td> <?php echo $riga["cognome"]; ?> </td>
							<td> <?php echo $riga["nazione"]; ?> </td>
							<td> <?php echo $riga["dataNascita"]; ?> </td>
							<td> <?php echo $riga["tipo"]; ?> </td>
							<td> <?php if($riga["dataMorte"] != null){
								echo $riga["dataMorte"]; 
								}else{
									echo "--------------";}
									?> 
							</td>
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