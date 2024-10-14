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
        return `Empleado ${super.nombreCompleto()} Sueldo: ${this._sueldo}`;
    }

    toString(){
        return this.nombreCompleto()
    }
}