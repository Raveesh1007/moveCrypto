import { fetchCryptoData } from "@/app/utils/fetchcrypto";
import CryptoPage from "@/app/Components/CryptoPage";
import { ETHschema } from "@/app/models/schema";

export default async function Ethereum (){
    try{
        const {votes, price} = await fetchCryptoData(ETHschema, "ethereum");
        return(
            <CryptoPage
            crypto="Ethereum"
            price={price}
            votes={votes}
            cryptokey="eth"
            />
        );
    }catch(e:any){
        return(
            <div className="absolute left-0 top-10">
                Failed to fetch Ethereum data, Please try again later;
            </div>
        );
    }
}