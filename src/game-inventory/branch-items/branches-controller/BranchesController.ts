import IItem from "../../Interface/IItem";
import LinkedList from "../branch-structure/LinkedList";
import branchesArray from '../index';


class BranchesController {
    branches: LinkedList[];
    constructor (branches: LinkedList[]= branchesArray){
        this.branches = branches;
    }

    getCorrectBranch = (item: IItem)=> {
       return this.branches.find((branch) => branch.head?.value.name === item.name);
        
    }
}

export default BranchesController;