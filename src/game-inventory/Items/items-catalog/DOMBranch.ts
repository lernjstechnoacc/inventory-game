import IItem from "../../Interface/IItem";
import SimpleItem from "../SimpleItem";
import priceCongig from "../../config/priceConfig";

import imgSvg from '../../../assets/icons/icons-items/DOMBranch.svg'


function DOMBranch(img: string = imgSvg): IItem {
    return new SimpleItem('DOM Branch', img, true, priceCongig.DOM_BRANCH)
}
export default DOMBranch;