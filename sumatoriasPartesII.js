function sumatoriaGananciasSemestre(unSemestre) {
	    return unSemestre[0] + unSemestre[1] + 
		   unSemestre[2] + unSemestre[3] + 
		   unSemestre[4] + unSemestre[5];
}
var gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0];
console.log(sumatoriaGananciasSemestre(gananciasUltimoSemestre));

var semestre01 = [-50, 12, 1050, -300, 200, 200];
console.log(sumatoriaGananciasSemestre(semestre01));

var semestre02 = [50, -12, -1000, 3000, 20, 30];
console.log(sumatoriaGananciasSemestre(semestre02));

