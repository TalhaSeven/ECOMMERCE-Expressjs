import { Router } from "express"
import AddressController from "../controllers/address.controller"

class AddressRoutes {
    router = Router()
    controller = new AddressController()

    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/cities', this.controller.getCities)
        this.router.get('/cities/:id', this.controller.getCities)
    }
}

export default new AddressRoutes().router
