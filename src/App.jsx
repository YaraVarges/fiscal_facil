import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NCM from "./pages/NCM";
import CFOP from "./pages/CFOP";
import CSTICMS from "./pages/CSTICMS";
import CSOSN from "./pages/CSOSN";
import CEST from "./pages/CEST";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="flex-grow bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ncm" element={<NCM />} />
          <Route path="/cfop" element={<CFOP />} />
          <Route path="/csticms" element={<CSTICMS />} />
          <Route path="/csosn" element={<CSOSN />} />
          <Route path="/cest" element={<CEST />} />
        </Routes>
      </main>
      <Footer className="bg-amber-700 text-white p-4"/>
    </Router>
  );
};

export default App;
