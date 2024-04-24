import React, { useEffect, useState } from 'react';
import Layout from './layouts';
import Whitebox from './components/Whitebox';
import SocailMediaBox from './components/SocailMediaBox';
import ContactUs from './components/ContactUs';
import ServicesBox from './components/ServicesBox';
import OurGallery from './components/OurGallery';
import Form from './components/Form';
import Product from './components/Product';
import { HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const Template1Home = () => {
  const params = useParams();
  console.log(params);
  const [businessData, setBusinessData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.admin.bizzata.in/adsp/custom/rest/api.php?getUserBusinessData=true&businessId=' + params.businessId);
        const data = await response.json();
        setBusinessData(data);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };
    fetchData();
  }, [params.businessId]);
  return (
    <>
      <HelmetProvider>
        <title>{businessData?.businessData?.ub_home_title || 'Default Title'}</title>
        <meta name="description" content={businessData?.businessData?.ub_meta_description || 'Default Description'} />
        <meta name="keywords" content={businessData?.businessData?.ub_meta_keyword || 'Default Keywords'} />
      </HelmetProvider>
      <Layout>
        <Whitebox />
        {/* <IntroCard/> */}
        <SocailMediaBox businessData={businessData?.businessData} />
        <ContactUs businessData={businessData?.businessData} />
        <Product businessProduct={businessData?.businessProduct} />
        <ServicesBox businessServices={businessData?.businessServices} />
        <OurGallery businessGallery={businessData?.businessGallery} />
        <Form />
      </Layout>
    </>
  );
};

export default Template1Home;
