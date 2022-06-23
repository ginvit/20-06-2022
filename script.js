// 1: Scrivere una funzione che accetta due parametri e torna la somma di entrambi

function sum(num1, num2) {
  const result = num1 + num2;
  return result;
}
console.log(sum(2, 5));

// 2: Scrivere una versione migliorata della prima che controlla l'esistenza dei due parametri e che siano numeri

function sum(num1, num2) {
  let result = 0;

  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else {
    result = console.error("Non è stato inserito un numero");
  }
  return result;
}
console.log(sum(5, 10));

// 3: Scrivere come per il punto due, anche per moltiplicazione, divisione, e sottrazione

function sub(num1, num2) {
  let result = 0;

  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 - num2;
  } else {
    result = console.error("Non è stato inserito un numero");
  }
  return result;
}
console.log(sub(5, 10));

function mult(num1, num2) {
  let result = 0;

  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 * num2;
  } else {
    result = console.error("Non è stato inserito un numero");
  }
  return result;
}
console.log(mult(5, 10));

function div(num1, num2) {
  let result = 0;

  if (num1 === 0 || num2 === 0) {
    result = console.error("Non puoi dividere per 0");
  } else if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 / num2;
  } else {
    result = console.error("Non è stato inserito un numero");
  }
  return result;
}
console.log(div(5, 0));

console.clear();

// 4: Scrivere una funzione che possa eseguire le 4 precedenti

function operation(num1, num2) {
  let result = 0;
  let operationType = prompt("Inserisci il tipo di operazione");

  if (typeof num1 === "number" && typeof num2 === "number") {
  } else {
    result = console.error("Non è stato inserito un numero");
  }

  switch (operationType.toLowerCase()) {
    case "addizione":
    case "+":
      result = num1 + num2;
      break;

    case "sottrazione":
    case "-":
      result = num1 - num2;
      break;

    case "moltiplicazione":
    case "*":
      result = num1 * num2;
      break;

    case "divisione":
    case "/":
      result = num1 / num2;
      break;

    default:
      console.error("Inserire un operatore valido");
      break;
  }

  if (
    (operationType === "divisione" || operationType === "/") &&
    (num1 === 0 || num2 === 0)
  ) {
    result = console.error("Non puoi dividere per 0");
  }

  return result;
}

console.log("Il risultato è:" + operation(5, 2));
