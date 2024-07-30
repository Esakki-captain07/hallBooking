import { Router } from "express";
import bookingService from "../service/bookingService.js";

const routes = Router();

routes.post('/',bookingService.createBooking)
routes.get('/',bookingService.getAllBookedData)
routes.get('/customerBooked',bookingService.getAllBookedData)



export default routes