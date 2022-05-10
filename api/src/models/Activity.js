const {DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('activity',{
        id:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false,
            primaryKey: true
        },
        nombre:{
            type:DataTypes.STRING
        },
        dificultad:{
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1,5],
                isNumeric: true,
                min: 1,
                max: 5
            },
        },
        duracion:{
            type:DataTypes.INTEGER,

        },
        temporada: {
            type: DataTypes.ENUM('verano', 'otono', 'invierno','primavera')
          },
    })
}