const nombre = document.getElementById("nombre");
const universidad = document.getElementById("uni");

const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const restablecer = document.getElementById("restablecer");
const contenido = document.getElementById("contenido");

const cambiarNombre = () => {
  universidad.innerHTML = nombre.value;
};

const cambiarACeleste = () => {
  contenido.classList.remove("violeta");
  contenido.classList.remove("naranja");
  contenido.classList.add("celeste");
};
const cambiarAVioleta = () => {
  contenido.classList.remove("celeste");
  contenido.classList.remove("naranja");
  contenido.classList.add("violeta");
};
const cambiarANaranja = () => {
  contenido.classList.remove("violeta");
  contenido.classList.remove("celeste");
  contenido.classList.add("naranja");
};

const cambiarRestablecer = () => {
  contenido.classList.remove("celeste");
  contenido.classList.remove("violeta");
  contenido.classList.remove("naranja");
};
console.log(contenido);
nombre.addEventListener("input", cambiarNombre);

celeste.addEventListener("click", cambiarACeleste);
violeta.addEventListener("click", cambiarAVioleta);
naranja.addEventListener("click", cambiarANaranja);
restablecer.addEventListener("click", cambiarRestablecer);
