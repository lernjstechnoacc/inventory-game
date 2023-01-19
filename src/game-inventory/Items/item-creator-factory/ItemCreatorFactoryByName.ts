import IItem from "../../Interface/IItem";
import * as itemsCatalog from '../items-catalog/index';


function ItemCreatorFactoryByName (itemName: string): IItem | null {
   switch(itemName) {
      case 'EventLoop Talisman':
         return itemsCatalog.EventLoopTalisman();  
      case 'Ancient Hat':
         return itemsCatalog.AncientHat();  
      case 'DOM Branch':
         return itemsCatalog.DOMBranch();  
      case 'Sword of Aden':
         return itemsCatalog.SwordOfAden();  
      case 'Cat staff':
         return itemsCatalog.CatStaff();  
      case 'Fabric':
         return itemsCatalog.Fabric();
      case 'Null of Enum':
         return itemsCatalog.NullOfEnum();    
      default:
        return null
   }
     
}
export default ItemCreatorFactoryByName;