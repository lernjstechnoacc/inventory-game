import LinkedListNode from "../branch-items/branch-structure/LinkedListNode";
import BranchesController from "../branch-items/branches-controller/BranchesController";
import ICraftMachine from "../Interface/ICraftMachine";
import IItem from "../Interface/IItem";
import ComplexItem from "../Items/ComplexItem";
import { ItemCreatorFactoryByName } from "../Items/item-creator-factory";


class CraftMachine implements ICraftMachine {
    branchesController: BranchesController;
    itemCreator: any;

    constructor(branchesController: BranchesController = new BranchesController(), itemCreator = ItemCreatorFactoryByName ){
        this.branchesController = branchesController;
        this.itemCreator = itemCreator
    }

    craftItem = (item: IItem, stackItems: IItem[]): IItem =>{
        let newCraftItem: IItem | ComplexItem = item;
        let filterStackConfigurableItems: IItem[] = stackItems.filter(item => item.configurable);
        filterStackConfigurableItems.push(item);

        let branch = this.branchesController.getCorrectBranch(item);

        if(branch && branch.head?.next){
            let currentNode: LinkedListNode | null = branch.head.next;
            let isCanCraftNewItem = false;

            while (currentNode) {
                
                isCanCraftNewItem = this.canCraftItem(currentNode.value, filterStackConfigurableItems)
                
                if(isCanCraftNewItem){
                    newCraftItem = currentNode.value
                    break;
                }

                currentNode = currentNode.next;
            }

        }
            return newCraftItem;
        
    }

    canCraftItem = (complexItem: IItem, stackItems : IItem[]): boolean =>{
        let stackItemNames = stackItems.map(item => item.name);
        let canCraft: boolean =  true;
        if(complexItem.consists){
            complexItem.consists.forEach((item)=>{
                let indexIncludesItemName = stackItemNames.indexOf(item.name);
                if(indexIncludesItemName >= 0){
                   stackItemNames[indexIncludesItemName] = 'null'
                }else{
                   canCraft = false
                }
               })
        }
        

        return canCraft;
    }

    disassembleItem = (item: IItem): any  => {
        let disasseblerItems: IItem[] = [];
        
        if(item.consists){
            disasseblerItems =  item.consists.map(item => {
                if(item.configurable){
                    item.changeConfigurableBlock()
                }
                return item;
            })
            return disasseblerItems;
        }
       
    }

    getCraftListForItem = (item: IItem): IItem[] =>{
        const craftList: IItem[] = [];

        if(item.configurable){
            let branch = this.branchesController.getCorrectBranch(item);

                if(branch && branch.head?.next){
                    let currentNode: LinkedListNode | null = branch.head.next;

                    while (currentNode) {
                        craftList.push(currentNode.value)
                        currentNode = currentNode.next;
                    }
                }

        }
    
            return craftList;
    }
    

}

export default CraftMachine;