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
            <form name="myform" method="POST">
			    <input type="text" name="Descrizione" id="n1" class="myInput" placeholder="Descrizione">
			    <input type="submit" value="Cerca" id="idInvio"/>
			</form>
		</div>

		<div class="contenuto" id="pippo">
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

        <script> 
        let persone;

         fetch('./select.php', {

            method : 'POST',
            header: {
                'Content-Type' : 'application/json'
            }
        })
        
                .then(response => response.json())
                .then(data => {
                    persone = data;
                    console.log('dati ricevuti: ',data);
                    let tabella = ` 
                    <table class="tabella">
					<tr class="testata">
						<th>Codice </th>
						<th>Descrizione </th>
					</tr>
                        ${generaRighe(data)}

                    </table>
                    `;
                   // let tabellaContainer = document.querySelector("#pippo");

                   document.getElementById("pippo").innerHTML = tabella;
                   // tabellaContainer.insertAdjacentHTML('beforeend', tabella);
                
                  //  tabellaContainer.in
                    //tabellaContainer.innerHTML(tabella)
                })
                .catch((error)=>{
                    console.log('errore: ', error);

/*
                    .then(response => response.text())
  .then(data => {     try {
    console.log(JSON.parse(data));
  } catch (e) {
    console.error('Error parsing JSON:', data);
  }   
*/               

            });

            function generaRighe(data){
                let righe = '';
                data.forEach(data => {
                    let riga = `
                    <tr>
                        <td> ${data.codice} </td>
                         <td> ${data.descrizione} </td>
                    </tr>
                    `;
                    righe+=riga;
                });
                return righe;


            }








        </script>
           



		</div>

	</div>
</body>

</html>