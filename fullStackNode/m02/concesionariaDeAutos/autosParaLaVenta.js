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
		     const auto = this.buscarAuto(numPatente)
		     if( auto != null ) { auto.vendido = true  }
		     return auto
		    },
	autosParaLaVenta: function(){
	            const autos = this.autos
		    const result = autos.filter( obj =>{
			            return obj.vendido == false;
		    })
	
		    return result
		    }
};
//console.log(concesionaria.venderAuto('JJK116'))
//console.log(concesionaria.venderAuto('JJK116'))
//console.log(concesionaria.venderAuto('APL123'))
console.log(concesionaria.autosParaLaVenta())
