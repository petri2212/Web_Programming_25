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
		<header>
			<h1>Sala DB</h1>
		</header>

		<div class="filtro">
			<form id="form" name="myform" method="POST">
				<input type="text" name="Nome" id="n1" class="myInput" placeholder="Nome">
				<input type="text" name="Superficie" id="s1" class="myInput" placeholder="Superficie">
				<input type="text" name="Tema_Sala" id="t1" class="myInput" placeholder="Tema Sala">
				<input type="submit" class="invio sub" value="Cerca" id="idInvio" onclick="cerca(event)" />
				<input type="button" class="invio canc" value="Cancella" id="idCanc" onclick="canc(event)" />
			</form>
		</div>

		<div class="contenuto" id="contenuto"></div>
		<div class="paginazione">
			<div>
				<div id="paginazione"></div>
				<button type="button" class="invio pag" id="pagSx" onclick="aggiornaPagina('-')">1</button>

				<button type="button" class="invio pag" id="pagDx" onclick="aggiornaPagina('+')">2</button>
			</div>
		</div>
	</div>
	<a class="tornaSu"><i class="fa fa-arrow-circle-up fa-3x" aria-hidden="true"></i></a>
	<script src="../js/arrowUp.js" defer></script>
	<script src="../js/pagine.js" defer></script>
	<script src="../js/fetchSala.js" defer></script>
	<script src="../js/reference.js" defer></script>
</body>

</html>