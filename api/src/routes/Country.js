const {Router} = require('express');
const Country = require('../controllers/Country');
const router = Router();
const country = new Country();

router.route("/").get(country.getCountries)

module.exports = router;