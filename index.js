/**
 * PROYECTO: SIMULADOR DE COMPRAS (ALKEMY)
 * Requerimientos: Arreglos, Objetos, Funciones, Ciclos y Condicionales.
 */

// 1. Catálogo de productos (Arreglo de Objetos)
const catalogo = [
    { id: 1, nombre: "Laptop Gamer", precio: 1200 },
    { id: 2, nombre: "Mouse Óptico", precio: 25 },
    { id: 3, nombre: "Teclado Mecánico", precio: 80 },
    { id: 4, nombre: "Monitor 24'", precio: 200 }
];

// 2. Función modular para cálculos matemáticos (Lección 4)
function aplicarRecargoODescuento(monto, factor) {
    return monto * factor;
}

// 3. Función para procesar el pago (Lección 2: Switch)
function procesarPago(subtotal) {
    let seleccion = prompt(
        "¿Cómo deseas pagar?\n" +
        "1. Efectivo (10% desc)\n" +
        "2. Tarjeta (Precio base)\n" +
        "3. Crédito (5% recargo)"
    );

    let total;
    switch (seleccion) {
        case "1":
            total = aplicarRecargoODescuento(subtotal, 0.90);
            alert("✅ Aplicado 10% de descuento por efectivo.");
            break;
        case "2":
            total = subtotal;
            alert("✅ Pago con tarjeta procesado.");
            break;
        case "3":
            total = aplicarRecargoODescuento(subtotal, 1.05);
            alert("⚠️ Se aplicó un 5% de recargo por crédito.");
            break;
        default:
            alert("❌ Opción no válida. Se aplicará precio base.");
            total = subtotal;
    }
    return total;
}

// 4. Función principal que orquestadora todo el simulador
function iniciarSimulador() {
    console.log("--- Iniciando nueva simulación ---");

    // Mostrar catálogo usando un ciclo (Lección 3: forEach)
    let menu = "Bienvenido. Elija un producto por su número:\n";
    catalogo.forEach(producto => {
        menu += `${producto.id}. ${producto.nombre} ($${producto.precio})\n`;
    });

    let seleccionId = Number(prompt(menu));

    // Buscar producto en el arreglo (Lección 5: Objetos)
    let producto = catalogo.find(p => p.id === seleccionId);

    // Validación de entrada
    if (!producto) {
        alert("⚠️ El producto seleccionado no existe.");
        return;
    }

    let cantidad = Number(prompt(`¿Cuántas unidades de "${producto.nombre}" desea comprar?`));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("⚠️ Cantidad no válida.");
        return;
    }

    // Cálculo y cierre
    let subtotal = producto.precio * cantidad;
    let totalFinal = procesarPago(subtotal);

    alert(`RESUMEN DE COMPRA:\n------------------\nProducto: ${producto.nombre}\nCantidad: ${cantidad}\nTotal Final: $${totalFinal.toFixed(2)}`);
    
    console.log(`Compra finalizada. Total: $${totalFinal}`);
}