import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AiSeo from './pages/AiSeo';
import StockResearch from './pages/StockResearch';
import Forecasting from './pages/Forecasting';
import PowerBi from './pages/PowerBi';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-seo" element={<AiSeo />} />
            <Route path="/stock-research" element={<StockResearch />} />
            <Route path="/forecasting" element={<Forecasting />} />
            <Route path="/power-bi" element={<PowerBi />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;