import express from 'express'
import mongoose from 'mongoose'
import apiRoutes from './api-routes.js'

const app = express();
const DB_URL =  'mongodb+srv://admin:admin_5@cluster0.uc3m9.mongodb.net/cars?retryWrites=true&w=majority'
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api', apiRoutes);

const startApp = async()=>{
    try{
        await mongoose.connect(DB_URL, { useNewUrlParser: true });
        app.listen(port, function () {
            console.log("Server started on port " + port);
        });
    } catch(e){
        console.log(e)
    }
}

startApp()

export default app
