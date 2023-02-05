window.onscroll = function() {navbarFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navbarFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
}





window.onload = function () {
  crearJson();

    // Variables
    const IMAGENES = [
        'img/imagen1.png',
        'img/imagen2.png',
        'img/imagen3.png'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
} 







var input = document.getElementById("fname");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("femail").focus();
  }
});
var input2 = document.getElementById("femail");
input2.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("fmessage").focus();
  }
});
var input3 = document.getElementById("fmessage");
input3.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("fname").focus();
  }
});
function validateForm() {
  var sección = document.getElementById("contact");

  var validar=0;
  var c1 = document.forms["myForm"]["fname"].value;
  var c2 = document.forms["myForm"]["femail"].value;
  var c3 = document.forms["myForm"]["fmessage"].value;
  
  if (c1 == "" || c1 == null) {
    alert("Ingrese su nombre.");
    validar=1;
    document.getElementById("fname").focus();
     return false;

    
  }
  if (c2 == "" || c2 == null) {
    alert("Ingrese su correo electrónico.");
    validar=1;
    document.getElementById("femail").focus();
    return false;
  } 


if (c3 == "" || c3 == null) {
  alert("Ingrese su mensaje.");
  validar=1;
  document.getElementById("fmessage").focus();
  return false;
}


var regex = /^[a-zA-Z]+$/;
      if(!regex.test(c1)){
      	alert("Error. Los nombres no pueden tener números ni caracteres especiales.");
        validar=1;
        document.getElementById("fname").focus(); 
        return false;
      } 
      var regex2 = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      if(!regex2.test(c2)){
      	alert("Error. Ingrese un correo electrónico válido.");
        validar=1;
        document.getElementById("femail").focus(); 
        return false;
      }
    
      if(validar==0){
  alert("Nombre: "+c1+"\n"+"Email: "+c2+"\n"+"Mensaje: "+c3+"\n"+"¡Su mensaje ha sido enviado!");
  document.getElementById("fname").focus();
  return true;
}

sección.style.display = "block";
  
}





function crearJson() {
var xValues = [];
var yValues = [];
var barColors = [];
const myJSON = '[{"aplicación":"Java", "porcentaje":65, "color":"red"},{"aplicación":"Css", "porcentaje":80, "color":"green"},{"aplicación":"Html", "porcentaje":75, "color":"blue"},{"aplicación":"JavaScript", "porcentaje":40, "color":"orange"}, {"aplicación":"Python", "porcentaje":70, "color":"brown"}]';

const myObj = JSON.parse(myJSON);

for (let i = 0; i < myObj.length; i++) {


nap1 = document.getElementById('naplicación1');
nap2 = document.getElementById('naplicación2');
nap3 = document.getElementById('naplicación3');
nap4 = document.getElementById('naplicación4');
nap5 = document.getElementById('naplicación5');

ap1 = document.getElementById('myBar1');
ap2 = document.getElementById('myBar2');
ap3 = document.getElementById('myBar3');
ap4 = document.getElementById('myBar4');
ap5 = document.getElementById('myBar5');

  xValues[i] = myObj[i].aplicación;
  yValues[i] = myObj[i].porcentaje;
  barColors[i] = myObj[i].color;

  nap1.innerText = myObj[0].aplicación;
nap2.innerText = myObj[1].aplicación;
nap3.innerText = myObj[2].aplicación;
nap4.innerText = myObj[3].aplicación;
nap5.innerText = myObj[4].aplicación;

ap1.innerText = myObj[0].porcentaje+"%";  
ap2.innerText = myObj[1].porcentaje+"%";
  ap3.innerText = myObj[2].porcentaje+"%";
  ap4.innerText = myObj[3].porcentaje+"%";
  ap5.innerText = myObj[4].porcentaje+"%";

ap1.style.width = myObj[0].porcentaje+"%";
ap2.style.width = myObj[1].porcentaje+"%";
ap3.style.width = myObj[2].porcentaje+"%";
ap4.style.width = myObj[3].porcentaje+"%";
ap5.style.width = myObj[4].porcentaje+"%";

}
}

