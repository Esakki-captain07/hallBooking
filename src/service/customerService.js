import customerModel from "../model/customerModel.js"
import bookingModel from "../model/bookingModel.js"
const getAllCustomers = async(req,res)=>{
    try {
        let users = await customerModel.find()
        res.status(200).send({
            message:'data fatched successfull',
            data:users
        })
        
    } catch (error) {
        res.status(400).send({
            message:"internel server error"
        })
    }
}

const createCustomers = async(req,res)=>{
    try {
        let user = await customerModel.findOne({firstName:req.body.firstName})
        if(!user)
        {
            await customerModel.create(req.body)

            res.status(201).send({
                message:"Employee Created Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:`Employee with email ${req.body.firstName} already exists`
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}


const customersBookedData = async (req, res) => {
    try {
        const { roomId } = req.query; 
        
        let filter = {};
        if (roomId) {
            filter.roomId = roomId;
        }

        let customerBookings = await bookingModel.find(filter);

        let results = customerBookings.map(booking => ({
            customerName: booking.customerName,
            roomId: booking.roomId, 
            startTime: booking.startTime,
            endTime: booking.endTime
        }));

        res.status(200).send({
            message: "Data Fetch Successful",
            data: results
        });
        
    } catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        });
    }
};


export default{
    getAllCustomers,
    createCustomers,
    customersBookedData
}