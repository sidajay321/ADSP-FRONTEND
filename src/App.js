import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Template1Home from './template1/index';
import Layout from './home/Components/Layout'
import Searchpag from './home/Components/Searchpag'
import ContactUs from './template2/components/ContactUs'
import Productsingle from './template2/components/Productsingle'
import Blogepg from './template2/components/Blogepg'
import Product from './template2/components/Product'
import LayoutTemplate2 from './template2/components/Layout'
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Template1Home />} /> */}
        <Route path="/business/:businessId/" element={<Template1Home />} />
        <Route path="/" exact element={<Layout />} />
        <Route path="/searchpg" element={<Searchpag />} />
        <Route path="/fashion" element={<LayoutTemplate2 />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/fashion/productsingle" element={<Productsingle />} />
        <Route path="/fashion/blogepg" element={<Blogepg />} />
        <Route path="/fashion/product" element={<Product />} />
        <Route path="/fashion/product:/Id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
