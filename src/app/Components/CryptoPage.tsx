import { CryptoData } from "./cryptodata";
import { GeckoRef } from "./ui/CoinGeckoRef";
import { VotingButton } from "./ui/votingbutton";

interface CryptoPageProps{
    crypto: string;
    price: number;
    cryptokey: string;
    votes: {bullish: number, bearish: number};
}

export default function CryptoPage({
    crypto,
    price,
    cryptokey,
    votes,
}: CryptoPageProps){
    return(
        <div>
            <div>
                <CryptoData price = {price} crypto={crypto} />
            </div>
            <div>
                <VotingButton crypto = {crypto} votes = {votes} /> 
            </div>
            <div className="absolte-bottom-2 left-2">
            <GeckoRef />
            </div>
        </div>
    )
}