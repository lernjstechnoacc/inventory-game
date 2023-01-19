import IItem from "../../Interface/IItem";
import SimpleItem from "../SimpleItem";
import priceCongig from "../../config/priceConfig";
import imgSvg from '../../../assets/icons/icons-items/AncientHat.svg'



function AncientHat(img: string = imgSvg): IItem {

    return new SimpleItem('Ancient Hat', img, true, priceCongig.ANCIENT_HAT)
}
export default AncientHat;