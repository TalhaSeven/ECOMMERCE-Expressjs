import { Table, Column, DataType } from 'sequelize-typescript'
import BaseModel from './base.model'

@Table({ tableName: "users" })
export default class Users extends BaseModel {
    @Column({ type: DataType.STRING(150), field: "name" })
    name!: string

    @Column({ type: DataType.STRING(100), field: "email", unique: true })
    email!: string

    @Column({ type: DataType.STRING(100), field: "password"})
    password!: string
}