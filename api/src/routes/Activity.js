const {Router} = require('express');
const Activity = require('../controllers/Activity');
const router = Router();
const actividad = new Activity();

router.post("/",actividad.postActivity)

module.exports = router;