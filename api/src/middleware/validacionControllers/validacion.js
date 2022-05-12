const validacion = require('../validacionAdapter/validacion.js');

module.exports = class Validacion{
    postValidacion(req,res,next){
        const data = req.body;
        const error = validacion(data);
        if(error.length) return res.status(400).json(error);
        next()
    }
}

