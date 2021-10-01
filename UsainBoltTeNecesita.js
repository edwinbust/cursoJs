function caloriasDeTrote(x){
	let calorias = 0;
	for  (let i=1; i <= x; i++) {
	calorias = calorias + i*5;
	}
	return calorias
}
console.log(caloriasDeTrote(2))
console.log(caloriasDeTrote(3))
console.log(caloriasDeTrote(6))
