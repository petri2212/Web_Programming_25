<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Sala</title>
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
			<h1>SalaDb</h1>
		</header>

		<div class="filtro">
		<form id= "form" name="myform" method="POST">
			<input type="text" name="Nome" id="n1" class="myInput" placeholder="Nome">
			<input type="text" name="Superficie" id="s1" class="myInput" placeholder="Superficie">
			<input type="text" name="Tema_Sala" id="t1" class="myInput" placeholder="Tema Sala">
			<input type="submit" class="invio" value="Cerca" id="idInvio" onclick="cerca()"/>
		</form>
		</div>

		<div class="contenuto" id="cont2">

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
				<table class="tabella">
					<tr class="testata">
						<th>Codice </th>
						<th>Nome </th>
						<th>Superficie </th>
						<th>Tema Sala </th>
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
							<td> <?php echo $riga["numero"]; ?> </td>
							<td> <?php echo $riga["nome"]; ?> </td>
							<td> <?php echo $riga["superficie"]; ?> </td>
							<td> <?php echo $riga["temaSala"]; ?> </td>
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
	<script src = "../js/fetchSala.js"></script>
</body>

</html>