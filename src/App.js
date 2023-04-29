import { Route, Routes } from "react-router-dom";
import "./App.css";
import Decor from "./pages/Decor/Decor";
<<<<<<< HEAD
import { Layout } from "./Layout/Layout";
import Home from "./pages/Home";
import { Promotion } from "./pages/Promotion/Promotion";
import PromotionPage from "./components/PromotionPage/PromotionPage";
import Delivery from "./components/Delivery/Delivery.jsx";
import { Catalog } from "./pages/Catalog/Catalog";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/promotionPage" element={<PromotionPage />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/decor" element={<Decor />} />
      </Route>
    </Routes>
=======
import Home from "./pages/Home";
import Promotion from "./pages/Promotion/Promotion";
import Private from "./pages/Private/Private";
import PromotionPage from "./components/PromotionPage/PromotionPage";
import Delivery from "./components/Delivery/Delivery";
import Catalog from "./pages/Catalog/Catalog";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";

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
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/private" element={<Private />} />
        <Route path="" element={<Home />} />
        <Route
          path="/promotion"
          element={
            <Promotion setValue={setValue} data={data} setData={setData} />
          }
        />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/decor" element={<Decor />} />
        <Route path="/promotionPage" element={<PromotionPage />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
      <Footer />
    </>
>>>>>>> 894b465085409a29ab10624dcb121c72e634d61d
  );
};

export default App;
