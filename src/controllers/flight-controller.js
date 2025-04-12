const { FlightService } = require('../services/index');
const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,

        }
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: 'Flight created successfully'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({  // Changed from res.json(500).json
            data: {},
            success: false,
            message: 'Unable to create flight',
            err: error.message || 'Internal Server Error'  // Better error handling
        });
    }
}

const getAll = async (req, res) => {
    try {
        const flight = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: flight,
            success: true,
            err: {},
            message: 'Flight fetched successfully'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Unable to fetch flight',
            err: error.message || 'Internal Server Error'  // Better error handling
        });
    }
}

module.exports = {
    create,
    getAll
}