const mongoose = require("mongoose")

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },(err, res)=>{
        console.log('----------------------------------')
        if(!err){
            console.log('**** CONEXION CORRECTA ****');
        }else{
            console.log('**** CONEXION INCORRECTA ****');
            console.log('----------------------------------')
            console.log(err);
        }
    });
}

module.exports = dbConnect