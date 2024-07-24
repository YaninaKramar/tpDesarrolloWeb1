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
let numero1 = 0;
let numero2 = 0;
let numero3 = 0;
let numero4 = 0;
let numero5 = 0;
let numero6 = 0;
let numero7 = 0;
let numero8 = 0;
let numero9 = 0;
let numero10 = 0;
opcion1.addEventListener("change", () => {
  console.log(opcion1.value);
  numero1 = parseFloat(opcion1.value);
  console.log(numero1);
  console.log(typeof numero1);
  irSumando();
});
opcion2.addEventListener("change", () => {
  numero2 = parseFloat(opcion2.value);
  console.log(numero2);
  irSumando();
});
opcion3.addEventListener("change", () => {
  numero3 = parseFloat(opcion3.value);
  console.log(numero3);
  irSumando();
});
opcion4.addEventListener("change", () => {
  numero4 = parseFloat(opcion4.value);
  console.log(numero4);
  irSumando();
});
opcion5.addEventListener("change", () => {
  numero5 = parseFloat(opcion5.value);
  console.log(numero5);
  irSumando();
});
opcion6.addEventListener("change", () => {
  numero6 = parseFloat(opcion6.value);
  console.log(numero6);
  irSumando();
});
opcion7.addEventListener("change", () => {
  numero7 = parseFloat(opcion7.value);
  console.log(numero7);
  irSumando();
});
opcion8.addEventListener("change", () => {
  numero8 = parseFloat(opcion8.value);
  console.log(numero4);
  irSumando();
});
opcion9.addEventListener("change", () => {
  numero9 = parseFloat(opcion9.value);
  console.log(numero9);
  irSumando();
});
opcion10.addEventListener("change", () => {
  numero10 = parseFloat(opcion10.value);
  console.log(numero10);
  irSumando();
});

function irSumando() {
  let sumaDeNotas =
    numero1 +
    numero2 +
    numero3 +
    numero4 +
    numero5 +
    numero6 +
    numero7 +
    numero8 +
    numero10 +
    numero9;
  notafinal.removeAttribute("readonly");
  notafinal.value = sumaDeNotas;
  notafinal.setAttribute("readonly", true);
}
