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
		<header>
			<h1>Opera DB</h1>
		</header>

		<div id="overlay">
			<div id="contenutoOvelay">
				<div id="text">
					<h2>Seleziona l'operazione che desideri effettuare:</h2>
					<select id="crud" name="Tipo" onchange="query()">
						<option value="">Seleziona operazione...</option>
						<option value="create">
							<i class="fa fa-pencil icona" aria-hidden="true"></i>
							<span class="opzioni">Inserisci dati</span>
						</option>
						<option value="read">
							<i class="fa fa-search icona" aria-hidden="true"></i>
							<span class="opzioni">Filtra dati</span>
						</option>
						<option value="update">
							<i class="fa fa-wrench icona" aria-hidden="true"></i>
							<span class="opzioni">Aggiorna dati</span>
						</option>
						<option value="delete">
							<i class="fa fa-trash-o icona" aria-hidden="true"></i>
							<span class="opzioni">Cancella dati</span>
						</option>
					</select>
					<div id="query">

					</div>
					<div id="risposta">
						adwa
					</div>

				</div>

			</div>
			<p id="messaggioUscita">Per chiudere cliccare fuori dalla finestra bianca</p>
			<div id="overlay-quit" onclick="off()">
			</div>
		</div>

		<div class="filtro">
			<form id="form" name="myform" method="POST" onsubmit="return cerca()">
				<input type="button" class="invio sub" value="Modifica dati" id="idCrud" onclick="on()" />
				<input type="text" name="Autore" id="a1" class="myInput" placeholder="autore">
				<input type="text" name="Titolo" id="t1" class="myInput" placeholder="titolo">
				<input type="number" min="2019" max="2025" name="AnnoAquisto" id="aa" class="myInput"
					placeholder="anno di acquisto">
				<input type="number" min="1959" max="2024" name="AnnoRealizzazione" id="ar" class="myInput"
					placeholder="anno di realizzazione">

				<select id="Tipo" name="Tipo" class="myInput">
					<option value="">tipologia opera...</option>
					<option value="quadro">quadro</option>
					<option value="scultura">scultura</option>
				</select>

				<input type="text" name="NumeroSala" id="s" class="myInput" placeholder="numero sala">
				<br>
				<input type="submit" class="invio sub" value="Cerca" id="idInvio" />
				<input type="button" class="invio canc" value="Cancella" id="idCanc" onclick="canc()" />

			</form>
		</div>

		<div class="contenuto" id="contenuto"></div>

	</div>
	<a class="tornaSu"><i class="fa fa-arrow-circle-up fa-2x" aria-hidden="true"></i></a>


	<script src="../js/arrowUp.js" defer></script>
	<script src="../js/fetchOpera.js" defer></script>
	<script src="../js/reference.js" defer></script>
	<script src="../js/overlay.js" defer></script>
</body>

</html>