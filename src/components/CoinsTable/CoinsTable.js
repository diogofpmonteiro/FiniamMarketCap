import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CoinsTable = () => {
  const [dataCoins, setDataCoins] = useState(null);

  // call to coingecko api to get our initial coins information
  const getCoinsData = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      );
      const data = await response.json();
      setDataCoins(data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("data", dataCoins);

  // useEffect only during mounting stage so we get the needed information
  useEffect(() => {
    getCoinsData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr className='table-row'>
            <th>#</th>
            <th></th>
            <th>Coin</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {dataCoins &&
            dataCoins.map((data, idx) => (
              <tr key={data.id} className='table-row'>
                <td>{idx + 1}</td>
                <td>
                  <img src={data.image} alt='logo' className='coins_logo' />
                </td>
                <td>
                  <Link to={`/${data.id}`}>
                    {data.name} - {data.symbol.toUpperCase()}
                  </Link>
                </td>
                <td>{data.current_price}$</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinsTable;
