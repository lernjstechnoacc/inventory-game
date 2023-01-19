import IItem from "../Interface/IItem";
import IStore from "../Interface/IStore";
import { CreatorAllItems } from "../Items/item-creator-factory";


class ItemStore implements IStore {
    items: IItem[];

    constructor(items: IItem[] = CreatorAllItems()){
        this.items = items;

    }
    getItem = (name: string) => {
        return this.items.find((item) => item.name === name);
    }
}
export default ItemStore;