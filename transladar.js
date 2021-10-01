let unArray = [1, 2, 3];
let otroArray = [4, 5];

function trasladar(unArray, otroArray){
	otroArray.push(unArray.pop());
}
console.log(unArray, otroArray);
trasladar(unArray, otroArray);
console.log(unArray, otroArray);
