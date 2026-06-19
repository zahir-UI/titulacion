// Datos de productos
const products = [ /* ... mismo array que antes ... */ ];

// Renderizar productos
function renderProducts() {
    const grid = document.getElementById('products-grid');
    // ... (código similar al anterior)
}

// Carrito
let cart = [];

function addToCart(id) {
    // ... lógica
    updateCartCount();
    showToast("Producto añadido");
}

// Validación de formulario
document.getElementById('subscription-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const plan = document.getElementById('plan').value;

    let valid = true;

    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres");
        valid = false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert("Por favor ingresa un correo válido");
        valid = false;
    }

    if (!plan) {
        alert("Por favor selecciona un plan");
        valid = false;
    }

    if (valid) {
        alert("¡Suscripción exitosa! Gracias por elegir FreshMart.");
        this.reset();
        window.location = "index.html";

    }
});

// Funciones adicionales
function showToast(msg) { /* ... */ }
function toggleCart() { /* ... */ }
function updateCartCount() { /* ... */ }

// Responsive + Mobile Menu
window.addEventListener('resize', () => {
    console.log('Resolución:', window.innerWidth);
});

// Inicialización
window.onload = () => {
    renderProducts();
};