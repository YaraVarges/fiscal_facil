import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NCM from "./pages/NCM";
import CFOP from "./pages/CFOP";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ncm" element={<NCM />} />
          <Route path="/cfop" element={<CFOP />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
