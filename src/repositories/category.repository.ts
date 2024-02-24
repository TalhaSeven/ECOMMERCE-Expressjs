import Category from "../models/category.model"

interface ICategoryRepository {
    list(): Promise<Array<Category>>
    insert(title: string, description: string): Promise<Category | null>
}

class CategoryRepository implements ICategoryRepository {
    async list(): Promise<Array<Category>>{
        try {
            return await Category.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }

    async insert(title: string, description: string): Promise<Category | null>{
        try {
            return await Category.create({title, description})
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new CategoryRepository()