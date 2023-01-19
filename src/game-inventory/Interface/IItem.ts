interface IItem {
    id: string;
    name: string;
    img: string;
    configurable?: boolean;
    configurableBlock?: boolean;
    price: number;
    consists?: IItem[];

    changeConfigurableBlock(): void;
  
}

export default IItem;