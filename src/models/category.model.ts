import { Table, Column, DataType} from "sequelize-typescript"
import BaseModel from "./base.model";

@Table({ tableName: "categories" })
export default class Category extends BaseModel {
    @Column({ type: DataType.STRING(150), field: "title"})
    title!: string

    @Column({ type: DataType.STRING(255), field: "description"})
    description!: string
}