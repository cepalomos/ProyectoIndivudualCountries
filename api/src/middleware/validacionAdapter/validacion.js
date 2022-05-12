const {Activity} = require('../../db.js');

function validacion(data){
    const {idPais,nombre,dificultad,duracion,temporada} = data;
    const temporadaDb = Activity.rawAttributes.temporada.values;
    const regexId = /[A-Z]{3}/;
    const regexNombre = /^([a-zA-Z]|[^0-9]\S)([^0-9]*){1,}$/;
    let error = [];
    if(!regexId.test(idPais)) error.push({message:"Solo son letras mayusculas y tienen que ser 3 de estas"});
    if(!regexNombre.test(nombre)) error.push({message:"Solo son letras que se aceptan en la actividad"});
    if(dificultad>5 || dificultad<1) error.push({message:"Debe estar entre un valor de 1 a 5"});
    if(duracion<=0) error.push({message:"la duracion debe ser mayor a 0 minutos"});
    if(!(temporadaDb.includes(temporada))) error.push({message:"solo son validos los valores: verano, invierno, primavera, otono"});
    return error;
}

module.exports = validacion;