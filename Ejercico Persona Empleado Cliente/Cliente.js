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
        return `Cliente ${super.nombreCompleto()} Fecha de Registro: ${this._fechaRegistro}`;
    }

    toString(){
        return this.nombreCompleto()
    }
}