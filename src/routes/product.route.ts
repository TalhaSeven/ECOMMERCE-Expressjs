import { Router } from "express"
import ProductController from "../controllers/product.controller"
import MovementController from "../controllers/movement.controller"
import AuthController from "../controllers/auth.controller"

class ProductRoutes {
    router = Router()
    controller = new ProductController()
    movement = new MovementController()
    auth = new AuthController()

    constructor(){
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/', this.controller.getProducts)
        this.router.get('/confirm/enable/:id', this.controller.setProductEnable)
        this.router.get('/confirm/disable/:id', this.controller.setProductDisable)
        this.router.get('/delete/:id', this.controller.setProductDelete)
        this.router.get('/search/:search?', this.controller.search) // soru işareti koyunca bunuda => ('/search') içine dahil ediyor
        this.router.post('/add-basket', this.auth.addBodyUser, this.movement.addBasket)
        this.router.get('/:seo', this.controller.getProduct)
        this.router.post('/', this.controller.setProduct)
        this.router.put('/', this.controller.updateProduct)
    }
}

export default new ProductRoutes().router
