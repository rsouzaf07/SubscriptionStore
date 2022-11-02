import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Cart } from "./Cart";
import { Order } from "./Order";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: 'text', unique: true, nullable: false})
    name: string

    @Column({type: 'text', unique: true, nullable: false})
    username: string

    @Column({type: 'text', unique: true, nullable: false})
    email: string

    @Column({type: 'text', nullable: false})
    senha: string
    
    @Column({type: 'timestamp'})
    createdAt: Timestamp

    @OneToMany(() => Cart, cart => cart.user)
    cart: Cart[]

    @OneToMany(() => Order, order => order.user)
    orders: Order[]

}