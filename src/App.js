import "./App.css";

import { Routes, Route } from "react-router-dom";

import CoinsTable from "./components/CoinsTable/CoinsTable";
import Header from "./components/Header/Header";
import CoinDetailsPage from "./pages/CoinDetailsPage/CoinDetailsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  return (
    <div className='App'>
      <Header></Header>

      <Routes>
        <Route path='/' element={<CoinsTable />} />

        <Route path='/:coinID' element={<CoinDetailsPage />} />

        {/* Error Route */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
