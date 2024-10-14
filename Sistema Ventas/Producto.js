class Producto {
    static contadorProducto = 0;

    constructor(nombre, precio){
        this._id_producto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._id_producto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `Producto id: ${this._id_producto}, nombre: ${this._nombre}, precio: C$${this._precio}`
    }
}

class Orden{
    static contadorOrden = 0;
    static get MAX_PRODUCTO(){
        return 5;
    }

    constructor(){
        this._id_orden= ++Orden.contadorOrden;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
}

let producto1 = new Producto("Leche", 20);
let producto2 = new Producto("Cafe", 3);
console.log(producto1.toString());
console.log(producto2.toString());