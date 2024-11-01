class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo,departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}

function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());

    if( tipo instanceof Gerente){
        console.log("Es un objeto de tipo Gerente");
    }
    else if (tipo instanceof Empleado){
        console.log("Es de tipo empleado")
    }
    else {
        console.log("Es de tipo Object")
    }
}

let gerente = new Gerente("Mario", 25000, "Sistemas")

determinarTipo(gerente);
console.log(gerente.obtenerDetalles());

