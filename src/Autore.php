<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Autore</title>
	<link rel="stylesheet" href="../css/style.css">
	<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
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
			<input type="text" name="filtroRicerca" id="codice" class="myInput" placeholder="codice">
			<input type="text" name="filtroRicerca" id="nome" class="myInput" placeholder="nome">
			<input type="text" name="filtroRicerca" id="cognome" class="myInput" placeholder="cognome">
			<input type="text" name="filtroRicerca" id="nazione" class="myInput" placeholder="nazione">
			<input type="text" name="filtroRicerca" id="dataNascita" class="myInput" placeholder="data di nascita">
			<input type="text" name="filtroRicerca" id="vivoMorto" class="myInput" placeholder="vivo o morto">
			<input type="text" name="filtroRicerca" id="dataMorte" class="myInput" placeholder="data di morte">

			<input type="submit" class="invio" value="Cerca" />
		</div>



		<div class="contenuto" id="contenuto">
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
				<ul class="tabella">
					<nav class="fissa">
						<li class="testata">
							<div class="col">Codice </div>
							<div class="col">Nome </div>
							<div class="col">Cognome </div>
							<div class="col">Nazione </div>
							<div class="col">Data Nascita </div>
							<div class="col">Vivo/Morto </div>
							<div class="col">Data Morte </div>
						</li>
					</nav>

					<?php
					$i = 0;
					foreach ($result as $riga) {
						$classRiga = 'class="riga"';
					?>

						<li <?php echo $classRiga; ?>>
							<div class="col"><a href=""><?php echo $riga["codice"]; ?></a></div>
							<div class="col"> <?php echo $riga["nome"]; ?> </div>
							<div class="col"> <?php echo $riga["cognome"]; ?> </div>
							<div class="col"> <?php echo $riga["nazione"]; ?> </div>
							<div class="col"> <?php echo $riga["dataNascita"]; ?> </div>
							<div class="col"> <?php echo $riga["tipo"]; ?> </div>
							<div class="col"> <?php if ($riga["dataMorte"] != null) {
													echo $riga["dataMorte"];
												} else {
													echo "--------------";
												}
												?>
							</div>
						</li>
					<?php
					}
					?>
				</ul>
			<?php
			}
			?>
			<a id="tornaSu"><i class="fa fa-arrow-circle-up fa-2x" aria-hidden="true"></i></a>

			<script src="/Web_Programming_25/js/arrowUp.js"></script>

		</div>

	</div>


</body>

</html>