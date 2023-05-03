import { useEffect, useState } from "react";
//Main Components
import "./App.css";

//Routers
import { Route, Routes } from "react-router-dom";

//Same Pages
import { Layout } from "./Layout/Layout";
import Home from "./pages/Home";

//Pages
import { LoginPage } from "./pages/AuthPages/LoginPage";
import { RegisterPage } from "./pages/AuthPages/RegisterPage";
import { Promotion } from "./pages/Promotion/Promotion";
import PromotionPage from "./components/PromotionPage/PromotionPage";
// import Delivery from "./components/Delivery/Delivery";
// import Catalog from "./pages/Catalog/Catalog";
import axios from "axios";
// import Decor from './pages/Decor/Decor';
import { Catalog } from "./pages/Catalog/Catalog";
import Decor from "./pages/Decor/Decor";
// import PromotionPage from "./components/PromotionPage/PromotionPage";
import Delivery from "./components/Delivery/Delivery.jsx";

const App = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`https://6446488f0431e885f00dc09b.mockapi.io/api/v1/cards`, {
          method: "GET",
          headers: { "content-type": "application/json" },
        })
        .then((res) => setData(res.data[1].cards))
        .catch((err) => err.message);
    };
    getData();
  }, []);

  console.log(data);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path=""
          element={<Home />}
        />
        <Route
          path="/promotion"
          element={<Promotion />}
        />
        <Route
          path="/promotionPage"
          element={<PromotionPage />}
        />
        <Route
          path="/delivery"
          element={<Delivery />}
        />
        <Route
          path="/catalog"
          element={<Catalog />}
        />
        <Route
          path="/decor"
          element={<Decor />}
        />
      </Route>
      <Route
        path="/Login"
        element={<LoginPage />}
      />
      <Route
        path="/register"
        element={<RegisterPage />}
      />
    </Routes>
  );
};

export default App;
