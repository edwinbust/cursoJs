function medallaSegunPuesto(puesto){
	let medallas = ["Oro","Plata","Bronce"];
	let mensaje = "Seguí participando";
	if ( puesto <= 3) {return medallas[puesto-1]  };
	return mensaje;

}
console.log(medallaSegunPuesto(1));
console.log(medallaSegunPuesto(2));
console.log(medallaSegunPuesto(4));
