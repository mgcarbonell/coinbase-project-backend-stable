import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm"

Entity({ name: "favorite" })
export class Favorite extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column("varchar", { name: "cryptoName", unique: true, length: 20 })
  cryptoName: string = ""

  @Column("varchar", { name: "note", length: 1000, nullable: true })
  note: string | null = null

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date
}
