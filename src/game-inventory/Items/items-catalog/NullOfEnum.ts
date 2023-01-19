import IItem from "../../Interface/IItem";
import ComplexItem from "../ComplexItem";
import * as itemsCatalog from './index'

import imgSvg from '../../../assets/icons/icons-items/NullOfEnum.svg'


function NullOfEnum(img: string = imgSvg): IItem {

    let Fabric: IItem = itemsCatalog.Fabric();
    let DOMBranch: IItem = itemsCatalog.DOMBranch();
    let consists: IItem[] = [Fabric, DOMBranch]

    let price = consists.reduce((acum, next) => acum + next.price, 0);

    return new ComplexItem('Null of Enum', img, false, price, consists)
}
export default NullOfEnum;