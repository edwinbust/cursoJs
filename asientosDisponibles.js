/*
 Nos piden que escribamos la función asientosDisponibles(), que tome como parámetro un conjunto de asientos disponibles y el asiento que quiere ocupar la persona. Nuestra función deberá verificar si el asiento solicitado se encuentra disponible y devolverle un mensaje claro y prolijo al cliente como en los ejemplos siguientes:

Ejemplo si se encuentra el asiento disponible
asientosDisponibles([15, 28, 44, 45, 70], 15);  

// El resultado debería ser:
//
// "Felicitaciones, el asiento número 15 está disponible"
//
// Ejemplo si no se encuentra el asiento disponible
// asientosDisponibles([15, 28, 44, 45, 70], 50);  
//
// // El resultado debería ser:
//
// "Lo sentimos, el asiento número 50 está ocupado, pero aún quedan 5 asientos disponibles"
*/


function asientosDisponibles(listAsientos, asiento) {
  	let hayAsientos = listAsientos.indexOf(asiento);
  	let cantAsientos = listAsientos.length;
	if (hayAsientos == -1) {
	return "Lo sentimos, el asiento número "+asiento+" está ocupado, pero aún quedan "+cantAsientos+" asientos disponibles"
	} else {
	return "Felicitaciones, el asiento número "+asiento+" está disponible"
	}

};
console.log(asientosDisponibles([15, 28, 44, 32, 45, 70], 5));



