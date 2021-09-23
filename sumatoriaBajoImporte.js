/* 
 Escribí la función sumatoriaBajoImporte la cual recibiendo un array con importes nos devuelva el resultado final de la suma de los importes de todos los meses que tienen ganancia, a excepción de los que superen un importe de $ 1.000
 */

function sumatoriaBajoImporte(importes){
	let numeroImportes = importes.length;
	let sumatoria = 0;
	for ( let i = 0; i < numeroImportes; i++){
		
	if (importes[i] <= 1000 && importes[i] >=0){
	   sumatoria = sumatoria + importes[i];
		}
	
	}
	return sumatoria

};

//console.log(sumatoriaBajoImporte([115, 85, 2000, 877, 13, 1000, 200]));
console.log(sumatoriaBajoImporte([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]));
