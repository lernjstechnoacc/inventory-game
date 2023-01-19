import IItem from "../../Interface/IItem";
import SimpleItem from "../SimpleItem";
import priceCongig from "../../config/priceConfig";

import imgSvg from '../../../assets/icons/icons-items/SwordOfAden.svg'


function SwordOfAden(img: string = imgSvg): IItem {
    return new SimpleItem('Sword of Aden', img, true, priceCongig.SWORD_OF_ADEN)
}
export default SwordOfAden;