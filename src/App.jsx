import { Route, Routes } from "react-router-dom";
import Decor from "./pages/Decor/Decor";
import "./App.css"
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Promotion from "./pages/Promotion/Promotion";
import PromotionPage from "./components/PromotionPage/PromotionPage";
import Delivery from "./components/Delivery/Delivery";
import Catalog from "./pages/Catalog/Catalog";
import Comment from "./pages/Comment/Comment";
import { useEffect, useState } from "react";
import axios from "axios";

export const App = () => {
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
        <Route path="" element={<Home />} />
        <Route
          path="/promotion"
          element={
            <Promotion setValue={setValue} data={data} setData={setData} />
          }
        />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/comment" element={<Comment/>}/>
        <Route path="/decor" element={<Decor />} />
        <Route path="/promotionPage" element={<PromotionPage />} />
        <Route path="/delivery" element={<Delivery />} />
      </Route>
    </Routes>
  );
};