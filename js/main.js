// Corralon 

// Clase

class producto {
    constructor(codigo, nombre, precio) {

        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = parseInt(precio);
    }
}

// Objetos

const cementoAvellaneda = new producto("SKU: 100", "Cemento Avellaneda", 1000);
const cementoLomaNegra = new producto("SKU: 101", "Cemento Loma Negra", 900);
const bolsaArena = new producto("SKU: 102", "Bolsa de Arena", 1000);
const ladrillo = new producto("SKU: 103", "Ladrillo", 59);
const revoqueFino = new producto("SKU: 104", "Revoque Fino", 1800);
const machimbre = new producto("SKU: 105", "Machimbre", 3000);
const yeso = new producto("SKU: 106", "Yeso", 700);
const ceresita = new producto("SKU: 107", "Ceresita", 1200);




console.log(cementoAvellaneda)

// Array de objetos

const productos = [cementoAvellaneda, cementoLomaNegra, bolsaArena, ladrillo, revoqueFino, machimbre, yeso, ceresita]


console.log(productos)

// Array carrito

const compraTotal = []

// Variables Globales

let compraAcumulada = 0;
let precioTotal = 0;
let opcion = 0;
let cantidadProducto = 0;

let nombreCliente = prompt("Corralon NEKI\nPara continuar, por favor ingrese su Nombre");
alert("Bienvenido " + nombreCliente + ". A continuacion podras elegir tus productos, gracias por elegirnos");

do {
    opcion = prompt(nombreCliente + " por favor, elige tu producto" + "\n 1) Cemento Avellaneda $1000 \n 2) Cemento Loma Negra $900 \n 3) Bolsa de Arena $1000 \n 4) Ladrillo $59 \n 5) Revoque Fino $1800 \n 6) Machimbre $3000 \n 7) Yeso $700 \n 8) Ceresita $1200")
    switch (opcion) {
        case "1":
            cantidadProducto = prompt("Ingrese la cantidad")
            precioTotal = precioProductos(cantidadProducto, cementoAvellaneda.precio)
            compraTotal.push(precioTotal)


            break;
        case "2":
            cantidadProducto = prompt("Ingrese la cantidad")
            precioTotal = precioProductos(cantidadProducto, cementoLomaNegra.precio)
            compraTotal.push(precioTotal)


            break;
        case "3":
            cantidadProducto = prompt("Ingrese la cantidad")
            precioTotal = precioProductos(cantidadProducto, bolsaArena.precio)
            compraTotal.push(precioTotal)


            break;
        case "4":
            cantidadProducto = prompt("Ingrese la cantidad")
            precioTotal = precioProductos(cantidadProducto, ladrillo.precio)
            compraTotal.push(precioTotal)


            break;
        case "5":
            cantidadProducto = prompt("Ingrese la cantidad")
            precioTotal = precioProductos(cantidadProducto, revoqueFino.precio)
            compraTotal.push(precioTotal)


            break;
        case "6":
            cantidadProducto = prompt("Ingrese la cantidad")
            precioTotal = precioProductos(cantidadProducto, machimbre.precio)
            compraTotal.push(precioTotal)


            break;
        case "7":
            cantidadProducto = prompt("Ingrese la cantidad")
            precioTotal = precioProductos(cantidadProducto, yeso.precio)
            compraTotal.push(precioTotal)


            break;
        case "8":
            cantidadProducto = prompt("Ingrese la cantidad")
            precioTotal = precioProductos(cantidadProducto, ceresita.precio)
            compraTotal.push(precioTotal)


            break;

        default:
            alert("No ingreso una opcion valida\nPor favor, ingrese una opcion correcta.")

            break;
    }
    compraAcumulada += precioTotal

    alert("Por el momento el monto de su compra es $" + compraAcumulada)

    opcion = prompt("1. Si desea agregar mas productos \n 2. Para pagar la compra")


} while (opcion != 2)

let pagarCompra = parseInt(prompt("El total de su compra es de : " + compraAcumulada + "$\nCon cuanto abonara?"))

while (pagarCompra < compraAcumulada) {
    pagarCompra = parseInt(prompt("El monto es insuficiente. Por favor ingrese el monto con el que va abonar. \n El total es : " + compraAcumulada + "$"))
}
if (pagarCompra === compraAcumulada) {
    alert("Gracias por tu compra!")
} else (pagarCompra > compraAcumulada)
let vuelto = pagarCompra - compraAcumulada
alert("Su vuelto es :" + vuelto + "$" + "\n Gracias por tu compra. Vuelva pronto!")







// Funciones

function precioProductos(cantidad, precio) {
    resultado = cantidad * precio
    alert("El total por estas unidadades es de " + resultado + "$")
    return resultado
}

function sumarProductos(array) {
    let resultado = 0
    for (i = 0; i < array.length; i++)
        resultado += array[i]
    return resultado;
}






// Console log prueba metodo push 

console.log(compraTotal)

console.log("El total de la compra es: " + sumarProductos(compraTotal) + "$")