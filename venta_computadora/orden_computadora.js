class DispositivoEntrada {
    constructor(tipoEntrada, marca){
        this._tipo_entrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipo_entrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipo_entrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada {
    static contadorRaton = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._id_raton = ++Raton.contadorRaton;
    }
    get id_raton(){
        return this._id_raton;
    }
    toString(){
        return `Raton: [id de raton: ${this._id_raton}, tipo de entrada: ${this._tipo_entrada}, marca: ${this._marca}]`
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._id_teclado = ++Teclado.contadorTeclado;
    }
    get id_teclado(){
        return this._id_teclado;
    }
    toString(){
        return `Teclado: [id de teclado: ${this._id_teclado}, tipo de entrada: ${this._tipo_entrada}, marca: ${this._marca}]`
    }
}

class Monitor {
    static contadorMonitor = 0;

    constructor(marca, tamano){
        this._id_monitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamano= tamano;
    }
    get id_monitor(){
        return this._id_monitor;
    }
    toString(){
        return `Monitor: [id monitor: ${this._id_monitor}, marca: ${this._marca}, tamano: ${this._tamano}]`
    }
}

class Computadora {
    static contadorComputadora = 0;

    constructor(nombre, monitor, teclado, raton){
        this._id_computadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    toString(){
        return `Computadora: ${this._id_computadora}: ${this._nombre} \n marca: ${this._monitor} \n teclado: ${this._teclado} \n raton: ${this._raton}`
    }
}

class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._id_orden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._id_orden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadoraOrden = '';
        for(let computadora of this._computadoras){
            computadoraOrden += `\n${computadora}`;
        }

        console.log(`Orden: ${this._id_orden}, Computadoras: ${computadoraOrden}`);
    }
}


let raton1 = new Raton('USB', 'Logitech');
console.log( raton1.toString() );

let raton2 = new Raton('USB', 'HP');
console.log( raton2.toString() );

let teclado1 = new Teclado('Bluetooth', 'MageGee');
console.log(teclado1.toString());
let monitor1 = new Monitor('Dell', 17);
console.log(monitor1.toString());
let computadora1 = new Computadora('Dell', monitor1, teclado1, raton1);
console.log(`${computadora1}`);

let computadora2 = new Computadora('HP', monitor1, raton1, teclado1);
console.log(`${computadora2.toString()}`);

let orden1 = new Orden();

orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);

orden1.mostrarOrden();
