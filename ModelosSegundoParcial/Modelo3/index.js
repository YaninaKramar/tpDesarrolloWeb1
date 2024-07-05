const agregar = document.querySelector(".boton-agregar");
const insertarProducto = document.querySelector("#insertar-producto");
const insertarPrecio = document.querySelector("#insertar-precio");
const listaProductos = document.querySelector(".lista-productos");
const total = document.querySelector(".monto-to1tal");
let monto = 0;

agregar.addEventListener("click", validarProducto);

function validarProducto(evento) {
  evento.preventDefault();

  if (insertarProducto.value !== "" && insertarPrecio.value !== "") {
    const nuevoProducto = document.createElement("li");
    //cada item de producto
    nuevoProducto.textContent =
      insertarProducto.value + " ($" + insertarPrecio.value + ")";
    listaProductos.appendChild(nuevoProducto);

  insertarProducto.value = "";
  insertarPrecio.value = "";
  //para borrar los inputs una vez insertado
}
