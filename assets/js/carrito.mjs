class Carrito {
    constructor() {
        this.productos = [];
    }

    agregar(producto) {
        const productoExistente = this.productos.find(p => p.nombre === producto.nombre)

        if (productoExistente) {
            productoExistente.cantidad += producto.cantidad
        } else {
            this.productos.push(producto)
        }
    }
}

export default Carrito