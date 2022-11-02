import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Cart } from "./Cart";
import { Order } from "./Order";


@Entity('Products') // Name table 
export class Product {

    //all columns in the table

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: 'text', nullable: false})
    title: string

    @Column({type: 'text', nullable: false})
    desc: string

    @Column({type: 'text', unique: true, nullable: false})
    img: string

    @Column({type: 'text', nullable: false, array: true})
    categories: string[]
    
    @Column({type: 'float', nullable: false})
    price: Number

    @Column({type: 'timestamp', default: 'now()'})
    createdAt: Date

    //required for table relationship
    
    @OneToMany(() => Cart, cart => cart.product)
    cart: Cart[]

    @OneToMany(() => Order, order => order.product)
    orders: Order[]
}