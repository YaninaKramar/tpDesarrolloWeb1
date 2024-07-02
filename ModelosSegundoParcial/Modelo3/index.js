const agregar = document.querySelector(".boton-agregar");
const insertarProducto = document.querySelector("#insertar-producto");
const insertarPrecio = document.querySelector("#insertar-precio");
const listaProductos = document.querySelector(".lista-productos");
const total = document.querySelector(".monto-total");
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

    monto += parseFloat(insertarPrecio.value);
    //importante el parsefloat, sino lo toma como un string
    total.textContent = `TOTAL: ${monto}`;
  }
  insertarProducto.value = "";
  insertarPrecio.value = "";
  //para borrar los inputs una vez insertado
}
