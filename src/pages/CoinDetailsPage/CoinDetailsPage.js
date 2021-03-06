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
      <>
        <div className='details-container'>
          <h4 className='details-title'>Description:</h4>
          <span className='details-text'>{coinData.description.en}</span>
          <h4 className='details-title'>Market cap: </h4>
          <span className='details-text'>{coinData.market_data.market_cap.eur} €</span>
          <h4 className='details-title'>Total Volume traded: </h4>
          <span className='details-text'>{coinData.market_data.total_volume.eur} € </span>
        </div>
        <button className='back-btn' onClick={goBack}>
          Back
        </button>
      </>
    )
  );
};

export default CoinDetailsPage;
