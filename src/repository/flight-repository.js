const { Op } = require('sequelize');
const { Flights, Flight }=require('../models/index');

class FlightRepository {

    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        // if(data.minPrice && data.maxPrice){
        //     Object.assign(filter,{
        //         [Op.and]: [
        //             { price: {[Op.gte]: data.minPrice} },
        //             { price: {[Op.lte]: data.maxPrice} }
        //         ]
        //     })
        // }
        let priceFilter = [];
        if(data.minPrice){
            //Object.assign(filter,{price:{[Op.gte]:data.minPrice} });
            priceFilter.push({price:{[Op.gte]:data.minPrice} });
        }
        if(data.maxPrice){
            //Object.assign(filter,{price:{[Op.lte]:data.maxPrice} });
            priceFilter.push({price:{[Op.lte]:data.maxPrice} });
        }
        Object.assign(filter,{[Op.and]: priceFilter});
        return filter;
    }

    async createFlight(data){
        try{
            const flight = await Flights.create(data);
            return flight;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getFlight(id){
        try{
            const flight = await Flights.findByPk(id);
            return flight;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllFlights(filter){
        try{
            const filterObject = this.#createFilter(filter);
            const flights = await Flights.findAll({
                where: filterObject
            });
            return flights;
            
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }  
    async updateFlights(flightId, data) {
        try {
            await Flights.update(data, {
                where: {
                    id: flightId
                }
            });
            
            // Fetch and return the updated flight
            const updatedFlight = await Flights.findByPk(flightId);
            return updatedFlight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    } 

}

module.exports = FlightRepository;