import {useState, useEffect, FC} from 'react'
import IWallet from '../../game-inventory/Interface/IWallet'


import './wallet.scss'
interface WalletViewProps {
    wallet: IWallet;
    walletAmount: number;
    setWalletAmount(amount:number): void;
}

const WalletView: FC<WalletViewProps> = ({wallet, walletAmount, setWalletAmount}) => { 

    useEffect(()=>{
        setInterval(addCoinToWallet, 1000);
    },[])


    const addCoinToWallet = (amount: number = 1) => {
        wallet.addCoinToWallet(amount);
        setWalletAmount(wallet.amountCoin)
    }

    return (
        <div className='Wallet'>
            <h1>Wallet</h1>
            <div className='wallet-block'>
                <div className='type-coin'>Amount {wallet.typeCoin} :</div>
                <div className='amount-coin'>{walletAmount}</div>
            </div>
        </div>
    )
}

export default WalletView;