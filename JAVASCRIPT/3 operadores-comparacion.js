let numeroAComparar = 54;
let numeroAComparar2 = 40;
let numeroAComparar3 = 40;
let numeroAComparar4 = "40";


//Compara si un valor es igual al otro (Comparacion ==)
document.write(`Comparacion (==)  Devuelve true o false si son o no iguales <b>${numeroAComparar == numeroAComparar2}</b> <br>`);

//Compara si son iguales pero no solo del valor que tenga sino tambien del tipo de dato (Comparacion estricta ===)
document.write(`Comparacion Estricta (===) Valida si el valor y el tipo de dato son iguales 
<b>${numeroAComparar2 === numeroAComparar4}</b> <br>`);

//Valida si los dos valores son distintos uno de otro (desigualdad !=)
document.write(`Desigualdad (!=) Valida si los valores son distintos <b>${numeroAComparar3 != numeroAComparar2}</b> <br>`);

//Compara si es distinto estrictamente (desigualdad estricta !==)
document.write(`Desigualdad estricta (!==) Valida si los valores y tipo de dato son distintos <b>${numeroAComparar3 !== numeroAComparar}</b> <br>`);

//Valida si un valor es Mayor que el otro (mayor >)
document.write(`Mayor que (>) valida si es mayor o no que el valor inicial <b>${numeroAComparar > numeroAComparar2}</b> <br>`);

//Valida si un valor es Mayor O IGUAL Que el otro (mayor o igual >=)
document.write(`Mayor o igual que (>=) valida si es mayor o igual que el valor inicial <b>${numeroAComparar2 >= numeroAComparar3}</b> <br>`);

//Valida si un valor es Menor que el otro (menor <)
document.write(`Manor que (<) valida si es mayor o no que el valor inicial <b>${numeroAComparar < numeroAComparar2}</b> <br>`);

//Valida si un valor es Menor O IGUAL Que el otro (mayor o igual <=)
document.write(`Menor o igual que (<=) valida si es menor o igual que el valor inicial <b>${numeroAComparar2 <= numeroAComparar3}</b> <br>`);


