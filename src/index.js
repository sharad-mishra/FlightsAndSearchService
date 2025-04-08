const express=require('express');

const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const ApiRoutes=require('./routes/index');


const setupAndStartServer = async()=>{


    //creating the express object
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);
    app.listen(PORT,async()=>{
        console.log(`Server is running on port ${PORT}`);
        
    })
}

setupAndStartServer();

//working as of now