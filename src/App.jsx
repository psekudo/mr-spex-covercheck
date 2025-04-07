import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Brillen from "./brillen";
import Sonnenbrillen from "./sonnenbrillen";
import Kontaktlinsen from "./kontaktlinsen";
import Marken from "./marken";
import Botique from "./botique";
import Kostenlosersehtest from "./Kostenlosersehtest";
import Stores from "./stores";
import Winterdeal from "./winterdeal";

const App = () => {
  return (
    
    <Router>
      <div>
        <Header />
        <div className='display-block-title-mobile'>
              <h1 className="mobile-header-h1">Hilfe & Beratung</h1>
        </div>
        {/* Navigation Bar */}
        <nav className="navigation-bar">
          <ul className="router-layout" style={{ listStyleType: 'none'}}>
            <li><Link to="/brillen">Brillen</Link></li>
            <li><Link to="/sonnenbrillen">Sonnenbrillen</Link></li>
            <li><Link to="/kontaktlinsen">Kontaktlinsen</Link></li>
            <li><Link to="/marken">Marken</Link></li>
            <li><Link to="/botique">Botique</Link></li>
            <li><Link to="/">Kostenloser_sehtest</Link></li>
            <li><Link to="/stores">Stores</Link></li>
            <li><Link to="/winterdeal">Winterdeal</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/brillen" element={<Brillen />} />
          <Route path="/sonnenbrillen" element={<Sonnenbrillen />} />
          <Route path="/kontaktlinsen" element={<Kontaktlinsen />} />
          <Route path="/marken" element={<Marken />} />
          <Route path="/botique" element={<Botique />} />
          <Route path="/" element={<Kostenlosersehtest />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/winterdeal" element={<Winterdeal />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;