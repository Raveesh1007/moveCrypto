import { fetchCryptoData } from "@/app/utils/fetchcrypto";
import CryptoPage from "@/app/Components/CryptoPage";
import { BTCschema } from "@/app/models/schema";

export default async function Bitcoin (){
    try{
        const {votes, price} = await fetchCryptoData(BTCschema, "ethereum");
        return(
            <CryptoPage
            crypto="Ethereum"
            price={price}
            votes={votes}
            cryptokey="btc"
            />
        );
    }catch(e:any){
        return(
            <div className="absolute left-0 top-10">
                Failed to fetch Bitcoin data, Please try again later;
            </div>
        );
    }
}