import nextId from "react-id-generator";
import IItem from "../Interface/IItem";


class SimpleItem implements IItem{
    public id: string;
    public name: string;
    public img: string;
    private _configurable: boolean;
    public configurableBlock: boolean;
    public price: number;

    constructor (name: string, img: string, configurable: boolean, price: number, ){
        this.id = nextId();
        this.name = name;
        this.img = img;
        this._configurable = configurable;
        this.configurableBlock = false;
        this.price = price;
    }

    get configurable () {
       if(!this.configurableBlock){
            return this._configurable;
       }else{
            return false;
       }
    }

    changeConfigurableBlock = () => {
        this.configurableBlock = !this.configurableBlock;
    }


}
export default SimpleItem;