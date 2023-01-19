import { useState, useEffect, FC } from 'react'
import CraftMachine from '../../game-inventory/craft-machine/CraftMachine'
import IItem from '../../game-inventory/Interface/IItem'
import ItemList from '../item-list/ItemList'
import ItemSlot from '../item-slot/ItemSlot'
import arrowSvg from '../../assets/arrow.svg'

import './craftPanel.scss'


interface CraftPanelProps {
    craftInfoItem: IItem | undefined;
}

interface CraftListProps {
    craftInfoItem: IItem;
    craftList: IItem[];
}

const CraftPanel: FC<CraftPanelProps>= ({craftInfoItem}) => {
    const craftMachine = new CraftMachine();
    const [craftList, setCraftList] = useState<IItem[]>([]);

    useEffect (()=>{
        getCraftList()
    },[craftInfoItem])

    const getCraftList = () =>{
        let newCraftList: IItem[] = [];
        
        if(craftInfoItem !== undefined){
         newCraftList = craftMachine.getCraftListForItem(craftInfoItem);
         setCraftList(craftList => newCraftList)
        }
       
     }

    return (
        <div className='CraftPanel'>
            <div className='craft-window'>
                {craftInfoItem ? 
                <CraftListView craftInfoItem={craftInfoItem} craftList={craftList}/> : 
                <h3>Click on item for details Craft</h3>}
            </div>
        </div>
    )
}

const CraftListView: FC<CraftListProps> = ({craftInfoItem, craftList}) =>{
    return(
        <div className='craft-list'>
            <div>{craftList.length ?
            <ItemList
            items={craftList}
            renderItem={(item: IItem) =>
                <ItemSlot
                    draggable={true}  
                    item={item}
                    key={item.id}
                />}

            /> : null}
            </div>
            <div>
            {craftList.length ? <img className='arrow' src={arrowSvg} alt="" /> : null}
            </div>
            <div>
                <img className='craft-item' src={craftInfoItem.img} alt={craftInfoItem.name} />
            </div>
        </div>
    )
}

export default CraftPanel