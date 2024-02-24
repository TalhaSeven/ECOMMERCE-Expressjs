import ProductCategory from "../models/product_category"

interface IProductCategoryRepository {
    list(): Promise<Array<ProductCategory>>;
    insert(
        productId: number,
        categoryId: number
    ): Promise<ProductCategory | null>;
}

class ProductCategoryRepository implements IProductCategoryRepository {
    async list(): Promise<Array<ProductCategory>>{
        try {
            return await ProductCategory.findAll()
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async insert(
        productId: number,
        categoryId: number
    ): Promise<ProductCategory | null>{
        try {
            return await ProductCategory.create({productId, categoryId})
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new ProductCategoryRepository()