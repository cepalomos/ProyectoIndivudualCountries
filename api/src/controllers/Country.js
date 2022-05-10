const { dbPaises, getPaises, dbGuardarPaises, dbTodosPaises, dbNamePaises, dbPaisId } = require("../adapter/Country");

class Country {
  async getCountries(req, res, next) {
    const { name } = req.query;
    try {
      const paises = await dbPaises();
      if (!paises.length) {
        const apiPaises = await getPaises();
        await dbGuardarPaises(apiPaises);
        const dbPaises = await dbTodosPaises();
        return res.status(201).json(dbPaises);
      }
      if(name){
        const paises = await dbNamePaises(name);
        if(paises.length)
        return res.json(paises);
        else return res.status(404).json({menssage:"No hay ningun pais que cumpla con ese criterio"})
      }
      else {
        const dbPaises = await dbTodosPaises();
        return res.json(dbPaises);
      }
    } catch (error) {
      next(error);
    }
  }

  async getCountriesId (req, res, next){
    const {idPais} = req.params;
    try {
      const pais = await dbPaisId(idPais.toUpperCase());
      return res.json(pais);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Country;