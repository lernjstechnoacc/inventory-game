import {useState, useEffect, FC} from 'react'
import IInventory from '../../game-inventory/Interface/IInventory';
import IItem from '../../game-inventory/Interface/IItem';
import Inventory from '../../game-inventory/inventory/Inventory'
import SkeletonItem from '../../game-inventory/Items/SkeletonItem';
import ItemList from '../item-list/ItemList';
import ItemSlot from '../item-slot/ItemSlot';

import SkeletonSvg from '../../assets/icons/SkeletonItem.svg'
import overIcon from '../../assets/icons/overIcon.svg'
import sellIconSvg from '../../assets/icons/sellIcon.svg'
import dissIconSvg from '../../assets/icons/dissIcon.svg'
import configurableBlockSvg from '../../assets/icons/blockIcon.svg'


import './inventory.scss'
import IWallet from '../../game-inventory/Interface/IWallet';

interface InventoryViewProps {
    currentDropName: string;
    wallet: IWallet;
}
let skeletonItem = new SkeletonItem();

const InventoryView: FC<InventoryViewProps> = ({wallet, currentDropName}) => {
    
    const [inventory] = useState<IInventory>(new Inventory());
    const [inventoryItems, setInventoryItems] = useState<IItem[]>([]);
    const [isSelectItem, setIsSelectItem] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<IItem>(skeletonItem);

    useEffect (() => {
        setInventoryItems(inventoryItems => [...inventoryItems, ...inventory.items])
        // eslint-disable-next-line
    },[])
    

    const renderInventory = (): IItem[] => {
        let arrayRenderItems: IItem[] = [];

        for(let i = 0; i < inventory.cells; i++){
            if(inventoryItems[i] !== undefined){
                arrayRenderItems.push(inventory.items[i]);
            }else{
                arrayRenderItems.push(new SkeletonItem());
            }
        }
        return arrayRenderItems;
        
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLImageElement>) => {
        e.preventDefault();
        if(e.currentTarget.alt === 'Skeleton'){
            e.currentTarget.src = overIcon;
        }
        
    }

    const leaveHandler = (e: React.DragEvent<HTMLImageElement>) => {
        e.preventDefault()
        if(e.currentTarget.alt === 'Skeleton'){
            e.currentTarget.src = SkeletonSvg;
        }
        
    }

    const dropHandler = (e: React.DragEvent<HTMLImageElement>) => {
        e.preventDefault()
        
        if(!currentDropName){
            leaveHandler(e)
            return false;
        }

            
        let item = inventory.itemCreator(currentDropName);
        wallet.reduceAmountCoin(item.price)
        inventory.addItem(item);
        setInventoryItems(items => [...inventory.items])
        
        
    }
    const cleanSelectedItem = () => {
        setSelectedItem(skeletonItem);
        setIsSelectItem(false);
    }
    const onClickSelectItem = (e: React.MouseEvent<HTMLImageElement>) =>{
        if(e.currentTarget.alt !== 'Skeleton'){
            let id: string = e.currentTarget.id
            let newSelectedItem = inventory.items.find((item) => item.id === id);
            
            if(newSelectedItem === selectedItem){
                cleanSelectedItem();
                return false;
            }

            if(newSelectedItem !== undefined){
                setSelectedItem(newSelectedItem);
                setIsSelectItem(true);
            }

        }

    }
    const onClickSellItem = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(!isSelectItem){
            return false;
        }
        wallet.addCoinToWallet(selectedItem.price);
        inventory.removeItem(selectedItem);
        cleanSelectedItem()

        setInventoryItems(items => [...inventory.items])
        
    }
    const onClickChangeConfigurableItem = (e: React.MouseEvent<HTMLButtonElement>) =>{
        if(!isSelectItem){
            return false;
        }
       
        inventory.changeBlockConfigurableByID(selectedItem.id)
        setInventoryItems(items => [...inventory.items])

    }
    const onClickDisassembleItem = (e: React.MouseEvent<HTMLButtonElement>) =>{
        if(!isSelectItem && !selectedItem.consists){
            return false;
        }

        inventory.disassembleItem(selectedItem)
        cleanSelectedItem();
        setInventoryItems(items => [...inventory.items])

        
        
    }
    

    
    let items: IItem[] = renderInventory();

    let styleSellBlock = isSelectItem ? 'sell-block btn-block active-btn' : 'sell-block btn-block';
    let styleCongigurableBlock = isSelectItem ? 'btn-block active-btn' : 'btn-block';
    let styleDisassembleBlock = selectedItem.consists ? 'btn-block active-btn' : 'btn-block';

    return (
        <div className='Inventory'>
            <h1>Inventory</h1>
            <div className='window-inventory'>
                <button onClick={onClickSellItem}  className={styleSellBlock}>
                    <img src={sellIconSvg} alt="" />
                    <span>Sell</span>
                </button>
                <div className="inventory-block">
                    <ItemList
                    items={items}
                    renderItem={(item: IItem) =>
                        <ItemSlot
                            draggable={false}
                            onDragOver={dragWithPreventHandler}
                            onDragLeave={leaveHandler}
                            onDrop={dropHandler}
                            onClick={onClickSelectItem}
                            selectedItemID = {selectedItem.id}
                            item={item}
                            key={item.id}
                    />}

                    />
                    
                </div>
                <div className="disassemble-congig-block">
                    <button onClick={onClickDisassembleItem} className={styleDisassembleBlock}>
                        <img src={dissIconSvg} alt="" />
                        <span>Disassemble</span>
                    </button>
                    <button onClick={onClickChangeConfigurableItem} className={styleCongigurableBlock}>
                        <img src={configurableBlockSvg} alt="" />
                        <span>Block</span>
                    </button>
                    
                </div>
            </div>
            
        </div>
    )
}

export default InventoryView;