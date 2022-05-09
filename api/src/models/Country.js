const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type:DataTypes.STRING,
      allowNull:false,
      primaryKey:true,
      unique:true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    continente:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    capital:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    subregion:{
      type:DataTypes.STRING,
    },
    area:{
      type:DataTypes.DOUBLE,
    },
    poblacion:{
      type:DataTypes.DOUBLE,
    },
  });
};
