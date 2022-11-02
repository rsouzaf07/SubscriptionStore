import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Product } from "./Product";
import { User } from "./User";


@Entity('orders')
export class Order {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => User, user => user.orders)
    @JoinColumn({name: 'userId'})
    user: User

    @ManyToOne(() => Product, product => product.orders)
    @JoinColumn({name: 'productId'})
    product: string 

    @Column({default: 1, nullable: false})
    quantity: number

    @Column({nullable: false})
    amount: number

    @Column({type: 'text'})
    document: string
}