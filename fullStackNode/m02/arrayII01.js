/*
     Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados para acordar un recuperatorio. Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados y otra los desaprobados. Deberemos guardarlos en las variables aprobados y desaprobados respectivamente.

 */
let estudiantes = [
	 {nombre: 'John', promedio: 8.5, aprobado: true},
	 {nombre: 'Jane', promedio: 7, aprobado: true},
	 {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobado = estudiantes.filter(obj =>{
	return obj.aprobado == true;	
})
let desaprobado = estudiantes.filter(function(aprob){
	return aprob.aprobado == false;	
})

console.log(aprobado)
console.log(desaprobado)
