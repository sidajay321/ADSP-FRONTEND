import React, { useEffect, useState } from "react";
import AppLayout from "./AppLayout";
import img2 from "./assits/img2.png";
import star from "./assits/Star.svg";
import { Link, useLocation, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Productsingle = ({ businessData, url }) => {
  const location = useLocation()
  const params = useParams()
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    setProductData(businessData?.businessProduct?.find((e) => e.bp_id == params?.productId))
  }, [params?.productId]);
  console.log(productData);
  return (
    <div className="">
      <Navbar businessData={businessData?.businessData} userData={businessData?.userData} />
      <div className="container bg-light p-3" style={{ height: "60vh" }}>
        <h2 style={{ fontSize: "30px" }}>Product Details</h2>
        <br />
        <div className="row">
          <div className="col-sm-4">
            <img src={url + productData?.bp_image} />
          </div>
          <div className="col-sm-8">
            <h2 className="font-bold  text-[30px] sm:text-[38px]  text-[#3D3D3D]">
              {productData?.bp_name}
            </h2>
            <div className="mt-4 sm:mt-8 font-normal text-[16px] sm:text-[20px] tracking-[1px]">
              <p>
                {productData?.bp_description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer businessData={businessData?.businessData} url={url} />
    </div >
  );
};

export default Productsingle;
