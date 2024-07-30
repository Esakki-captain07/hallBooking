import bookingModel from "../model/bookingModel.js";


const checkAvailablity = async(roomId,startTime,endTime)=>{
    try {
        let sDT = new Date(startTime).toISOString()
        let eDT = new Date(endTime).toISOString()
        let booking = await bookingModel.find(
            {
                roomId:roomId,
                startTime:{$lte:sDT},
                endTime:{$gte:eDT}
            }
    )
        return booking.length===0
    } catch (error) {
        throw error
    }
}


const createBooking = async(req,res)=>{
    try {
        let {customerName,roomId,startTime,endTime} = req.body
        
        if(await checkAvailablity(roomId,startTime,endTime))
        {
            await bookingModel.create({
                customerName,
                roomId,
                startTime:new Date(startTime),
                endTime:new Date(endTime)
            })

            res.status(201).send({
                message:"Booking Created Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:"Room Already Booked for Selected Time"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const customerBookingDetails = async (req, res) => {
    try {

        let customerBookings = await bookingModel.find();

        let customerData = {};

        customerBookings.forEach(booking => {
            const { customerName, roomId, startTime, endTime, status } = booking;
            if (!customerData) {
                customerData = {
                    customerName,
                    roomId,
                    startTime,
                    endTime,
                    status,
                };
            }
        });

        let results = Object.values(customerData);

        res.status(200).send({
            message: "Customer booking details fetched successfully",
            data: results
        });
        
    } catch (error) {
        console.error('Error fetching customer booking details:', error);
        res.status(500).send({
            message: error.message || "Internal Server Error"
        });
    }
};



const getAllBookedData = async (req, res) => {
    try {
        const { roomId } = req.params; 
        
        let filter = {};
        if (roomId) {
            filter.roomId = roomId;
        }

        let bookings = await bookingModel.find(filter);


        let results = bookings.map(booking => ({
            roomId: booking.roomId, 
            status: booking.status,
            customerName: booking.customerName,
            startTime: booking.startTime,
            endTime: booking.endTime
        }));

        res.status(200).send({
            message: "Data Fetch Successful",
            data: results
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Internal Server Error",
            err
        });
    }
};

export default {
    createBooking,
    getAllBookedData,
    customerBookingDetails
}