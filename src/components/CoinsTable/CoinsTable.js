import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CoinsTable = () => {
  const [dataCoins, setDataCoins] = useState(null);
  const [searchForm, setSearchForm] = useState("");

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

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchForm(event.target.value);
  };

  const filteredSearch = (search) => {
    const filteredCoin = dataCoins.filter((coins) => coins.name.toLowerCase().includes(search.toLowerCase()));
    setDataCoins(filteredCoin);
  };

  useEffect(() => {
    getCoinsData();
  }, []);

  return (
    <div className='main-container'>
      <div className='search-bar-container'>
        <input
          className='search-bar'
          type='search'
          placeholder='Type to search'
          name='search'
          value={searchForm}
          onChange={handleSearch}
          onBlur={() => filteredSearch(searchForm)}
        />
      </div>
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
