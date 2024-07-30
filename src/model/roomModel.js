import mongoose from "./index.js";

const roomSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'room name is required']
    },
    capacity:{
        type:Number,
        required:[true,'capacity is required']
    },
    amenites:{
        type:Array,
        default:[]
    },
    pricePerHour:{
        type:Number,
        required:[true,'price is required']
    }

},
{
  collection:'room',
  versionKey:false
})
export default new mongoose.model('room',roomSchema)