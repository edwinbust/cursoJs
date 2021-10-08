let autos = require ('./autos')
let concesionaria =  {
	autos:autos,
	buscarAuto:  function(numPatente) { 
		     let auto = null;
		     autos.find(function(a) {
			     if(a.patente == numPatente){  auto = a; console.log(auto) }
		     });

		     return auto
	             }
};
console.log(concesionaria.buscarAuto('JJK116'))
