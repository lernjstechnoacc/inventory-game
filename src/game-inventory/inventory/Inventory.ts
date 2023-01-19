
import CraftMachine from "../craft-machine/CraftMachine";
import ICraftMachine from "../Interface/ICraftMachine";
import IInventory from "../Interface/IInventory";
import IItem from "../Interface/IItem";
import ComplexItem from "../Items/ComplexItem";
import { ItemCreatorFactoryByName } from "../Items/item-creator-factory";

/* This message notification dont use in prototype, but you can add 
display in Front-end for notification user*/

enum InventoryMessage {
    changeCellsOk = "Length your Inventory change, new length = ",
    changeCellsFail = 'New length inventory < items in your Inventory now',
    newItemInInventoryOK = 'You add new item to Inventory : ',
    newItemInInventoryFail = 'Your Inventory is full'
}

class Inventory implements IInventory{
   name: string;
   cells: number;
   items: IItem[];
   itemCreator: any;
   craftMachine: ICraftMachine;

   constructor(name:string = 'inventory', cells: number = 6, itemCreator = ItemCreatorFactoryByName, craftMachine = new CraftMachine()){
    this.name = name;
    this.cells = cells;
    this.items =[];
    this.itemCreator = itemCreator;
    this.craftMachine = craftMachine

   }

   addItem = (item: IItem) :void => {
    (item.configurable) 
        ? this.addConfigurableItem(item, this.items) : 
        this.addNotConfigurableItem(item);
   }

   private addNotConfigurableItem = (item: IItem): string=>{
    if(this.items.length < this.cells){
        this.items = [...this.items, item];
        return `${InventoryMessage.newItemInInventoryOK} ${item.name}`
    }else{
        return InventoryMessage.newItemInInventoryFail
    }
   }

   private addConfigurableItem = (item: IItem, items: IItem[]) =>{
      let newItem = this.craftMachine.craftItem(item,items);
;
      if(newItem.name === item.name){
         this.addNotConfigurableItem(item);
      }else{
        newItem.consists?.forEach((consistsItem)=>{
            this.removeItem(consistsItem)
        })
        this.addNotConfigurableItem(newItem);
      }
   }

   changeBlockConfigurableByID = (id: string) : void =>{
    let item = this.items.find(item => item.id === id);

    if(item !== undefined){
        let index = this.items.indexOf(item)
        this.items[index].changeConfigurableBlock();
       if(this.items[index].configurable){
        console.log('configurable item');
            let stackItems = this.items.filter(oldItem => oldItem.id !== item?.id)
            console.log('filterStack')
            console.log(stackItems);
            let tryCraftItem = this.craftMachine.craftItem(item, stackItems);
            if(tryCraftItem.name !== item.name){
                console.log('new item')
                this.removeItem(item)
                console.log('remove item')
                console.log('inventory items')
                console.log(this.items);
                this.addItem(item);
            }
       }
    }
   }
   disassembleItem =(item: IItem) :void => {
   
    let disassemblerItems = this.craftMachine.disassembleItem(item);
    this.removeItem(item);
    this.items = [...this.items, ...disassemblerItems]
    

   }

   removeItem = (removableItem: IItem) =>{
    let newItems: IItem[] = [];
    let findItem = this.items.find((item)=> item.name === removableItem.name);
    
    newItems = this.items.filter(item => item.id !== findItem?.id);

    this.items = newItems;
    console.log('Delete')

   }
   changeCells = (cells: number): string => {
    if(this.items.length <= cells){
        this.cells = cells;
        return `${InventoryMessage.changeCellsOk} ${cells}`
    }else{
        return InventoryMessage.changeCellsFail;
    }
   }
}
export default Inventory;