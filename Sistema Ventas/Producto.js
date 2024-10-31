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
        //this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._id_orden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTO){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        }
        else{
            console.log('No se puede agregar mas productos')
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio
        }

        return totalVenta;
    }

    mostrarOrden(){
        let productoOrden = '';
        for(let producto of this._productos){
            productoOrden += '\n{' + producto.toString() + '}';
        }

        console.log(`Orden: ${this._id_orden} Total: C$${this.calcularTotal()} Productos: ${productoOrden} `);
    }
}

let producto1 = new Producto("Leche", 20);
let producto2 = new Producto("Cafe", 3);
//console.log(producto1.toString());
//console.log(producto2.toString());

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('Producto prueba 3', 100);

orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);

orden2.mostrarOrden();