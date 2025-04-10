const express=require('express');

const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const ApiRoutes=require('./routes/index');

const db = require('./models/index');
const {Airplane}=require('./models/index');

const setupAndStartServer = async()=>{


    //creating the express object
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);
    app.listen(PORT,async()=>{
        console.log(`Server is running on port ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});

        }
        await Airplane.create({
            modelNumber: 'Bombardier CRJ-200',
        });
    });
}

setupAndStartServer();

//working as of now