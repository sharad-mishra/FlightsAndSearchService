const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        // if any of the required fields are missing, return a 400 error
        return res.status(400).json({
            data : {},
            success: false,
            message: 'Invalid request body for creating a flight',
            error: 'Missing required fields'
        });
    }
    next();
}

module.exports = {
    validateCreateFlight
}