import { useEffect, useState } from "react";
import { ICoin } from "./ICoin";
const Crypto = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [coinsData, setCoinsData] = useState<ICoin[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
          setIsError(true);
        }
        const data: ICoin[] = await response.json();
        setCoinsData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  const filteredCoins = coinsData?.filter((coin) =>
    coin.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div className="max-w-lg min-h-96 relative mx-auto p-6 mb-2 text-text rounded-lg bg-gradient-to-br from-primary-600 to-blue-500 hover:from-primary-600 hover:to-blue-500 hover:text-white">
        <input
          value={searchInput}
          onChange={({ target }) => setSearchInput(target.value)}
          type="text"
          className="py-3 px-3 block w-full border-text/40 rounded-lg text-sm focus:border-blue-500  disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600"
          placeholder="Enter currency name..."
        />
        <div className="max-h-96 my-3 overflow-auto scrollbar-thin">
          {!isLoading ? (
            isError ? (
              <div className="flex my-3 items-center justify-center py-3 px-3 w-full border-text/40 rounded-lg text-sm font-bold bg-neutral-900 border-neutral-700 text-rose-400">
                FAILED TO FETCH COINS DATA FROM SERVER.
              </div>
            ) : (
              filteredCoins?.map(
                ({
                  name,
                  symbol,
                  image,
                  current_price,
                  price_change_percentage_24h,
                }) => (
                  <div
                    key={name}
                    className="flex my-3 items-center justify-between py-3 px-3 w-full border-text/40 rounded-lg text-sm font-bold bg-neutral-900 border-neutral-700 text-neutral-400"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        alt={`${name} logo`}
                        src={image}
                        className="size-4"
                      />
                      <span>
                        {name}
                        <sup className="ps-0.5 uppercase">{symbol}</sup>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={
                          price_change_percentage_24h > 0
                            ? "text-emerald-600"
                            : "text-rose-800"
                        }
                      >
                        {price_change_percentage_24h.toFixed(2)}%
                      </div>
                      <div>{current_price.toLocaleString()}$</div>
                    </div>
                  </div>
                )
              )
            )
          ) : (
            <div className="flex my-3 items-center justify-center py-3 px-3 w-full border-text/40 rounded-lg text-sm font-bold bg-neutral-900 border-neutral-700 text-neutral-400">
              LOADING COINS DATA FROM SERVER.
            </div>
          )}
        </div>
        <div className="text-xs text-slate-300">
          Please note that this is an external API, so availability and
          performance may vary. Thank you for your understanding! 🤭
        </div>
      </div>
    </>
  );
};

export default Crypto;
