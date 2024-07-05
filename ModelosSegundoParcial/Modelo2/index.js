const PELICULAS = [
  {
    nombre: "El Rey León",
    año: 1994,
    resumen:
      "Simba, un joven león, se enfrenta a su destino como rey de la sabana.",
  },
  {
    nombre: "Toy Story",
    año: 1995,
    resumen:
      "Juguetes cobran vida y enfrentan aventuras mientras su dueño, Andy, crece.",
  },
  {
    nombre: "Buscando a Nemo",
    año: 2003,
    resumen: "Un pez payaso busca a su hijo perdido en el vasto océano.",
  },
  {
    nombre: "Frozen",
    año: 2013,
    resumen:
      "Dos hermanas enfrentan peligros en un reino helado mientras buscan redención.",
  },
  {
    nombre: "El viaje de Chihiro",
    año: 2001,
    resumen:
      "Una niña se aventura en un mundo mágico para salvar a sus padres.",
  },
  {
    nombre: "Up",
    año: 2009,
    resumen:
      "Un anciano y un niño vuelan en una casa con globos para cumplir un sueño.",
  },
  {
    nombre: "Shrek",
    año: 2001,
    resumen:
      "Un ogro emprende una misión para rescatar a una princesa y encontrar su paz.",
  },
  {
    nombre: "WALL-E",
    año: 2008,
    resumen:
      "Un robot recolector de basura descubre el amor y un futuro mejor para la humanidad.",
  },
  {
    nombre: "Los increibles",
    año: 2004,
    resumen:
      "Una familia de superhéroes lucha contra un villano mientras intenta vivir una vida normal.",
  },
  {
    nombre: "Moana",
    año: 2016,
    resumen:
      "Una joven navegante se embarca en una aventura para salvar su isla.",
  },
  {
    nombre: "Coco",
    año: 2017,
    resumen:
      "Un niño viaja al mundo de los muertos para descubrir su herencia musical.",
  },
  {
    nombre: "Zootopia",
    año: 2016,
    resumen:
      "Una conejita policía y un zorro estafador desvelan una conspiración en la ciudad.",
  },
  {
    nombre: "Ratatouille",
    año: 2007,
    resumen:
      "Una rata con talento culinario se convierte en chef en un prestigioso restaurante de París.",
  },
  {
    nombre: "La bella y la bestia",
    año: 1991,
    resumen:
      "Una joven se enamora de una bestia encantada en su castillo mágico.",
  },
  {
    nombre: "Aladdin",
    año: 1992,
    resumen:
      "Un joven encuentra una lámpara mágica y busca ganar el corazón de una princesa.",
  },
  {
    nombre: "Monsters, Inc.",
    año: 2001,
    resumen:
      "Monstruos que asustan niños descubren la risa como fuente de energía.",
  },
  {
    nombre: "Enredados",
    año: 2010,
    resumen:
      "Rapunzel, con su largo cabello mágico, escapa de su torre para descubrir el mundo.",
  },
  {
    nombre: "Mi villano favorito",
    año: 2010,
    resumen:
      "Un villano adopta a tres niñas huérfanas y descubre el poder del amor.",
  },
  {
    nombre: "Como entrenar a tu dragón",
    año: 2010,
    resumen: "Un joven vikingo se hace amigo de un dragón y cambia su mundo.",
  },
  {
    nombre: "Big Hero 6",
    año: 2014,
    resumen:
      "Un joven prodigio y su robot inflable luchan contra el crimen en San Fransokyo.",
  },
];

const input = document.querySelector(".input-filtro");
const seccionPelis = document.querySelector(".peliculas");

function funcionalidadInput() {
  const buscar = input.value.toLowerCase();
  //le da el valor que el usuario pone en el input y lo pone minúscula para comparar iguales
  const peliculasFiltradas = PELICULAS.filter(function filtrarPeliculas(
    pelicula
  ) {
    return pelicula.nombre.toLowerCase().includes(buscar);
  });
  //el filter crea un array con los elementos que pasen la función específica
  //el includes devuelve true o false si contiene el elemento
  //a pelicula lo hace minúscula para comparar iguales
  //lo returna para formar el array filtrado

  mostrarPeliculas(peliculasFiltradas);
}
function mostrarPeliculas(peliculas) {
  seccionPelis.innerHTML = "";
  //para vaciar cada vez que se llame, sino sobreescribe

  for (let i = 0; i < peliculas.length; i++) {
    let cadaPeli = document.createElement("div");
    cadaPeli.innerHTML = `${peliculas[i].nombre} (${peliculas[i].año})`;
    seccionPelis.appendChild(cadaPeli);
  }
  //recorre el array que dispone de peliculas y crea un div por cada una,
  //le asigna nombre y año a cada una, y lo añade a la sección de las pelis
}
input.addEventListener("input", funcionalidadInput);
mostrarPeliculas(PELICULAS);
//para que muestre todas las pelis si no se inserta nada en el input
