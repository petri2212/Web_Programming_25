
function accedi(){
    event.preventDefault();

    const form = document.querySelector("#form");
    const formData = new FormData(form);
    
    const username = formData.get("username");
    const password = formData.get("password");

    if (username === "admin" && password === "admin") {
      sessionStorage.setItem("loggedIn", "true"); // salva lo stato di login
      window.location.href = "../Opera.php";      // reindirizza
    } else {
      //document.getElementById("pippo").textContent = "Credenziali errate. Redirect to login wait";

      const risposta = document.getElementById("login");

      risposta.innerHTML = "Credenziali errate, atttendere!<div id=\"barra\"></div>";
      avviaCaricamento();
      risposta.style.marginTop = "5%";
      setTimeout(() => {
        risposta.style.opacity = 1;
      }, 100);
      setTimeout(() => {
        risposta.style.opacity = 0;
         window.location.href = "./login.html";
      }, 2500);


      /*
      setTimeout(() => {
        console.log("2 seconds passed");
       
        window.location.href = "./login.html";
      }, 2000);
    }
      */
  
}
}

//barra di caricamento
function avviaCaricamento() {
    const barra = document.getElementById("barra");
    const durataSecondi = 3;
    const fps = 60; // fotogrammi al secondo (fluidità)
    const intervallo = 1000 / fps;
    const incremento = 100 / (durataSecondi * fps);
 
    let larghezza = 0;
    barra.style.width = "0%";
 
    const timer = setInterval(() => {
       larghezza += incremento;
       if (larghezza >= 18) {
 
          larghezza = 20;
          clearInterval(timer);
          // reset dopo 1s
          setTimeout(() => barra.style.width = "0%", 2000);
       }
       barra.style.width = larghezza + "%";
    }, intervallo);
 }