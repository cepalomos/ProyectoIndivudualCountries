const { dbPaises, getPaises, dbGuardarPaises, dbTodosPaises } = require("../adapter/Country");

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
        console.log("estamos buscando por body")
      }
      else {
        const dbPaises = await dbTodosPaises();
        return res.json(dbPaises);
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Country;