/*
Ahora, necesitamos de tus geniales habilidades para que definas la función signo, la cual dado un número, nos retorne solo uno de los siguientes valores:

    1, si el número es positivo
    0, si el número es cero
   -1, si el número es negativo

Vamos a por ello, definí la función signo, para lograr el objetivo deseado.

TIP: Acá la estructura está pidiendo el uso de if, de else if y de else dentro de una función!
 */

function signo(numero){
	if (numero >= 1){
	return 1;
	} else if (numero == 0){
	return 0;
	} else {
	return -1;
	}

}
console.log(signo(-23));
console.log(signo(1));
console.log(signo(0));
console.log(signo(23));
