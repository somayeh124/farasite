import React from "react";
import IntroBanner from "@/components/introBanner";
import IntroCards from "@/components/introCards";
import IntroList from "@/components/introList";

import HeaderMenu from "@/components/HeaderMenu";
import Footer from "@/components/Footer";

const Introduction = () => {
  return (
    <>
      <div className="bg-white">
      <HeaderMenu />
        <IntroBanner />
        <IntroCards />
        <IntroList />
        
      </div>
      <Footer />
    </>
  );
};
export default Introduction;
