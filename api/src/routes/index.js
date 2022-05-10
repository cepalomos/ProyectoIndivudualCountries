const { Router } = require('express');
const country = require('./Country.js');
const actividad = require('./Activity.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use("/countries",country)
router.use("/activity",actividad)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;
