const textopais = document.getElementById("textopais");

const textoInputPais = document.getElementById("textoInputPais");

const inputar = () => {
  textopais.innerHTML = textoInputPais.value;
};

textoInputPais.addEventListener("input", inputar);

const modificado = document.getElementById("modificado");

const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");

rojo.addEventListener("click", () => {
  modificado.classList.remove("azul");
  modificado.classList.remove("verde");
  modificado.classList.add("rojo");
});
verde.addEventListener("click", () => {
  modificado.classList.remove("azul");
  modificado.classList.remove("rojo");
  modificado.classList.add("verde");
});
azul.addEventListener("click", () => {
  modificado.classList.remove("verde");
  modificado.classList.remove("rojo");
  modificado.classList.add("azul");
});

const alineacion = document.getElementById("alineacion");
