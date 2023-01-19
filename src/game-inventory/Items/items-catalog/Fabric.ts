import IItem from "../../Interface/IItem";
import SimpleItem from "../SimpleItem";
import priceCongig from "../../config/priceConfig";

import imgSvg from '../../../assets/icons/icons-items/Fabric.svg'


function Fabric(img: string = imgSvg): IItem {

    return new SimpleItem('Fabric', img,  true, priceCongig.FABRIC)
}
export default Fabric;