import { DishType } from "../enums/dishType.enum";

export interface Item {
    itemName: string;
    quantity: string;
    type: DishType;
}