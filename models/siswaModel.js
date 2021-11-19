const mongoose = require("mongoose")
const Schema = mongoose.Schema
const url = "mongodb+srv://sekolah:sekolah@sekolah.odmkn.mongodb.net/sekolah?retryWrites=true&w=majority"

const option = {
  useNewUrlParser:true
}
mongoose.connect(url, option)
  .then(()=> console.log("Database Terhubung"))
  
const siswaSchema = new Schema({
  nama:{
    type:String
  },
  umur:{
    type:Number
  }
})

module.exports = siswaModel = mongoose.model("siswa",siswaSchema)