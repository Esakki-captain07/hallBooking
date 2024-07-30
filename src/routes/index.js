import {Router} from 'express'
import customerRoutes from './customerRoutes.js'
import roomRoutes from './roomRoutes.js'
import bookingRoutes from './bookingRoutes.js'
const routes = Router()

routes.get('/',(req,res)=>{
    res.send({
        message:"working"
    })
})

routes.use('/customer',customerRoutes)
routes.use('/room',roomRoutes)
routes.use('/booking',bookingRoutes)


export default routes