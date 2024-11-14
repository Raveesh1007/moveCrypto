import { getPrice } from "../api";
import { CoinCard } from "./CoinCard";

export const Coins = async () => {
    try {
      const price = await getPrice();
  
      return (
        <div className="xl:flex xl:justify-between xl:px-16">
          <div>
            <div className="h-screen flex justify-center">
              <CoinCard price={price.bitcoin.usd} crypto="Bitcoin" />
            </div>
          </div>
          <div className="h-screen flex justify-center">
            <CoinCard price={price.ethereum.usd} crypto="Ethereum" />
          </div>
          <div className="h-screen flex justify-center">
            <CoinCard price={price.solana.usd} crypto="Solana" />
          </div>
        </div>
      );
    } catch (e: any) {
      return <div>{e}</div>;
    }
  };
