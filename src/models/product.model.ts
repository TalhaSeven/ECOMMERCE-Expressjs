import { Table, Column, DataType, HasOne, HasMany } from "sequelize-typescript";
import BaseModel from "./base.model";
import Price from "./price.model";
import Rating from "./rating.model";
import Variation from "./variation.model";

@Table({ tableName: "products" })
export default class Product extends BaseModel {
  @Column({ type: DataType.STRING(150), field: "title" })
  title!: string;

  @Column({ type: DataType.STRING(150), field: "seo" })
  seo!: string;

  @Column({ type: DataType.STRING(255), field: "description" })
  description!: string;

  @Column({ type: DataType.STRING(20), field: "stock_code" })
  stockCode!: string;

  @Column({ type: DataType.STRING(20), field: "barcode" })
  barcode!: string;

  @Column({ type: DataType.STRING(30), field: "associative" })
  associative!: string;

  @Column({ type: DataType.DECIMAL(4, 2), field: "tax" }) // %15.6
  tax!: number;

  @HasOne(() => Price, "product_id")
  price: Price | undefined;

  @HasMany(() => Rating, "product_id")
  rating: Rating | undefined;

  @HasMany(() => Variation, "product_id")
  variation: Variation | undefined;
}
