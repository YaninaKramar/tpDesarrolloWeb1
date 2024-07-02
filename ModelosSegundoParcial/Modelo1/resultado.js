const parametroOperacion = "operacion";
const parametroCantidad = "cantidadNumeros";
const url = new URL(document.location.href);
//agarré la url para conseguir los valores que guardé antes
const op = url.searchParams.get(parametroOperacion);
const cantidad = url.searchParams.get(parametroCantidad);
//agarré los parámetros, por ende ya tengo los valores asignados anteriormente

const inputs = document.querySelector(".input-del-main");
//lugar donde voy a crear los inputs

for (let i = 0; i < cantidad; i++) {
  const input = document.createElement("input");
  //crea el input
  input.type = "number";
  input.name = `${i}`;
  //para que tengan nombre diferente todos

  inputs.appendChild(input);
}

const calcular = document.querySelector(".calcular");
calcular.addEventListener("click", funcionCalcular);

function funcionCalcular() {
  const numeros = [];
  //creo un array para guardar los números que insertaré en los input
  for (let i = 0; i < cantidad; i++) {
    const cadainput = document.querySelector(`input[name="${i}"]`);
    //agarro cada input, con el nombre que les puse antes
    numeros.push(parseFloat(cadainput.value));
    //los guardo en el array, importante el .value para agarrar el valor
  }

  let resultado = 0;
  //siempre declarar antes

  //dependiendo el valor de la operación entra en cada if (por eso era importante definir el value en el html)
  if (op === "sumar") {
    for (let i = 0; i < numeros.length; i++) {
      resultado += numeros[i];
    }
  }
  if (op === "restar") {
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[0] === numeros[i]) {
        resultado += numeros[0];
      } else {
        resultado -= numeros[i];
      }
      //el primer número del primer input se suma al 0, para que los siguientes inputs le resten a ese valor
    }
  }
  if (op === "multiplicar") {
    resultado = 1;
    //no puede ser 0
    for (let i = 0; i < numeros.length; i++) {
      resultado *= numeros[i];
    }
  }

  const mostrarResultado = document.querySelector(".resultado");
  mostrarResultado.textContent = `RESULTADO: ${resultado}`;
}
