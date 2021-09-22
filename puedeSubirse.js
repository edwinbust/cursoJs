function persona(alturaPersona,vieneConCompania) {
	if (alturaPersona >= 1.5 ){
	   return true;
	} else if (alturaPersona == 1.2 && vieneConCompania){
	   return true;
	} else {
	   return false;
	}
}
function puedeSubirse(alturaPersona,vieneConCompania, tieneAfeccionCardiaca) {
	return persona(alturaPersona,vieneConCompania) && !tieneAfeccionCardiaca
}
console.log(puedeSubirse(1.1,true, false));
