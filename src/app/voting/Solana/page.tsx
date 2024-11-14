import { fetchCryptoData } from "@/app/utils/fetchcrypto";
import CryptoPage from "@/app/Components/CryptoPage";
import { SOLschema } from "@/app/models/schema";

export default async function Ethereum (){
    try{
        const {votes, price} = await fetchCryptoData(SOLschema, "ethereum");
        return(
            <CryptoPage
            crypto="Ethereum"
            price={price}
            votes={votes}
            cryptokey="sol"
            />
        );
    }catch(e:any){
        return(
            <div className="absolute left-0 top-10">
                Failed to fetch Solana data, Please try again later;
            </div>
        );
    }
}