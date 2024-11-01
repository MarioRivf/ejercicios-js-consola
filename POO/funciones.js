// // let miFuncion = function (){
// //     console.log("Saludos desde mi funcion");
// // }

// // miFuncion();

// // let miFuncionFlecha = () => {
// //     console.log("Saludos desde mi funcion flecha");
// // }


// const miFuncionFlecha = () =>console.log("Saludos desde mi funcion flecha");


//  miFuncionFlecha();

//  const saludar = () => {
//     return 'Saludos desde mi funcion flecha parte 2';
//  }

//  const saludar2 = () => 'Saludos desde mi funcion flecha 3';

//  console.log(saludar());

//  console.log(saludar2());

function miFuncion1 (){
    console.log('Funcion 1')
}

function miFuncion2 (){
    console.log('Funcion 2')
}

miFuncion1();
miFuncion2();

// Funcion de tipo Callback

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, oop2, functionCallBack){
    let res = op1 + oop2;
    functionCallBack(`Resultadoo es: ${res}`);
}

sumar(5,3,imprimir);

// Llamadas asincronas con uso setTimeout

function miFuncioCallBack(){
    console.log("Saludos asincrono despues de 3 segundos")
}

setTimeout(miFuncioCallBack, 3000);