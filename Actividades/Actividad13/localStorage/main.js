// Selección de elementos del DOM
const contadorSpan = document.querySelector('nav span');
const botonAgregar = document.querySelector('main button');

// Clave para almacenar en localStorage
const STORAGE_KEY = 'cantidadCarrito';

// Función para obtener la cantidad actual guardada (o 0 si no existe)
function obtenerCantidadInicial() {
    const cantidadGuardada = localStorage.getItem(STORAGE_KEY);
    return cantidadGuardada ? parseInt(cantidadGuardada, 10) : 0;
}

// Inicialización del estado
let cantidadArticulos = obtenerCantidadInicial();

// Actualizar la interfaz al cargar la página
contadorSpan.textContent = cantidadArticulos;

// Evento click para incrementar y guardar en localStorage
botonAgregar.addEventListener('click', () => {
    cantidadArticulos += 1;
    contadorSpan.textContent = cantidadArticulos;
    localStorage.setItem(STORAGE_KEY, cantidadArticulos);
});
