// script.js

document.addEventListener('DOMContentLoaded', function() {
    const universidadParagraph = document.getElementById('uni');
    const universidadSelector = document.querySelector('select[name="universidad-nombre"]');
    const fondoSelector = document.querySelector('select[name="colorFondo"]');
    const textoRadios = document.querySelectorAll('input[name="colorTexto"]');

    // Función para cambiar el contenido del párrafo al seleccionar una universidad
    universidadSelector.addEventListener('change', function() {
        const selectedUniversity = universidadSelector.value;
        switch (selectedUniversity) {
            case 'unlam':
                universidadParagraph.textContent = 'UNLAM';
                break;
            case 'uai':
                universidadParagraph.textContent = 'UAI';
                break;
            case 'unsam':
                universidadParagraph.textContent = 'UNSAM';
                break;
            default:
                universidadParagraph.textContent = 'Universidad';
                break;
        }
    });

    // Función para cambiar el color de fondo
    fondoSelector.addEventListener('change', function() {
        const color = fondoSelector.value;
        switch (color) {
            case 'rojo':
                universidadParagraph.style.backgroundColor = 'red';
                break;
            case 'azul':
                universidadParagraph.style.backgroundColor = 'blue';
                break;
            case 'verde':
                universidadParagraph.style.backgroundColor = 'green';
                break;
            default:
                universidadParagraph.style.backgroundColor = '';
                break;
        }
    });
});