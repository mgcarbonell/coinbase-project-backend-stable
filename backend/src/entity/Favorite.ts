import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm"

@Entity("favorite")
export class Favorite extends BaseEntity {
  @PrimaryColumn("int")
  id!: number

  @Column("varchar", { unique: true, length: 20 })
  cryptoName: string = ""

  @Column("varchar", { length: 1000, nullable: true })
  note: string | null = null

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
