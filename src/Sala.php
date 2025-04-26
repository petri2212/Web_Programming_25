<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Sala</title>
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
			<h1>SalaDb</h1>
		</header>

		<div class="filtro">
			<form id="form" name="myform" method="POST">
				<input type="text" name="Nome" id="n1" class="myInput" placeholder="Nome">
				<input type="text" name="Superficie" id="s1" class="myInput" placeholder="Superficie">
				<input type="text" name="Tema_Sala" id="t1" class="myInput" placeholder="Tema Sala">
				<input type="submit" class="invio" value="Cerca" id="idInvio" onclick="cerca()" />
			</form>
		</div>

		<div class="contenuto" id="contenuto">

			<?php
			try {
				// query
				$result = $conn->query("SELECT * FROM sala");
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
							<div class="col">Superficie </div>
							<div class="col">Tema Sala </div>
						</li>
					</nav>
					<?php
					foreach ($result as $riga) {
						$classRiga = 'class="riga"';
					?>
						<li <?php echo $classRiga; ?>>
							<div class="col"> <?php echo $riga["numero"]; ?> </div>
							<div class="col"> <?php echo $riga["nome"]; ?> </div>
							<div class="col"> <?php echo $riga["superficie"]; ?> </div>
							<div class="col"> <?php echo $riga["temaSala"]; ?> </div>
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
	<script src="../js/fetchSala.js"></script>
</body>

</html>