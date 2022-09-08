var boton = document.querySelector(".encriptar");
var botondesencripta = document.querySelector(".desencriptar");
const botoncopia = document.querySelector(".copiar")


boton.addEventListener("click", function () {
    var texto = document.querySelector("#texto").;
    var imagen = document.querySelector(".muñeco-alura");
    var mensajeError = document.querySelector(".mensaje-error");
    var texto1 = texto.value;
    var textarray = Array.from(texto1); /*hago el texto en array*/
    /*llamo funcion comprueba*/

    if (textarray.length == 0) {
        imagen.classList.remove("invisible");
        mensajeError.textContent = "Ningún mensaje fue encontrado";
        mensajeError.classList.remove("invisible");
    }
    else {
        var texencriptado = document.querySelector(".mensaje"); /*tomo el parrafo ya para convertir*/
        texencriptado.textContent = (compruebaletra(textarray)).join("");
        mensajeError.classList.add("invisible");
        imagen.classList.add("invisible");
    };

});

botondesencripta.addEventListener("click", function () {
    var texto = document.querySelector("#texto");
    var texto1 = texto.value;
    var texencriptado = document.querySelector(".mensaje"); /*tomo el parrafo ya para convertir*/
    texencriptado.textContent = (desencripta(texto1));

    if (textarray.length == 0) {
        imagen.classList.remove("invisible");
        mensajeError.textContent = "Ningún mensaje fue encontrado";
        mensajeError.classList.remove("invisible");
    }
    else {
        var texencriptado = document.querySelector(".mensaje"); /*tomo el parrafo ya para convertir*/
        texencriptado.textContent = (compruebaletra(textarray)).join("");
        mensajeError.classList.add("invisible");
        imagen.classList.add("invisible");
    };

})

function compruebaletra(textarray) {


    var textoterminado = [];

    for (var i = 0; i < textarray.length; i++) {

        var letra = textarray[i];

        if (letra == "a") {
            textarray[i] = "ai";
            textoterminado.push(textarray[i]);
        }
        else if (letra == "e") {
            textarray[i] = "enter";
            textoterminado.push(textarray[i]);
        }
        else if (letra == "i") {
            textarray[i] = "imes";
            textoterminado.push(textarray[i]);;
        }
        else if (letra == "o") {
            textarray[i] = "ober";
            textoterminado.push(textarray[i]);
        }
        else if (letra == "u") {
            textarray[i] = "ufat";
            textoterminado.push(textarray[i]);
        }
        else {
            textarray[i] = letra;
            textoterminado.push(textarray[i]);
        }
    }

    return textoterminado;

}

function desencripta(texto1) {

    var palabra = texto1;
    var palabradesencriptada = "";
    var remplazantes = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u",
    }

    palabradesencriptada = palabra.replace(/ai|enter|imes|ober|ufat/g, function (matched) {
        return remplazantes[matched];
    })
    return palabradesencriptada;
};

function copiartexto() {
    var textoacopiar = document.querySelector(".mensaje")
    var textocopiado = textoacopiar.textContent;
    textocopiado.select;
    navigator.clipboard.writeText(textocopiado);
}
