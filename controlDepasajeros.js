/*
 Para ayudar a la empresa escribamos una función reporteDePasajeros(), la cual cuando reciba la cantidad de estaciones que avanzó el tren nos devuelva un reporte de la cantidad de cada una de las estaciones y la cantidad de pasajeros que lleva el tren. La empresa nos provee los siguientes datos:

     El tren sale de la estación terminal siempre con 200 pasajeros.
     En cada estación el tren sube 50 pasajeros y se bajan 30.
     En la estación Florida (la estación número 5), como es una estación central es la única donde bajan 80 personas y suben 120.

	     Teniendo éstos datos ya podemos armar nuestro programa, del cual nos pasan los siguientes ejemplos:
	      // Si ejecutara la función de ésta manera:
// reporteDePasajeros(0);  
//
// // La función me retornaría lo siguiente:
// ['En la estación 0 hay 200 pasajeros arriba del tren']
//
// Otro ejemplo:
//   // Si ejecutara la función de ésta manera:
//   reporteDePasajeros(3);  
//
//   // La función me retornaría lo siguiente:
//   ['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 'En la estación 2 hay 240 pasajeros arriba del tren', 'En la estación 3 hay 260 pasajeros arriba del tren']
//
//   Otro ejemplo:
//     // Si ejecutara la función de ésta manera:
//     reporteDePasajeros(5);  
//
//     // La función me retornaría lo siguiente:
//     ['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 'En la estación 2 hay 240 pasajeros arriba del tren', 'En la estación 3 hay 260 pasajeros arriba del tren',
//     'En la estación 4 hay 280 pasajeros arriba del tren', 'En la estación 5 hay 320 pasajeros arriba del tren']
 */

function reporteDePasajeros(estaciones) {
	let reporte = [];
	let canPasajeros = 200;
	for (let i = 0; i <= estaciones; i++) {
	reporte.push("En la estación "+i+" hay "+canPasajeros+" pasajeros arriba del tren");
        if ( i != 4) { canPasajeros = canPasajeros + 20; } else {canPasajeros = canPasajeros + 40 } ;   
	}
 return reporte  
}
console.log(reporteDePasajeros(0));
console.log(reporteDePasajeros(2));
console.log(reporteDePasajeros(5));
