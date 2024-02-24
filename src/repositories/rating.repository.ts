import Rating from "../models/rating.model"

interface IRatingRepository {
    list(): Promise<Array<Rating>>;
    insert(
        productId: number, 
        userId: number, 
        rating: number
        ): Promise<Rating | null>
}

class RatingRepository implements IRatingRepository {
    async list(): Promise<Array<Rating>>{
        try {
            return await Rating.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async insert(
        productId: number, 
        userId: number, 
        rating: number
        ): Promise<Rating | null>{
        try {
            return await Rating.create({
                productId, 
                userId, 
                rating
            })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new RatingRepository()