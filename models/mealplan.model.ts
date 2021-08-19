// Defines the DB model for a meal plan.

import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class MealPlan {
    @PrimaryColumn()
    id: number;
    @Column("text")
    name: string;
    @Column("text")
    description: string;
}
