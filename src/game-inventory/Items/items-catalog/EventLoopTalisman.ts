import IItem from "../../Interface/IItem";
import ComplexItem from "../ComplexItem";
import * as itemsCatalog from './index'

import imgSvg from '../../../assets/icons/icons-items/EventLoopTalisman.svg'


function EventLoopTalisman(img: string = imgSvg): IItem {

    let AncientHat: IItem = itemsCatalog.AncientHat();
    let Fabric: IItem = itemsCatalog.Fabric();
    

    let consists: IItem[] = [AncientHat, Fabric]

    let price = consists.reduce((acum, next) => acum + next.price, 0);

    return new ComplexItem('EventLoop Talisman', img, false, price, consists)
}
export default EventLoopTalisman;