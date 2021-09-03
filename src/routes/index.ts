import { Router } from "express";
import Book from "./Book";

class Index{
    public router: Router;

    constructor(){
        this.router = Router()
        this.route()
    }

    protected route(){
        const route: Router = this.router
        route.use('/book', Book)
    }
}

export default new Index().router