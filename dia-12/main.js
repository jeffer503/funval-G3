/*let nombre = "jeffersson";
let apellido = "melgar";

console.log(nombre + " melgar");

console.log(nombre.length);

console.log(nombre[9]);
console.log(nombre[0]);

console.log(apellido)

let nombre = "jeffersson";

if (nombre === "jeffersson") {
  console.log("mi nombre es jeffersson");
}

let userName = prompt("ingresa nombre de usuario")

if (userName === "homero" && userName > 1) {
    console.log("no puedes entrar")
}else if (username === "homero" && <= 1 ) {
    console.log("puedes entrar")
}*/

function calcularArea() {
  const figura = prompt(
    "¿De qué figura quieres calcular el área?\nOpciones: cuadrado, rectangulo, circulo, triangulo"
  )?.toLowerCase();

  let area = 0;

  switch (figura) {
    case "cuadrado":
      const lado = parseFloat(prompt("Ingresa el lado del cuadrado:"));
      area = lado * lado;
      break;

    case "rectangulo":
      const baseR = parseFloat(prompt("Ingresa la base del rectángulo:"));
      const alturaR = parseFloat(prompt("Ingresa la altura del rectángulo:"));
      area = baseR * alturaR;
      break;

    case "circulo":
      const radio = parseFloat(prompt("Ingresa el radio del círculo:"));
      area = Math.PI * Math.pow(radio, 2);
      break;

    case "triangulo":
      const baseT = parseFloat(prompt("Ingresa la base del triángulo:"));
      const alturaT = parseFloat(prompt("Ingresa la altura del triángulo:"));
      area = (baseT * alturaT) / 2;
      break;

    default:
      alert("Figura no válida. Usa: cuadrado, rectangulo, circulo o triangulo.");
      return;
  }

  alert(`El área del ${figura} es: ${area.toFixed(2)}`);
}

calcularArea();

