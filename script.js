/*selecciona el elemento del textarea
por medio de la clase que para seleccionarla se utiliza . punto*/
const inputTexto = document.querySelector(".input-texto");
/*segundo textarea*/
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
btnCopy.style.display = "none"

//Las "llaves" de encriptación que utilizaremos son las siguientes:

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//función para el botón de encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    //para que se quite la imagen cuando aparezca el texto encriptado
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
    btnCopy.style.display = "block"
}

/*la función recibe el texto que propone el usuario para encriptar*/
function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],
    ["o","ober"],["u","ufat"]];
    //convertir el código en minuscula
    stringEncriptada = stringEncriptada.toLowerCase();

    //ciclo para verificar si el texto ingresado por el usuario tiene las vocales
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){

            //para que no solo reemplace la primera letra sino todo
            //revisa la coincidencia del valor 0 del array y lo reemplaza por el valor 1
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}
//función para el botón de desencriptar
function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    mensaje.value = textoEncriptado
    inputTexto.value = ""
}
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],
    ["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){

            //para que no solo reemplace la primera letra sino todo
            //revisa la coincidencia del valor 0 del array y lo reemplaza por el valor 1
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}
function copiar() {
    
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
