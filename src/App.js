import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Contacts from './pages/Contacts/Contacts';
import PrivacyPage from './pages/Privacy/Privacy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/sabzlandsuite' element={<Services/>} />
            <Route path='/connectpur' element={<Products/>} />
            <Route path='/contact' element={<Contacts/>} />
            <Route path='/privacypolicy' element={<PrivacyPage/>} />
          </Routes>
          <Footer />
      </Router>
    
  );
}

export default App;
