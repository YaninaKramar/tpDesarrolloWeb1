const textoModificado = document.getElementById("textoModificado");
const modificado = document.getElementById("modificado");

const drHouse = document.getElementById("drHouse");
const los100 = document.getElementById("los100");
const friends = document.getElementById("friends");

const colorFondo = document.getElementById("colorFondo");
const colorTexto = document.getElementById("colorTexto");
console.log(colorFondo.value);

drHouse.addEventListener("click", () => {
  textoModificado.innerHTML = drHouse.value;
});

los100.addEventListener("click", () => {
  textoModificado.innerHTML = los100.value;
});
friends.addEventListener("click", () => {
  textoModificado.innerHTML = friends.value;
});

colorFondo.addEventListener("change", function () {
  if (colorFondo.value === "gris") {
    modificado.classList.remove("amarillo");
    modificado.classList.remove("celeste");
    modificado.classList.add("gris");
  } else if (colorFondo.value === "celeste") {
    modificado.classList.remove("amarillo");
    modificado.classList.remove("gris");
    modificado.classList.add("celeste");
  } else if (colorFondo.value === "amarillo") {
    modificado.classList.remove("gris");
    modificado.classList.remove("celeste");
    modificado.classList.add("amarillo");
  } else if (colorFondo.value === "inicio") {
    modificado.classList.remove("amarillo");
    modificado.classList.remove("celeste");
    modificado.classList.remove("gris");
  }
});

colorTexto.addEventListener("change", function () {
  if (colorTexto.value === "verde") {
    textoModificado.classList.remove("naranja");
    textoModificado.classList.remove("rojo");
    textoModificado.classList.add("verde");
  } else if (colorTexto.value === "rojo") {
    textoModificado.classList.remove("naranja");
    textoModificado.classList.remove("verde");
    textoModificado.classList.add("rojo");
  } else if (colorTexto.value === "naranja") {
    textoModificado.classList.remove("verde");
    textoModificado.classList.remove("rojo");
    textoModificado.classList.add("naranja");
  } else if (colorTexto.value === "inicio") {
    textoModificado.classList.remove("naranja");
    textoModificado.classList.remove("rojo");
    textoModificado.classList.remove("verde");
  }
});
