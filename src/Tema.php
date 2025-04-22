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
			<h1>TemaDb</h1>
		</header>

		<div class="filtro">
			<p3>Filtro Ricerca</p3>
			<input type="text" name="filtroRicerca" class="myInput">
		</div>

		<div class="contenuto">
			<?php
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
			?>

		</div>

	</div>
</body>

</html>