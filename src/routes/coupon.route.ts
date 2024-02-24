import { Router } from "express"
import CouponController from "../controllers/coupon.controller"

class CouponRoutes {
    router = Router()
    controller = new CouponController()

    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/', this.controller.getCoupons)
        this.router.post('/', this.controller.setCoupons)
    }
}

export default new CouponRoutes().router
