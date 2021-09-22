function esNumeroDeLaSuerte(numero){
	return (numero != 15) &&  (numero > 0) && ((numero %  2 == 0) ||  (numero % 3 == 0))
}
console.log(esNumeroDeLaSuerte(11))º
