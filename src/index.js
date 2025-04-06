const express=require('express');

const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const { City } =require('./models/index');
const cityRepositoryv= require('./repository/city-repository');

const setupAndStartServer = async()=>{


    //creating the express object
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,async()=>{
        console.log(`Server is running on port ${PORT}`);
        const repo= new cityRepositoryv();
        repo.createCity({name:'Bangalore'})
        //repo.createCity({name:'Mumbai'})
    })
}

setupAndStartServer();

//working as of now