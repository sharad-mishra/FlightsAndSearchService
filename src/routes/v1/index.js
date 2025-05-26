const express = require('express');

const { FlightMiddlewares } = require('../../middlewares/index');

const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');    
const AirportController = require('../../controllers/airport-controller');

const router = express.Router();

router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.post('/city', CityController.create);
router.patch('/city/:id', CityController.update);

router.post('/flights',FlightMiddlewares.validateCreateFlight, FlightController.create);
router.get('/flights', FlightController.getAll);
router.get('/flights/:flightId', FlightController.get);
router.patch('/flights/:flightId', FlightController.update);
router.post('/airports', AirportController.create);


module.exports = router;
