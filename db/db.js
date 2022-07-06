const mongoose= require(`mongoose`);
require(`dotenv`).config();

const dbConection = async () => {

try{ await mongoose.connect ( process.env.MONGO_CNN,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

})
console.log("base de datos conectada")
}catch { console.log("error a la hora de conectarse")}

}

module.exports = {dbConection}