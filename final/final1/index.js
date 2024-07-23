const columna1 = document.getElementById("columna1");
const columna2 = document.getElementById("columna2");

const columna = () => {
  const containerPreguntas = document.querySelector(".preguntas");
  containerPreguntas.classList.add("preguntar1Columna");
};
const columnas = () => {
  const containerPreguntas = document.querySelector(".preguntas");
  containerPreguntas.classList.remove("preguntar1Columna");
};

columna1.addEventListener("click", columna);
columna2.addEventListener("click", columnas);

const opcion1 = document.getElementById("opciones1");
const opcion2 = document.getElementById("opciones2");
const opcion3 = document.getElementById("opciones3");
const opcion4 = document.getElementById("opciones4");
const opcion5 = document.getElementById("opciones5");
const opcion6 = document.getElementById("opciones6");
const opcion7 = document.getElementById("opciones7");
const opcion8 = document.getElementById("opciones8");
const opcion9 = document.getElementById("opciones9");
const opcion10 = document.getElementById("opciones10");

const notafinal = document.getElementById("notafinal");
let numero1;
opcion1.addEventListener("change", () => {
  numero1 = opcion1.value;
});

let sumaDeNotas = numero1;
notafinal.removeAttribute("readonly");
notafinal.value = sumaDeNotas;
notafinal.setAttribute("readonly", true);
