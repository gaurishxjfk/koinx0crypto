import { NextRequest, NextResponse } from "next/server";

interface coinData {
  id: string;
  currency: string;
}

export async function getPrice(id: string) {
  const getPriceUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd%2Cinr&include_24hr_change=true`;

  try {
    const response = await fetch(getPriceUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching getPrice data:", error);
    throw error;
  }
}

export async function getCoin(id: string) {
  const getCoinUrl = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&sparkline=true`;

  try {
    const response = await fetch(getCoinUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching getCoin data:", error);
    throw error;
  }
}

export async function getTrendingCoins() {
  const getTrendingCoinsUrl = `https://api.coingecko.com/api/v3/search/trending`;

  try {
    const response = await fetch(getTrendingCoinsUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch getTrendingCoins data");
    }

    const data = await response.json();
    console.log(data,"hhhhhhhhhh")
    if (data) {
      return data.coins;
    }
  } catch (error) {
    console.error("Error fetching getTrendingCoins data:", error);
    throw error;
  }
}
