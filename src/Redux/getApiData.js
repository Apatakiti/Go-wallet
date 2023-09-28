const apiUrl = "https://api.coingecko.com/api/v3/coins/markets";

export const fetchCryptoData = async () => {
  const params = new URLSearchParams({
    vs_currency: "usd",
    order: "marketcap_desc",
    per_page: 10, page: 1,
  });

  const fullUrl = `${apiUrl}?${params.toString()}`;

  try {
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data.map((crypto, index) => ({
      Id: `${index + 1}`,
      Name: { 
        name: `${crypto.name}`,
        image: `${crypto.image}`,
        symbol: `${crypto.symbol}`,
      },
      Price: `$${crypto.current_price}`,
      MarketCap: `$${crypto.market_cap}`,
      circulatingSupply : crypto.circulating_supply,
      a24hrVolume: `$${crypto.total_volume}`,
    }));
  } catch (error) {
    throw error;
  }
};
