import * as itemsCatalog from "../Items/items-catalog";
import LinkedList from "./branch-structure/LinkedList";

const DOMBranchList: LinkedList = new LinkedList();

DOMBranchList.append(itemsCatalog.DOMBranch());
DOMBranchList.append(itemsCatalog.NullOfEnum());

export default DOMBranchList;