function dividir(valorA, valorB){
	let division = null
	if ( valorB !=0) {
	division = valorA / valorB
	} else {
	division = "No se puede dividir por cero"
	}
	return division
}
module.exports=  dividir
