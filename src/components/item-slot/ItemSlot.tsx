import React, {FC} from 'react';
import IItem from '../../game-inventory/Interface/IItem';


import './itemSlot.scss'

interface ItemProps {
    item: IItem;
    draggable: boolean;
    price?: number;
    walletAmount?: number;
    selectedItemID?: string;
    onDrag?: (e: React.DragEvent<HTMLImageElement>) => void;
    onDragOver?: (e: React.DragEvent<HTMLImageElement>) => void;
    onDragLeave?: (e: React.DragEvent<HTMLImageElement>) => void;
    onDrop?: (e: React.DragEvent<HTMLImageElement>) => void;
    onClick?:(e: React.MouseEvent<HTMLImageElement>) => void;

}
interface PriceViewProps{
    price: number;
}

const ItemSlot: FC<ItemProps> = ({item, price, walletAmount, selectedItemID, ...dragEvents}) => {
   let isSelectItem = item.id === selectedItemID;

   const canBuyItemStyleCheck = ():string =>{
     if(walletAmount && price){
        return (walletAmount - price >= 0) ? 'can-buy' : ''
     }else{
        return ''
     }
   }

   let styleBlock: string =  item.configurableBlock ? 'block' : '';
   let styleSelect: string = isSelectItem ? 'select' : '';
   let styleCanBuy: string = canBuyItemStyleCheck();
   let styleImg = `${styleBlock}  ${styleSelect}`;

    return (
        <li className={styleCanBuy ||styleImg} >
           <img className={`${styleBlock}  ${styleSelect}`}
           {...dragEvents}
             src={item.img} id={item.id} alt={item.name}/>
             {price ? <PriceView price={price}/> : null}
        </li>
    );
};

const PriceView: FC<PriceViewProps> = ({price}) =>{
    return (
        <div className='item-price'>
            <span>{price}</span>
        </div>
    );
}

export default ItemSlot;
