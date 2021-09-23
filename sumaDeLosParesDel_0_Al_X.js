function sumaDeLosParesDel0Al(x){
	let sumarPares = 0;
	for (let i=0; i <= x; i++){
	if (i%2 == 0){sumarPares = sumarPares + i;}
	} 
	return sumarPares
}
console.log(sumaDeLosParesDel0Al(10));



