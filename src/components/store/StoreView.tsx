import React, { FC, useEffect, useState } from 'react';
import CraftPanel from '../craft-panel/CraftPanel';
import IItem from '../../game-inventory/Interface/IItem';
import IStore from '../../game-inventory/Interface/IStore';
import ItemStore from '../../game-inventory/itemStore/ItemStore';
import ItemList from '../item-list/ItemList';
import ItemSlot from '../item-slot/ItemSlot';

import './store.scss'
import IWallet from '../../game-inventory/Interface/IWallet';


interface StoreViewProps {
    craftInfoItem: IItem | undefined;
    wallet: IWallet;
    walletAmount: number;
    setCrafInfoItem(item: IItem):void;
    setCurrentDropName(name: string): void;
}

const StoreView: FC<StoreViewProps> = ({wallet, walletAmount, setCurrentDropName, craftInfoItem, setCrafInfoItem}) => {
    const store : IStore = new ItemStore();  
    const [storeItems, setStoreItems] = useState<IItem[]>([]);
    
    useEffect(()=>{
        setStoreItems(store.items);
        // eslint-disable-next-line 
    },[])

    const dragHandler = (e: React.DragEvent<HTMLImageElement>) => {

        const item = storeItems.find((item) => item.id === e.currentTarget.id)
        
        if(item !== undefined && wallet.amountCoin > item.price ){
            setCurrentDropName(e.currentTarget.alt)
        }else{
            setCurrentDropName('');
        }

        
    }
    
    const onClickGetInfo = (item: IItem) =>{
        setCrafInfoItem(item);
    }


    return (
        <div className='Store'>
            <div className="header"><h1>Store</h1></div>
            <div className="store-items">
            <ItemList
            items={storeItems}
            renderItem={(item: IItem) =>
                <ItemSlot
                    draggable={true}
                    onClick={()=> onClickGetInfo(item)}  
                    onDrag={dragHandler}
                    price = {item.price}
                    walletAmount = {walletAmount}
                    item={item}
                    key={item.id}
                />}

            />
            </div>

            <CraftPanel craftInfoItem={craftInfoItem}/>
        </div>
    )
}

export default StoreView;