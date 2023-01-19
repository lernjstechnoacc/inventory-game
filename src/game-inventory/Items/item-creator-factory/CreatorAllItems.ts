import IItem from "../../Interface/IItem";
import * as itemsCatalog from '../items-catalog/index';



function CreatorAllItems (): IItem[]{
    let allITems: IItem[] = [];

    let itemCatalogArray = Object.values(itemsCatalog);
    allITems = itemCatalogArray.map(item => item())

    return allITems;
}

export default CreatorAllItems;
     
