import BranchesController from "../branch-items/branches-controller/BranchesController";
import IItem from "./IItem";;
import ComplexItem from "../Items/ComplexItem";

interface ICraftMachine{

    branchesController: BranchesController;
    itemCreator: any;

    craftItem(item: IItem, stackItems: IItem[]): IItem ;
    canCraftItem(complexItem: IItem, stackItems : IItem[]): boolean;
    disassembleItem(item: IItem): any;

}
export default ICraftMachine;