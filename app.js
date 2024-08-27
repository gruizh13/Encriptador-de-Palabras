function encriptarTexto() {
    let texto = document.getElementById("txtArea").value;// agregamos la textArea a un let
    //let tituloMensaje = document.getElementById("mensaje3");//menaje de 
    let parrafo1 = document.getElementById("parrafoUno");
    let imagen = document.getElementById("imagen");
    
    //ocultarImagen();
    document.getElementById("contieneImagen").style.display = 'none';

    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    if (texto.length != 0) {
      document.getElementById("txtArea2").value = textoCifrado;
      //tituloMensaje.textContent = "Texto encriptado con éxito";
      document.getElementById("txtArea").value = "";//limpiar caja de texto
      parrafo1.textContent = "";
      document.getElementById("resultado").style.display = 'inline';
    }else {
      
      //tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo1.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      window.alert ("Debes ingresar un texto");
    }
  }
 
  function ocultarImagen(){
    document.getElementById("contieneImagen").style.display = 'none';
  }

  
  function selectText() {
    const seltxt = document.getElementById("txtArea2");
    seltxt.focus();
    seltxt.select();
  }

  function copiarTexto(){

    const seltxt = document.getElementById("txtArea2");
    let alertamensaje = document.getElementById("alerta");
    
    if (seltxt != 0) {

        seltxt.focus();
        seltxt.select();
        //alert('texto seleccionado');
        alertamensaje.textContent ="mensaje seleccionado";
        
    } else {
        
    }
    
}

function copyToClickBoard() {
        var content = document.getElementById('txtArea2');
        //let alertamensaje = document.getElementById("alerta");
        content.select();
        document.execCommand('copy');
        window.alert ("Texto copiado");
  }

  
  function seleccionarCopiar(){
    let texto = document.getElementById("txtArea2").value;

    if (texto.length != 0) {
      selectText();
    //copiarTexto();
    copyToClickBoard();
    
    //document.getElementById("txtArea2").value = "";
    }else{
      window.alert ("Debes ingresar un texto");
    }
  }
  
  function desencriptarTexto() {
    let texto = document.getElementById("txtArea").value;
    //let tituloMensaje = document.getElementById("mensaje3");
    let parrafo1 = document.getElementById("parrafoUno");
    let imagen = document.getElementById("imagen");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("txtArea2").value = textoCifrado;
        //tituloMensaje.textContent = "Texto desencriptado con éxito";
        document.getElementById("txtArea").value = "";
        parrafo1.textContent = "";
        
      } else {
        //tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo1.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        window.alert ("Debes ingresar un texto");
      }
  }