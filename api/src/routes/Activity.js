const {Router} = require('express');
const Activity = require('../controllers/Activity');
const Validacion = require('../middleware/validacionControllers/validacion.js');
const router = Router();
const actividad = new Activity();
const validacion = new Validacion();

router.post("/",validacion.postValidacion,actividad.postActivity)

module.exports = router;