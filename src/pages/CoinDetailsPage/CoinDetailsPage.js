import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CoinDetailsPage = () => {
  const [coinData, setCoinData] = useState(null);

  const { coinID } = useParams();
  const navigate = useNavigate();

  const getCoinData = async () => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinID}`);
      const data = await response.json();
      setCoinData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoinData();
  }, []);

  // small "back" button utility
  const goBack = () => {
    navigate(-1);
  };

  return (
    coinData && (
      <div>
        <button onClick={goBack}>Back</button>
        <p>Description: {coinData.description.en}</p>
        <p>Market cap: {coinData.market_data.market_cap.eur} €</p>
        <p>Total Volume traded: {coinData.market_data.total_volume.eur} € </p>
      </div>
    )
  );
};

export default CoinDetailsPage;
