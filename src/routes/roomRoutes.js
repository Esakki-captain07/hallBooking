import { Router } from "express";
import roomService from "../service/roomService.js";

const routes = Router()

routes.get('/',roomService.getAllRooms)
routes.post('/',roomService.createRoom)

export default routes