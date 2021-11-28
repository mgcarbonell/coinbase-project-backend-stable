import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  Index,
  getRepository,
} from "typeorm"

@Entity("favorite")
export class Favorite extends BaseEntity {
  @PrimaryColumn()
  id: number

  @Column("varchar", { unique: true, length: 20 })
  cryptoName: string = ""

  @Column("varchar", { length: 1000, nullable: true })
  note: string | null = null
}
