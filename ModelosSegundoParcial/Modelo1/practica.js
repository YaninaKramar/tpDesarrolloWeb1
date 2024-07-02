const siguiente = document.querySelector(".siguiente");
siguiente.addEventListener("click", operacion);

function operacion(evento) {
  evento.preventDefault();
  const operacionElegida = document.querySelector(
    'input[name="operacion"]:checked'
  );
  //filtra solo la operación elegida
  const cantidadNumeros = document.querySelector("#cantidadNumeros");
  window.location.href = `resultado.html?operacion=${operacionElegida.value}&cantidadNumeros=${cantidadNumeros.value}`;
  //importante poner .value, sino no agarra lo que se ingresa (agregar a cada operación un value="nombreOperacion")
  //en el url se escribe primero el nombre del archivo html, los signos de pregunta simbolizan un espacio,
  //después los valores que querés guardar, para después llamarlos, guardar los valores con el .value,
  //y si se quiere agregar más datos, se usa el &.
}
