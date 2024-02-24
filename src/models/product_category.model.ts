import { Table, Column, ForeignKey } from "sequelize-typescript";
import Product from "./product.model";
import Category from "./category.model";
import BaseModel from "./base.model";

@Table({ tableName: "product_category" })
export default class ProductCategory extends BaseModel {
  @ForeignKey(() => Product)
  @Column({ field: "product_id" })
  productId!: number;

  @ForeignKey(() => Category)
  @Column({ field: "category_id" })
  categoryId!: number;
}
