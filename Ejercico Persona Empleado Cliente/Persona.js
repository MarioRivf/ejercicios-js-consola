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
        return `id: ${this.id_persona} Nombre: ${this._nombre} Apellido: ${this._apellido} Edad: ${this._edad}`;
    }

    toString() {
        return this.nombreCompleto();
    }
}