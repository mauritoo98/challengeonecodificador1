var boton = document.querySelector(".encriptar");

boton.addEventListener("click", function(){
    var texto = document.querySelector("#texto");
    var texto1= texto.value; /*selecciono el texto*/
    var textarray= Array.from(texto1); /*hago el texto en array*/

    /*llamo funcion comprueba*/
    var texencriptado=document.querySelector(".mensaje"); /*tomo el parrafo ya para convertir*/ 
    texencriptado.textContent=(compruebaletra(textarray)).join("");  /*cambio el texto por lo que me devolvio la funcion*/


});

function compruebaletra(textarray){


    var textoterminado = [];

    for(var i=0; i<textarray.length; i++){

        var letra= textarray[i];

        if (letra == "a" ){
            textarray[i]= "ai";
            textoterminado.push(textarray[i]);
        }
        else if (letra == "e"){
            textarray[i]= "enter";
            textoterminado.push(textarray[i]);
        }
        else if (letra == "i"){
            textarray[i]= "imes";
            textoterminado.push(textarray[i]);;
        }
        else if (letra == "o"){
            textarray[i]= "ober";
            textoterminado.push(textarray[i]);
        }
        else if (letra == "u"){
            textarray[i]= "ufat";
            textoterminado.push(textarray[i]);
        }
        else{
            textarray[i] = letra;
            textoterminado.push(textarray[i]);
        }
    }

    return textoterminado;

}