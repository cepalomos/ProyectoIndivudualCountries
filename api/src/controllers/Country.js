const { dbPaises, getPaises, dbGuardarPaises, dbTodosPaises, dbNamePaises } = require("../adapter/Country");

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
        return res.json(paises);
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