const axios = require("axios");
const { Country, Activity } = require("../db.js");
const {Op} = require('sequelize');

async function getPaises() {
  try {
    const { data } = await axios.get("https://restcountries.com/v3/all");
    const paises = data.map(
      ({
        cca3: id,
        name: { official: nombre },
        flags: [imagen],
        region: continente,
        capital,
        subregion,
        area,
        population: poblacion,
      }) => {
        if (capital) capital = capital[0];
        else capital = "no tiene capital";
        return {
          id,
          nombre,
          imagen,
          continente,
          capital,
          subregion,
          area,
          poblacion,
        };
      }
    );
    return paises;
  } catch (error) {
    throw new Error(error);
  }
}

async function dbPaises() {
  try {
    const paises = await Country.findAll({
      include: {
        model: Activity,
        attributes: ["id", "nombre", "dificultad", "duracion", "temporada"],
        through: { attributes: [] },
      },
    });
    return paises;
  } catch (error) {
    throw new Error(error);
  }
}

async function dbGuardarPaises(arrayPaises) {
  try {
    await Country.bulkCreate(arrayPaises);
    return true;
  } catch (error) {
    throw new Error(error);
  }
}

async function dbTodosPaises() {
  try {
    const paises = await Country.findAll({
      attributes: ["id", "nombre", "imagen", "continente","poblacion"],
      include: {
        model: Activity,
        attributes: ["id","nombre"],
        through: { attributes: [] },
      },
    });
    return paises;
  } catch (error) {
    throw new Error(error);
  }
}

async function dbNamePaises(name){
  try {
    const paisesNombre = await Country.findAll({
      where: { nombre: { [Op.iLike]: `%${name}%` } },
      attributes: ["id", "nombre", "imagen", "continente"],
    });
    return paisesNombre;
  } catch (error) {
    throw new Error(error);
  }
}

async function dbPaisId(idPais){
  try{
  const pais = await Country.findByPk(idPais,{
    attributes:["id","nombre","imagen","continente","capital","subregion","area","poblacion"],
    include:{
      model:Activity,
      attributes:["id","nombre","dificultad","duracion","temporada"],
      through: { attributes: []},
    }
  });
  if(pais) return pais;
  else throw new Error({status:404,message:"Id de pais no existe"});
}catch(error){
  throw new Error(error);
};
}

module.exports = { getPaises, dbPaises, dbGuardarPaises, dbTodosPaises,dbNamePaises,dbPaisId };
