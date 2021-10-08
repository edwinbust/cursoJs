let autos = require ('./autos')
let concesionaria =  {
	autos:autos,
	buscarAuto:  function(numPatente) { 
		     let auto = null;
		     autos.find(function(a) {
			     if(a.patente == numPatente){  auto = a }
		     });

		     return auto
	             },
	venderAuto: function(numPatente) {
//		     let auto = null;
//		     autos.find(function(a) {
//			     if(a.patente == numPatente){  auto = a; console.log(auto) }
//		     });
		     const auto = this.buscarAuto(numPatente)
		     if( auto != null ) { auto.vendido = true  }
		     return auto
		    }
};

console.log(concesionaria.venderAuto('JJK116'))
