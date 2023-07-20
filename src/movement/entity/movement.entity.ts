import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Movement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;
  
  @Column()
  amountOperated: number;

  @Column()
  cripto: string;

  @Column()
  side: boolean;

  @Column()
  amount: number;

  @Column()
  price: number;

  @Column()
  badge: number;

  @Column()
  echange: string;

  @Column()
  result: number;

}
