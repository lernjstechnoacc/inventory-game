import IItem from "../../Interface/IItem";
import SimpleItem from "../SimpleItem";
import priceCongig from "../../config/priceConfig";

import imgSvg from '../../../assets/icons/icons-items/CatStaff.svg'


function CatStaff(img: string = imgSvg): IItem {

    return new SimpleItem('Cat staff', img, true, priceCongig.CAT_STAFF)
}
export default CatStaff;