function puedoIrAlBanco (dia, hora) {
	  return (dia != 'Sábado' && dia != 'Domingo' && hora >= 10 && hora < 15)
};

console.log(puedoIrAlBanco('Jueves', 12))
