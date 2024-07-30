import mongoose from './index.js'

const bookingSchema =new mongoose.Schema({
    customerName:{
        type:String,
        required:[true,'name is required']
    },
    roomId:{
        type:String,
        required:[true,'id is required']
    },
    startTime:{
        type:Date,
        required:true
    },
    endTime:{
        type:Date,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now
  },
    status:{
        type:Boolean,
        default:true
    }
})


export default new mongoose.model('booking',bookingSchema)