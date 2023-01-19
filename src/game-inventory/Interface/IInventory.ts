import IItem from "./IItem"




interface IInventory {
    name: string;
    cells: number;
    items: IItem[];
    itemCreator: any;

    addItem(item: IItem): void;
    changeBlockConfigurableByID(id: string): void;
    removeItem(item: IItem): void;
    disassembleItem(item: IItem): void;


}
export default IInventory;