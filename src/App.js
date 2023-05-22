//Main Components
import "./App.css";
// import Decor from "./pages/Decor/Decor";
// import { Layout } from "./Layout/Layout";
import Layout from "./Layout/Layout";
// import Home from "./pages/Home";
import  Promotion  from "./pages/Promotion/Promotion";

//Routers
import { Route, Routes } from "react-router-dom";

//Same Pages
// import { Layout } from "./Layout/Layout";
import Home from "./pages/Home";

//Pages
import { LoginPage } from "./pages/AuthPages/LoginPage";
import { RegisterPage } from "./pages/AuthPages/RegisterPage";
// import { Promotion } from "./pages/Promotion/Promotion";
import { Catalog } from "./pages/Catalog/Catalog";
import Decor from "./pages/Decor/Decor";
import PromotionPage from "./components/PromotionPage/PromotionPage";
import Delivery from "./components/Delivery/Delivery.jsx";

const App = () => {
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
  )

  }
export default App;
