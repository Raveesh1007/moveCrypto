"use server";
import axios from "axios";
import NodeCache from "node-cache";

const priceCache = new NodeCache({ stdTTL: 600, checkperiod: 620 });

export async function getPrice() {
  const cacheKey = "cryptoPrices";

  const cachedData = priceCache.get(cacheKey);
  if (cachedData) {
    return cachedData;
  }


  try {
    const response = await axios.get(process.env.API!, {
      headers: {
        accept: "application/json",
        "x-cg-api-key": process.env.COINGECKO_API_KEY!,
      },
    });

    // Cache the API response
    priceCache.set(cacheKey, response.data);

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch crypto prices");
  }
}