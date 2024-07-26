import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/HeaderMenu";
import Footer from "@/components/Footer";
import Banner from "../components/banner";

const SuperProduct = () => {

  return (
    <>
      <div className="bg-white">
        <HeaderMenu />
        <div className="py-4">
          <Banner />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SuperProduct;
