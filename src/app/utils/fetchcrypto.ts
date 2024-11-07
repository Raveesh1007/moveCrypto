import { getPrice } from "../api";  
import { Model } from "mongoose";
import dbConnect from "./dbconnect";

export async function fetchCryptoData(schema: Model<any>, cryptoKey: string) {
    await dbConnect();
  
    const cryptoData = await schema.find({});
    const priceData = await getPrice();
  
    return {
      price: priceData[cryptoKey].usd,
      votes: {
        bullish: cryptoData[0].bullish | 0,
        bearish: cryptoData[0].bearish | 0,
      },
    };
  }