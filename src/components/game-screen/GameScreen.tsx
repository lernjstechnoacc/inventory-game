import { useState } from 'react'
import StoreView from '../store/StoreView';
import InventoryView from '../inventory/InventoryView';
import WalletView from '../wallet/WalletView';
import IItem from '../../game-inventory/Interface/IItem';
import IWallet from '../../game-inventory/Interface/IWallet';
import Wallet from '../../game-inventory/wallet/Wallet';

import './gameScreen.scss';

const GameScreen = () => {
    
    const [currentDropName, setCurrentDropName] = useState<string>('');
    const [craftInfoItem, setCrafInfoItem] = useState<IItem>();
    const [wallet, setWallet] = useState<IWallet>(new Wallet(700,'Aden'))
    const [walletAmount, setWalletAmount] = useState<number>(wallet.amountCoin)
    
    
    return (
        <div className='GameScreen'>
            <div className="wallet-inv">
                <WalletView wallet={wallet} walletAmount={walletAmount} setWalletAmount = {setWalletAmount}/>
                <InventoryView wallet={wallet} currentDropName = {currentDropName}/>
            </div>
            <StoreView wallet={wallet} walletAmount={walletAmount} craftInfoItem={craftInfoItem} setCrafInfoItem={setCrafInfoItem} setCurrentDropName = {setCurrentDropName} />
        </div>
    )
}
export default GameScreen;

