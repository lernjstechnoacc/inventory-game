interface IWallet {
    amountCoin: number;
    typeCoin: string;
    
    addCoinToWallet(amount: number) : void;
    reduceAmountCoin(amount: number) : void;
}
export default IWallet;