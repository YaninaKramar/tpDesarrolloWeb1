/*const films = [
  {
    title: "El planeta de los simios",
    type: "movie",
    category: "Sci-fi",
    imgSrc: "./films-home/simios.jpg",
    detailsLink: "./detalles/detalle-pelicula-plan-simios/index.html",
  },
  {
    title: "Shrek",
    type: "movie",
    category: "Comedia",
    imgSrc: "./films-home/shrek.webp",
    detailsLink: "./detalles/detalle-pelicula-shrek/index.html",
  },
  {
    title: "Titanic",
    type: "movie",
    category: "Romance",
    imgSrc: "./films-home/titanic.webp",
    detailsLink: "./detalles/detalle-pelicula-titanic/index.html",
  },
  {
    title: "Breaking Bad",
    type: "series",
    category: "Thriller",
    imgSrc: "./films-home/breaking_bad.jpg",
    detailsLink: "./detalles/detalle-serie-breaking-bad/index.html",
  },
  {
    title: "Stranger Things",
    type: "series",
    category: "Sci-fi",
    imgSrc: "./films-home/Stranger_Things.png",
    detailsLink: "./detalles/detalle-serie-stranger-things/index.html",
  },
  // Añade más películas y series según sea necesario
];

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  renderFilms(films);

  document
    .getElementById("site-search")
    .addEventListener("input", filterByName);
  document
    .getElementById("categorias")
    .addEventListener("change", filterByCategory);

  document.querySelectorAll("nav .interno").forEach((link) => {
    link.addEventListener("click", navigate);
  });

  document.querySelector(".logout-button").addEventListener("click", logout);
});

// Renderizar películas y series
function renderFilms(films) {
  const filmsContainer = document.querySelector(".films");
  filmsContainer.innerHTML = "";

  films.forEach((film) => {
    const filmElement = document.createElement("a");
    filmElement.href = film.detailsLink;
    filmElement.innerHTML = `<img alt="${film.title}" src="${film.imgSrc}" />`;
    filmsContainer.appendChild(filmElement);
  });
}

// Filtrar por nombre
function filterByName() {
  const query = document.getElementById("site-search").value.toLowerCase();
  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(query)
  );
  renderFilms(filteredFilms);
}

// Filtrar por categoría
function filterByCategory() {
  const category = document.getElementById("categorias").value;
  const filteredFilms = films.filter((film) => film.category === category);
  renderFilms(filteredFilms);
}

// Navegar a diferentes vistas
function navigate(event) {
  event.preventDefault();
  const target = event.target.getAttribute("href");

  if (target.includes("pantallaPrincipal")) {
    renderFilms(films);
  } else if (target.includes("principalSeries")) {
    const series = films.filter((film) => film.type === "series");
    renderFilms(series);
  } else if (target.includes("principalPeliculas")) {
    const movies = films.filter((film) => film.type === "movie");
    renderFilms(movies);
  } else if (target.includes("perfil")) {
    window.location.href = "perfil.html";
  }
}

// Cerrar sesión
function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

// dropdown.js

document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    dropdownContent.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (
      !dropdownContent.contains(event.target) &&
      !dropdownToggle.contains(event.target)
    ) {
      dropdownContent.classList.remove("show");
    }
  });
});
*/
// filtro.js

document.addEventListener("DOMContentLoaded", function () {
  const filmsSection = document.querySelector(".films");
  const films = filmsSection.querySelectorAll(".film, .serie");
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("site-search");
  const categorySelect = document.getElementById("categorias");
  const noResultsMessage = document.getElementById("no-results");
  const filterHomeButton = document.getElementById("filterHome");
  const filterMoviesButton = document.getElementById("filterMovies");
  const filterSeriesButton = document.getElementById("filterSeries");

  let currentFilter = "todos";

  const filterContent = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategories = Array.from(categorySelect.selectedOptions).map(
      (option) => option.value
    );
    let found = false;

    films.forEach((film) => {
      const altText = film.querySelector("img").alt.toLowerCase();
      const filmCategory = film.dataset.categoria;

      const matchesSearch = altText.includes(searchTerm);
      const matchesCategory =
        selectedCategories.includes("todos") ||
        selectedCategories.includes(filmCategory);
      const matchesType =
        currentFilter === "todos" || film.classList.contains(currentFilter);

      if (matchesSearch && matchesCategory && matchesType) {
        film.style.display = "block";
        found = true;
      } else {
        film.style.display = "none";
      }
    });

    noResultsMessage.style.display = found ? "none" : "block";
  };

  searchForm.addEventListener("input", function (event) {
    event.preventDefault();
    filterContent();
  });

  categorySelect.addEventListener("change", function () {
    filterContent();
  });

  filterHomeButton.addEventListener("click", function (event) {
    event.preventDefault();
    currentFilter = "todos";
    filterContent();
  });

  filterMoviesButton.addEventListener("click", function (event) {
    event.preventDefault();
    currentFilter = "film";
    filterContent();
  });

  filterSeriesButton.addEventListener("click", function (event) {
    event.preventDefault();
    currentFilter = "serie";
    filterContent();
  });
});


// menu.js
document.addEventListener("DOMContentLoaded", function () {
  const perfilButton = document.getElementById("perfil");
  const dropdownContent = perfilButton.nextElementSibling;

  perfilButton.addEventListener("click", function (event) {
      event.stopPropagation();
      dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
      if (!perfilButton.contains(event.target)) {
          dropdownContent.style.display = "none";
      }
  });
});
