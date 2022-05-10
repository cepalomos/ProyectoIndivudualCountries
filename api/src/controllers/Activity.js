const { dbActividad } = require("../adapter/Activity");


class Activity {
  async postActivity(req, res, next) {
    const { idPais, nombre, dificultad, duracion, temporada } = req.body;
    try {
      const actividad = await dbActividad(nombre,dificultad,duracion,temporada,idPais);
      actividad?res.status(201).send("Actividad Agregada"):res.status(400).send("No se agrego actividad o ya existe");
    } catch (error) {
      next(error)
    }
  }
}

module.exports=Activity;