import nextId from "react-id-generator";
import IItem from "../Interface/IItem";
import SkeletonItemSvg from '../../assets/icons/SkeletonItem.svg'


class SkeletonItem implements IItem{
    public id: string;
    public name: string;
    public img: string;
    public price: number;

    constructor (name: string = 'Skeleton', img: string = SkeletonItemSvg, price = 0){
        this.id = nextId();
        this.name = name;
        this.img = img;
        this.price = price;
        
    }
    changeConfigurableBlock = () => {
    }


}
export default SkeletonItem;