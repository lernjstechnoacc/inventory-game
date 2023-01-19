import * as itemsCatalog from "../Items/items-catalog";
import LinkedList from "./branch-structure/LinkedList";

const FabricList: LinkedList = new LinkedList();

FabricList.append(itemsCatalog.Fabric());
FabricList.append(itemsCatalog.EventLoopTalisman());
FabricList.append(itemsCatalog.NullOfEnum());

export default FabricList;