const { Activity } = require("../db.js");

async function dbActividad(nombre, dificultad, duracion, temporada, idPais) {
  try {
    const [actividad] = await Activity.findOrCreate({
      where: { nombre, dificultad, duracion, temporada },
    });
    const paisActividad = await actividad.addCountry(idPais,{through: "country_activity"});
    if(paisActividad[0]) return true;
    else return false;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = { dbActividad };
