import * as itemsCatalog from "../Items/items-catalog";
import LinkedList from "./branch-structure/LinkedList";

const AncientHatList: LinkedList = new LinkedList();

AncientHatList.append(itemsCatalog.AncientHat());
AncientHatList.append(itemsCatalog.EventLoopTalisman())


export default AncientHatList;