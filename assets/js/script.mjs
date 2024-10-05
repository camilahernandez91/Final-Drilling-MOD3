import Producto from "./producto.mjs"
import Carrito from "./carrito.mjs"

let leche = new Producto("Leche", 1000)
let panDeMolde = new Producto("Pan de molde", 2000)
let queso = new Producto("Queso", 1200)
let mermelada = new Producto("Mermelada", 890)
let azucar = new Producto("Azúcar", 1300)

let productosDisponibles = [leche, panDeMolde, queso, mermelada, azucar]
let carrito = new Carrito()


function agregarAlCarrito(producto) {
    carrito.agregar(producto)
}

function detalleCarrito() {
    let agregadoAlCarrito = ""
    for (let i = 0; i < carrito.productos.length; i++) {
        agregadoAlCarrito += `${carrito.productos[i].cantidad} ${carrito.productos[i].nombre}\n`
    }
    return agregadoAlCarrito
}

function totalCompra() {
    let total = 0
    for (let i = 0; i < carrito.productos.length; i++) {
        total += carrito.productos[i].cantidad * carrito.productos[i].precio
    }
    return total
}

function detalleCompra() {
    let detalle = ""
    for (let i = 0; i < carrito.productos.length; i++) {
        detalle += `(${carrito.productos[i].cantidad}) ${carrito.productos[i].nombre} $${carrito.productos[i].cantidad * carrito.productos[i].precio}\n`
    }
    return detalle
}

function main() {
    let menu = true
    while (menu) {

        let elegirProducto = Number(prompt(`Productos disponibles:
    1. ${leche.nombre} $${leche.precio}
    2. ${panDeMolde.nombre} $${panDeMolde.precio}
    3. ${queso.nombre} $${queso.precio}
    4. ${mermelada.nombre} $${mermelada.precio}
    5. ${azucar.nombre} $${azucar.precio}\n
    Ingrese el número del producto que quiera agregar al carrito`))

        if (elegirProducto <= productosDisponibles.length && elegirProducto > 0) {

            let menu2 = true
            while (menu2) {
                let cantidadProducto = Number(prompt(`Ingrese la cantidad de unidades`))
                if (!isNaN(cantidadProducto) && cantidadProducto > 0) {
                    let productoSeleccionado = { ...productosDisponibles[elegirProducto - 1]}
                    productoSeleccionado.cantidad = cantidadProducto
                    agregarAlCarrito(productoSeleccionado)
                    alert(`Agregado al carrito:\n${detalleCarrito()}`)
                    menu2 = false
                } else {
                    alert("Ingrese cantidad")
                }
            }


            let agregarAlgoMas = prompt("¿Quiere agregar algo más? (s/n)")
            if (agregarAlgoMas == "n") {
                alert(`El total es $${totalCompra()}`)
                let terminarCompra = prompt("Terminar comprar (s/n)")
                if (terminarCompra == "s") {
                    alert(`Detalle:\n${detalleCompra()}\nTotal $${totalCompra()}`)
                    menu = false
                }
            }
        } else {
            alert("Ingrese número correcto")
        }
    }

}

console.log(main())
console.log(carrito)