const { Op } = require('sequelize');

const { City } =require('../models/index');

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({
                name 
            })
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async deleteCity(CityId){
        try{
            await City.destroy({
                where:{
                    id: CityId
                }
            });
            return true;
        }catch(error){
            throw {error};
        }
    }
    async updateCity(cityId, data){
        try{
            //The below approach works but wont return updsted object
            //const city = await City.update(data, {
            //    where:{
            //        id: cityId
            //    }
            //});
            //return city;
            const city = await City.findByPk(cityId);
            city.name=data.name;
            await city.save();
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        } catch (error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getAllCities(filter){ //filter is optional
        try{
            if(filter.name){
                const cities = await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports= CityRepository;