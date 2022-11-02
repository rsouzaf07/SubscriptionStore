import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Product } from "./Product";
import { User } from "./User";

@Entity('cart')
export class Cart {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => User, user => user.cart)
    @JoinColumn({name: 'userId'})
    user: User

    @ManyToOne(() => Product, product => product.cart)
    @JoinColumn({name: 'productId'})
    product: string 

    @Column({type: 'integer' ,default: 1, nullable: false})
    quantity: number

}