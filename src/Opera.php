<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Opera</title>
	<link rel="stylesheet" href="../css/style.css">
	<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
	<link rel="stylesheet" href="../font-awesome/css/font-awesome.min.css">
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
			<h1>OperaDb</h1>
		</header>

		<div class="filtro">
			
			<input type="text" name="filtroRicerca" id="autore" class="myInput" placeholder="autore">
			<input type="text" name="filtroRicerca" id="titolo" class="myInput" placeholder="titolo">
			<input type="text" name="filtroRicerca" id="annoAcquisto" class="myInput" placeholder="anno di acquisto">
			<input type="text" name="filtroRicerca" id="annoRealizzazione" class="myInput" placeholder="anno di realizzazione">
			<input type="text" name="filtroRicerca" id="tipo" class="myInput" placeholder="tipo">
			<input type="text" name="filtroRicerca" id="sala" class="myInput" placeholder="numero sala">

			<input type="submit" class="invio" value="Cerca" />
		</div>

		<div class="contenuto" id="contenuto">
			<?php
			try {
				// query
				$result = $conn->query("SELECT * FROM opera");
			} catch (PDOException $e) {
				echo "DB Error on Query: " . $e->getMessage();
				$error = true;
			}
			if (!$error) {
			?>
				<ul class="tabella">
					<nav class="fissa">
						<li class="testata">
							<div class="col">Codice </div>
							<div class="col">Autore </div>
							<div class="col">Titolo </div>
							<div class="col">Anno acquisto </div>
							<div class="col">Anno realizzazione </div>
							<div class="col">Tipo </div>
							<div class="col">Esposta in sala </div>
						</li>
					</nav>
					<?php
					foreach ($result as $riga) {
						$classRiga = 'class="riga"';
					?>

						<li <?php echo $classRiga; ?>>
							<div class="col"> <?php echo $riga["codice"]; ?> </div>
							<div class="col"> <?php echo $riga["autore"]; ?> </div>
							<div class="col"> <?php echo $riga["titolo"]; ?> </div>
							<div class="col"> <?php echo $riga["annoAcquisto"]; ?> </div>
							<div class="col"> <?php echo $riga["annoRealizzazione"]; ?> </div>
							<div class="col"> <?php echo $riga["tipo"]; ?> </div>
							<div class="col"> <?php echo $riga["espostaInSala"]; ?> </div>
						</li>
					<?php
					}
					?>
				</ul>
			<?php
			}
			?>

			<a id="tornaSu"><i class="fa fa-arrow-circle-up fa-2x" aria-hidden="true"></i></a>

			<script src="../js/arrowUp.js"></script>
		</div>
	</div>
</body>

</html>