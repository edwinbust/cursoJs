/*
 Con la ayuda de lo que sabe Nelson tenes que realizar una función laClaveSecreta(), que tome como parámetro un conjunto de caracteres y te pueda devolver el mensaje de manera ordenada.

 Por ejemplo: 
 // Ejecutando la función con el siguiente parámetro:
// laClaveSecreta( [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] );  
//
// // El resultado que nos devuelve la función es el siguiente: 
// "El día es lunes";  
//
// Otro ejemplo:
// // Ejecutando la función con el siguiente parámetro:
// laClaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] );  
//
// // El resultado que nos devuelve la función es el siguiente: 
// "Clave descifrada";  
 */

function laClaveSecreta(mensajeOculto){
  let mensajeOrdenado="";
  for(let i=mensajeOculto.length-1;i>=0;i--){
         if (mensajeOculto[i]!="*"){
          mensajeOrdenado=mensajeOrdenado+mensajeOculto[i];
         }
  }
	   return mensajeOrdenado; 
}
