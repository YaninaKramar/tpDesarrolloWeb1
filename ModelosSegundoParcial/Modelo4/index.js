const containerUni = document.getElementById("universidad");
const textoUni = document.getElementById("textoUniversidad");

const inputNombre = document.getElementById("nombre");
console.log(inputNombre);

const inputColor = document.getElementById("color");
console.log(inputColor);

const blanco = document.getElementById("blanco");
const gris = document.getElementById("gris");
const amarillo = document.getElementById("amarillo");

const cambiarABlanco = () => {
  textoUni.classList.remove("amarillo");
  textoUni.classList.remove("gris");
  textoUni.classList.add("blanco");
};

const cambiarAGris = () => {
  textoUni.classList.remove("amarillo");
  textoUni.classList.remove("blanco");
  textoUni.classList.add("gris");
};
const cambiarAAmarillo = () => {
  textoUni.classList.remove("blanco");
  textoUni.classList.remove("gris");
  textoUni.classList.add("amarillo");
};

inputColor.addEventListener("change", function () {
  let colorSeleccionado = this.value;
  console.log(colorSeleccionado);
  if (colorSeleccionado === "Rojo") {
    containerUni.classList.remove("verde");
    containerUni.classList.remove("azul");
    containerUni.classList.add("rojo");
  } else if (colorSeleccionado === "Verde") {
    containerUni.classList.remove("rojo");
    containerUni.classList.remove("azul");
    containerUni.classList.add("verde");
  } else if (colorSeleccionado === "Azul") {
    containerUni.classList.remove("rojo");
    containerUni.classList.remove("verde");
    containerUni.classList.add("azul");
  } else {
    containerUni.classList.remove("rojo");
    containerUni.classList.remove("verde");
    containerUni.classList.remove("azul");
  }
});

inputNombre.addEventListener("change", function () {
  let valorSeleccionado = this.value;
  console.log(valorSeleccionado);
  if (valorSeleccionado === "INICIO") {
    textoUni.textContent = "Universidad";
  } else {
    textoUni.textContent = valorSeleccionado;
  }
});

blanco.addEventListener("click", cambiarABlanco);
gris.addEventListener("click", cambiarAGris);
amarillo.addEventListener("click", cambiarAAmarillo);
