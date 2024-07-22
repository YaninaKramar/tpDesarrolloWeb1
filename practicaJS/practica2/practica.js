const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.style.color = "red";
titulo.classList.add("background");
const p = document.querySelector("p");
console.log(p);
p.classList.remove("background");

const botonAgregar = document.getElementById("btn");
console.log(botonAgregar);

const una = document.getElementById("una");
const dos = document.getElementById("dos");
const divTabla = document.getElementById("containerTablaDinamica");

let monto = 0;

const agregarItem = () => {
  let producto = document.getElementById("producto");
  let precio = document.getElementById("precio");
  let total = document.getElementById("total");

  monto += parseFloat(precio.value);
  const divItem = document.createElement("div");
  divItem.classList.add("borde");
  divItem.innerHTML = `${producto.value} $${precio.value}`;
  divTabla.appendChild(divItem);
  producto.value = " ";
  precio.value = " ";
  total.innerHTML = `Total: $${monto}`;
};

const columna = () => {
  divTabla.classList.remove("dosColumnas");
  divTabla.classList.add("unaColumna");
};

const columnas = () => {
  divTabla.classList.remove("unaColumna");
  divTabla.classList.add("dosColumnas");
};

una.addEventListener("click", columna);
dos.addEventListener("click", columnas);
botonAgregar.addEventListener("click", agregarItem);
