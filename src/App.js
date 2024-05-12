import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, useLocation } from 'react-router-dom';
import Template1Home from './template1/index';
import Layout from './home/Components/Layout';
import Searchpag from './home/Components/Searchpag';
import ContactUs from './template2/components/ContactUs';
import Productsingle from './template2/components/Productsingle';
import Blogepg from './template2/components/Blogepg';
import Product from './template2/components/Product';
import LayoutTemplate2 from './template2/components/Layout';
import NotFoundPage from './components/notFoundPage';

function BusinessDetails() {
  const navigate = useNavigate();
  const { businessId } = useParams();
  const [businessData, setBusinessData] = useState(null);
  const url = 'https://www.admin.bizzata.in/assets/uploads/'
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.admin.bizzata.in/custom/rest/api.php?getUserBusinessData=true&businessId=${businessId}`);
        const data = await response.json();
        setBusinessData(data);
      } catch (error) {
        console.error('Error fetching business data:', error);
      }
    };
    fetchData();
  }, [businessId]);

  console.log(businessData)
  if (!businessData?.status) {
    navigate('/page-not-found');
    return null;
  }
  if (!businessId) {
    navigate('/page-not-found');
    return null;
  }

  if (businessData?.businessData?.ub_template_id == 1) {
    return (
      <Template1Home businessData={businessData} />
    );
  } else if (businessData.businessData.ub_template_id == 2) {
    return (
      <LayoutTemplate2 businessData={businessData} url={url} />
    );
  } else {
    return (
      <LayoutTemplate2 businessData={businessData} url={url} />
    )
  }
}


function BusinessProductSingle() {
  const navigate = useNavigate();
  const { businessId } = useParams();
  const [businessData, setBusinessData] = useState(null);
  const url = 'https://www.admin.bizzata.in/assets/uploads/'
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.admin.bizzata.in/custom/rest/api.php?getUserBusinessData=true&businessId=${businessId}`);
        const data = await response.json();
        setBusinessData(data);
      } catch (error) {
        console.error('Error fetching business data:', error);
      }
    };
    fetchData();
  }, [businessId]);

  console.log(businessData)
  if (!businessData?.status) {
    navigate('/page-not-found');
    return null;
  }
  if (!businessId) {
    navigate('/page-not-found');
    return null;
  }

  if (businessData?.businessData?.ub_template_id == 1) {
    return (
      <Productsingle businessData={businessData} url={url} />
    );
  } else if (businessData.businessData.ub_template_id == 2) {
    return (
      <Productsingle businessData={businessData} url={url} />
    );
  } else {
    return (
      <Productsingle businessData={businessData} url={url} />
    )
  }
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/page-not-found" element={<NotFoundPage />} />
        <Route path="/business/" element={<NotFoundPage />} />
        <Route path="/business/:businessId/" element={<BusinessDetails />} />
        <Route path="/searchpg" element={<Searchpag />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/business/:businessId/product/:productId" element={<BusinessProductSingle />} />
        <Route path="/business/:businessId/product/" element={<NotFoundPage />} />
        <Route path="/fashion/blogepg" element={<Blogepg />} />
        <Route path="/fashion/product" element={<Product />} />
        <Route path="/fashion/product:/Id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
