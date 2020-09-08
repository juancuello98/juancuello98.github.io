function validarEntradasTexto() {
  var patron = new RegExp('^[A-Z]+$', 'i');
  input = document.forms['validationForm']['letras'];

  for (i = 0; i < input.length; i++) {
    if (patron.test(input[i].value)) {
      input[i].className = "form-control  is-valid";

    } else {
      input[i].className = "form-control is-invalid";
      if (input[i].value == "") {
        document.getElementsByClassName("invalid-feedback")[i].innerHTML = "Campo vacio"
      } else {
        document.getElementsByClassName("invalid-feedback")[i].innerHTML = "Solo puede ingresar letras"
      }
    }
  }

}

let contador = 0;
let adivino = false;

function adivinanza() {

  // variables

  contador += 1;
  var puntos = 0;
  var input = document.getElementById("inputConcurso");
  var respuesta = input.value.toUpperCase();
  var imagen = document.getElementById("card-img-top");
  // prueba
  console.log(contador)
  console.log(adivino)
  console.log(respuesta)

  // checkeo

  if (respuesta == "ITALIA" && adivino == false && contador < 4) {
    adivino = true;
    if (contador == 1) {
      puntos = 100
      document.getElementById("textoGanador").innerHTML = "Sumaste " + puntos + " puntos! Estaras participando por un viaje con todo incluido por tu puntuacion obtenida!";

      $('#modalGanador').modal('show');
    } else if (contador == 2) {
      puntos = 50
      document.getElementById("textoGanador").innerHTML = "Sumaste " + puntos + " puntos! Estaras participando por aereos + estadia por tu puntuacion obtenida!"
      $('#modalGanador').modal('show');
    } else {
      puntos = 20
      document.getElementById("textoGanador").innerHTML = "Sumaste " + puntos + " puntos! Estaras participando por aereos por tu puntuacion obtenida!"
      $('#modalGanador').modal('show');
    }

  } 
  else if (contador < 3) {

    document.getElementById("textoIntento").innerHTML = "No te preocupes aun te quedan " + (3 - contador) + " intento/s y te damos otra pista";
    $('#modalIntentos').modal('show');
    if (contador == 1) {
      imagen.src = "https://phantom-elmundo.unidadeditorial.es/1c17e366540f931541e5c13cfd553f2a/resize/746/f/jpg/assets/multimedia/imagenes/2020/06/11/15918908967290.jpg";
    } else {
      imagen.src = "https://s.libertaddigital.com/fotos/noticias/600/320/italia-mjg.jpg";
    }
  } 
  else {
    $('#modalPerdedor').modal('show');
  }
}

function formularioFocus() {
  console.log(document.getElementById('letras'))
  document.getElementById('letras').focus();
}