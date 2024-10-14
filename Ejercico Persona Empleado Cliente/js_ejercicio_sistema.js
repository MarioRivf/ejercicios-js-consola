// clase 1
class Persona {
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._id_persona = ++Persona.contadorPersonas;
        console.log(`Se ha creado una nueva persona: ${Persona.contadorPersonas}`);
    }

    get id_persona() {
        return this._id_persona;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    get edad() {
        return this._edad;
    }

    set edad(edad) {
        this._edad = edad;
    }

    nombreCompleto() {
        return `Persona id: ${this.id_persona} Nombre: ${this._nombre} Apellido: ${this._apellido} Edad: ${this._edad}`;
    }

    toString() {
        return this.nombreCompleto();
    }
}

class Empleado extends Persona {
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._id_empleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get id_empleado() {
        return this._id_empleado;
    }

    get sueldo() {
        return this._sueldo;
    }

    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    nombreCompleto() {
        return `${super.nombreCompleto()} Sueldo: ${this._sueldo} Empleado id: ${this._id_empleado}`;
    }
}

class Cliente extends Persona {
    static contadorCliente = 0;
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
        this._id_cliente = ++Cliente.contadorCliente;
        this._fechaRegistro = new Date();
    }

    get id_cliente() {
        return this._id_cliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }

    nombreCompleto() {
        return `${super.nombreCompleto()} Fecha de Registro: ${this._fechaRegistro} Cliente id: ${this._id_cliente}`;
    }
}

let persona1 = new Persona("Juan", "Perez", 25);
let empleado1 = new Empleado("Ana", "Gomez", 30, 2000);

console.log(persona1.toString());
console.log(empleado1.toString());

let cliente1 = new Cliente("Mario", "Rivas", 26)

console.log(cliente1.toString())