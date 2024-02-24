import { Table, Column, ForeignKey, DataType, BelongsTo} from "sequelize-typescript"
import Product from "./product.model";
import Category from "./category.model";
import BaseModel from "./base.model";

@Table({ tableName: "product_category" })
export default class ProductCategory extends BaseModel {
    @ForeignKey(() => Product)
    @Column({type: DataType.INTEGER, field: "product_id"})
    productId!: number;

    @BelongsTo(() => Product, 'product_id')
    product: Product | undefined

    @ForeignKey(() => Category)
    @Column({type: DataType.INTEGER, field: "category_id"})
    categoryId!: number;

    @BelongsTo(() => Category, 'category_id')
    category: Category | undefined
}