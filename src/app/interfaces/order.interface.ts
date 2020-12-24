import { DayTime } from "../enums/dayTime.enum";
import { Item } from "./item.interface";

export interface Order {
    dayTime: DayTime;
    items: Array<Item>;
}