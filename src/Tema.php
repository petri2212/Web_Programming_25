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
			<h1>Tema DB</h1>
		</header>

		<div class="filtro">
			<form id="form" name="myform" method="POST">
				<input type="text" name="Descrizione" id="n1" class="myInput" placeholder="Descrizione">
				<input type="submit" class="invio sub" value="Cerca" id="idInvio" onclick="cerca()" />
				<input type="button" class="invio canc" value="Cancella" id="idCanc" onclick="canc()" />
			</form>
		</div>

		<div class="contenuto" id="contenuto">
			<!--
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
				<ul class="tabella">
					<nav class="fissa">
						<li class="testata">
							<div class="col">Codice </div>
							<div class="col">Nome </div>
							</tr>
					</nav>
					<?php
					foreach ($result as $riga) {
						$classRiga = 'class="riga"';
					?>
						<li <?php echo $classRiga; ?>>
							<div class="col"><a href="Sala.php?nome1=<?php echo $riga["codice"]; ?>"> <?php echo $riga["codice"]; ?> </a></div>
							<div class="col"> <?php echo $riga["descrizione"]; ?> </div>
						</li>
					<?php
					}
					?>
					</table>
				<?php
			}
				?>
				-->
				

		</div>
	</div>
	<a id="tornaSu"><i class="fa fa-arrow-circle-up fa-2x" aria-hidden="true"></i></a>
	<script src="../js/arrowUp.js"></script>
	<script src="../js/fetchTema.js"></script>
	<script src="../js/reference.js"></script>
</body>

</html>