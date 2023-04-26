import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Promotion from "./pages/Promotion/Promotion";
import Private from "./pages/Private/Private";

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/private" element={<Private />}/>
      </Routes>
    </>
  );
}

export default App;
