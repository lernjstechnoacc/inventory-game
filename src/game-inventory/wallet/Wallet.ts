import IWallet from "../Interface/IWallet";

class Wallet implements IWallet{
    amountCoin: number;
    typeCoin: string;
    constructor(amount: number, typeCoin: string){
        this.amountCoin = amount;
        this.typeCoin = typeCoin;
    }

    addCoinToWallet = (amount: number = 50) =>{
        this.amountCoin +=  amount;
    }
    
    reduceAmountCoin = (amount: number) => {
        this.amountCoin = this.amountCoin - amount;
    }

}
export default Wallet;
