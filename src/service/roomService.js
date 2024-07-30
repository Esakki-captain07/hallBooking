import roomModel from "../model/roomModel.js";

const getAllRooms = async(req,res)=>{
   try {
    let rooms = await roomModel.find()
    res.status(200).send({
        message:'data fetched successfull',
        data:rooms
    })
    
   } catch (error) {
    res.status(400).send({
       message:error.message || "Internal Server Error"
    })
   }
    
}

const createRoom = async(req,res)=>{
    try {
        let room = await roomModel.findOne({name:req.body.name})
        if(!room){
            await roomModel.create(req.body)
            res.status(201).send({
                message:'room created successfull'
            })
        }
        else{
            res.status(400).send({
                message:'already room exesict in this name'
            })

        }
        
    } catch (error) {
        res.status(500).send({
             message:error.message || "Internal Server Error"
        })
        
    }
}


export default {
    getAllRooms,
    createRoom
}