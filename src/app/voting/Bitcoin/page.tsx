import { fetchCryptoData } from "@/app/utils/fetchcrypto";
import CryptoPage from "../../Components/CryptoPage";
import { BTCschema } from "@/app/models/schema";

export default async function Bitcoin() {
    try {
      const { votes, price } = await fetchCryptoData{, "bitcoin"};
      return (
        <CryptoPage
          crypto="Bitcoin"
          price={price}
          votes={votes}
          cryptoKey="btc"
        />
      );
    } catch (e: any) {
      return (
        <div className="absolute left-0 top-10">
          Failed to fetch Bitcoin data. Please try again later. {e.message}
        </div>
      );
    }
  }