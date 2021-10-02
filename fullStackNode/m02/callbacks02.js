/*    Creemos cuatro funciones que realicen las operaciones principales de una calculadora. Nuestro trabajo será definir la función suma, resta, multiplicacion y division. Cada una de ellas recibirá dos parámetros y deberá realizar la operación matemática según corresponda. Por ejemplo, la función suma deberá retornar la suma de ambos parámetros; la función resta, la resta de ambos parámetros, y así sucesivamente.
    Ahora sí, con esas funciones ya definidas, creemos la función calculadora. Esta función recibirá dos parámetros numéricos y una función, que será nuestro callback.
*/


let suma =(numero1, numero2)=> numero1+numero2;

let resta =(numero1, numero2)=> numero1-numero2;

let multiplicacion =(numero1, numero2)=> numero1* numero2;

let division =(numero1, numero2)=> numero1/numero2;
let calculadora=(numero1,numero2, operacion)=>operacion(numero1,numero2);
console.log(calculadora(20, 4, suma)) 
console.log(calculadora(20, 4, resta)) 
console.log(calculadora(20, 4, multiplicacion)) 
console.log(calculadora(20, 4, division)) 
