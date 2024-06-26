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

const Template1Home = ({ businessData }) => {
  console.log(businessData)
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
