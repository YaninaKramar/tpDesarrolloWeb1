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

alineacion.addEventListener("change", function () {
  console.log(alineacion.value);

  if (alineacion.value === "Justificado") {
    modificado.style.textAlign = "justify";
  } else if (alineacion.value === "Centrado") {
    modificado.style.textAlign = "center";
  } else if (alineacion.value === "Izquierda") {
    modificado.style.textAlign = "left";
  } else if (alineacion.value === "Derecha") {
    modificado.style.textAlign = "right";
  }
});
