import IItem from "../Interface/IItem";
import SimpleItem from "./SimpleItem";

class ComplexItem extends SimpleItem {
    public consists : IItem[];
    constructor (name: string, img:string, configurable: boolean,
                 price: number, consists: IItem[] ) {
        super(name, img, configurable, price);
        this.consists = consists;
    }
}
export default ComplexItem;