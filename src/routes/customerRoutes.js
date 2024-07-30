import { Router } from "express";
import customerService from "../service/customerService.js";

const routes = Router()

routes.get('/',customerService.getAllCustomers)
routes.post('/',customerService.createCustomers)
routes.get('/booked',customerService.customersBookedData)



export default routes