<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Autore</title>
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
			<h1>Autore DB</h1>
		</header>

		<div class="filtro">
			<form id="form" name="myform" method="POST">
				<input type="text" name="Nome" id="n" class="myInput" placeholder="nome">
				<input type="text" name="Cognome" id="cg" class="myInput" placeholder="cognome">
				<input type="text" name="Nazione" id="n" class="myInput" placeholder="nazione">
				<input type="date" name="DataNascita" id="dn" class="myInput" placeholder="data di nascita">

				<select id="VivoMorto" name="VivoMorto" class="myInput">
				<option value="">-- Stato d'essere --</option>
					<option value="vivo">Vivo</option>
					<option value="morto">Morto</option>
				</select>

				<input type="date" name="DataMorte" id="m1" class="myInput" placeholder="data di morte">

				<input type="submit" class="invio" value="Cerca" id="idInvio" onclick="cerca()" />
			</form>
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
							<div class="col"><a href="Opera.php?nome=<?php echo $riga["codice"]; ?>"><?php echo $riga["codice"]; ?></a></div>
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
		</div>
	</div>
	<a id="tornaSu"><i class="fa fa-arrow-circle-up fa-2x" aria-hidden="true"></i></a>
	<script src="../js/arrowUp.js"></script>
	<script src="../js/fetchAutore.js"></script>
	<!-- Collegamento al file JS esterno -->
	<script src="../js/reference.js"></script>

</body>

</html>