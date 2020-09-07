


function validarEntradasTexto() {
  var patron = new RegExp('^[A-Z]+$', 'i');
  input = document.forms['validationForm']['letras'];
  
  for (i = 0; i < input.length; i++) {
    if (patron.test(input[i].value)) {
      input[i].className = "form-control  is-valid";

    }
    else {
      input[i].className = "form-control is-invalid";
      if(input[i].value == ""){
          document.getElementsByClassName("invalid-feedback")[i].innerHTML = "Campo vacio"
      }
      else{
        document.getElementsByClassName("invalid-feedback")[i].innerHTML = "Solo puede ingresar letras"
      }
    }
  }

}

let contador = 1;
function adivinanza() {

  var adivino = false;
  var checkbox = document.getElementsByName("gridRadios");
  for (i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked == true && checkbox[i].value == "Roma") {
      adivino = true;
    }
  }
  if (contador >= 0 && adivino) {
    $('#modalGanador').modal('show');
    contador -= 1;
  }
  else if (contador > 0) {
    contador -= 1;
    $('#modalIntentos').modal('show');
  }
  else {

    document.getElementById("SeleccioneUnoText").innerHTML = "Lo sentimos mucho pero se terminaron sus intentos"
    $('#modalPerdedor').modal('show');
  }
}

function formularioFocus() {
  console.log(document.getElementById('letras'))
  document.getElementById('letras').focus();
}