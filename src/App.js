import { Route, Routes } from "react-router-dom";
import "./App.css";
import Decor from "./pages/Decor/Decor";
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
  );
};

export default App;
