import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Promotion from './pages/Promotion/Promotion';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import Catalog from './pages/Catalog/Catalog';
import Decor from './pages/Decor/Decor';
import Contact from './pages/Contact/Contact';
import Cooperation from './pages/Cooperation/Cooperation';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/decor" element={<Decor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cooperation" element={<Cooperation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
