import Price from "../models/price.model";
import Product from "../models/product.model"
import { Op } from "sequelize";
import Rating from "../models/rating.model";

interface IProductRepository {
    row(productId: number): Promise<Product | null>;
    list(): Promise<Array<Product>>;
    productId(id: number): Promise<Product | null>;
    productSeo(seo: string): Promise<Product | null>;
    productUpdate(id: number, obj: any): Promise<Number | null>;
    productEnable(id: number): Promise<Number | null>;
    productDisable(id: number): Promise<Number | null>;
    search(seo: string): Promise<Array<Product>>;
    insert(
        title: string,
        seo: string,
        description: string,
        stockCode: string,
        barcode: string,
        associative: string,
        tax: number
    ): Promise<Product | null>
}

class ProductRepository implements IProductRepository {
    async row(productId: number): Promise<Product | null> {
        try {
            return await Product.findOne({ where: { id: productId } })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async list(): Promise<Array<Product>> {
        try {
            return await Product.findAll({
                where: { confirm: true },
                attributes: { exclude: ['id', 'confirm', 'deletedAt', 'createdAt'] },
                include: {
                    model: Price,
                    attributes: ['price', 'discountPrice', 'discountRate']
                }
            })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async productId(id: number): Promise<Product | null> {
        try {
            return await Product.findOne({
                where: { id },
                include: {
                    model: Price,
                    attributes: ['price', 'discountPrice', 'discountRate']
                }
            })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async productSeo(seo: string): Promise<Product | null> {
        try {
            return await Product.findOne({
                where: { seo },
                include: [{
                    model: Price,
                    attributes: ['price', 'discountPrice', 'discountRate'],
                }, {
                    model: Rating,
                    attributes: ['rating']
                }]
            })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async productUpdate(id: number, obj: any): Promise<Number | null> {
        try {
            return Product.update(
                obj,
                { where: { id } })
                .then((res) => {
                    return res[0]
                })
                .catch((error) => {
                    return 0
                })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async productEnable(id: number): Promise<Number | null> {
        try {
            return Product.update(
                { confirm: true },
                { where: { id } })
                .then((res) => {
                    return res[0]
                })
                .catch((error) => {
                    return 0
                })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async productDisable(id: number): Promise<Number | null> {
        try {
            return Product.update(
                { confirm: false },
                { where: { id } })
                .then((res) => {
                    return res[0]
                })
                .catch((error) => {
                    return 0
                })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async search(seo: string = ''): Promise<Array<Product>> {
        try {
            return await Product.findAll({
                where: {
                    [Op.or]: [
                        { seo: { [Op.like]: `%${seo}%` } },
                        { title: { [Op.like]: `%${seo}%` } },
                        { description: { [Op.like]: `%${seo}%` } },
                        { barcode: { [Op.like]: `%${seo}%` } },
                        { stockCode: { [Op.like]: `%${seo}%` } }
                    ]
                }
            })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
    async insert(
        title: string,
        seo: string,
        description: string,
        stockCode: string,
        barcode: string,
        associative: string,
        tax: number
    ): Promise<Product | null> {
        try {
            return await Product.create({
                title,
                seo,
                description,
                stockCode,
                barcode,
                associative,
                tax
            })
        } catch (error) {
            throw new Error("Couldn't find")
        }
    }
}

export default new ProductRepository()