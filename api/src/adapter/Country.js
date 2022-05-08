const axios = require("axios");

async function getPaises() {
  try {
    const { data } = await axios.get("https://restcountries.com/v3/all");
    const paises = data.map(
      ({
        cca3: id,
        name:{official:nombre},
        flags: [imagen,],
        region: continente,
        capital,
        subregion,
        area,
        population: poblacion,
      }) => {
          if(capital) capital=capital[0];
          else capital = "no tiene capital";
        return{
        id,
        nombre,
        imagen,
        continente,
        capital,
        subregion,
        area,
        poblacion,
      }}
    );
   return paises;
  } catch (error) {
    throw new Error(error);
  }
}


module.exports = { getPaises };
