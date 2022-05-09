const { dbPaises, getPaises, dbGuardarPaises } = require("../adapter/Country");

class Country {
  async getCountries(req, res, next) {
    const { name } = req.query;
    try {
      const paises = await dbPaises();
      console.log(paises);
      if (!paises.length) {
        const apiPaises = await getPaises();
        await dbGuardarPaises(apiPaises);
        return res.status(201).json(apiPaises);
      }
      if(name){
        console.log("estamos buscando por body")
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Country;