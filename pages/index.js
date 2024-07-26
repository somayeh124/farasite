import FrequentlyQuestion from "@/components/faq";
import Blog from "@/components/blogs";
import QuickAccess from "@/components/quickAccess";
import ContactUs from "@/components/contactUs";
import AboutUs from "@/components/aboutus";
import Branches from "@/components/branch";
import SlideShow from "@/components/slideShow";

import BusinessPartners from "@/components/BusinessPartners";
import ScrollToTopButton from "@/components/topButton";
import { useEffect, useState } from "react";
import loadWidget from "@/components/ChatBox";
import Statistics from "@/components/statistics";

import ProductsList from "../components/productsList";
import HeaderMenu from "../components/HeaderMenu";
import ContentList from "@/components/contenctList";
// import Live from "@/pages/live.js";
import ComprsionContent from "@/components/ComprsionContent";
import AboutTabs from "@/components/contents";
import CompaniesSection from "@/components/companiesSection";
import Footer from "@/components/Footer";
import TabVision from "@/components/tabvision";
import DropDown from "@/components/dropdpwn";

import { domin } from "@/api/config";

export default function Home() {
  const [isProduct, setIsProduct] = useState(false);
  useEffect(() => {
    loadWidget();
  }, []);
  return (
    <>
      <div className="scroll-smooth bg-gray-200">
        <HeaderMenu />

        <div className="bg-white h-3/5 hidden sm:block">
          <SlideShow />
        </div>
        <CompaniesSection />

        <div className=" bg-white h-fit">
          <AboutTabs />
        </div>
        <div className="bg-white h-fit">
          <ContentList />
        </div>
        <ComprsionContent />
        <Statistics />
        <div className="bg-white h-fit sm:pt-0">
          <ProductsList setIsProduct={setIsProduct} />
        </div>

        {domin === "isatispooya.com" ? null : (
          <>
            <div className="bg-white h-fit px-12 py-10">
              <Branches />
            </div>
            <div className="bg-white h-fit px-12 py-5">
              <FrequentlyQuestion />
            </div>
          </>
        )}

        <div className="bg-white h-fit px-12 py-5 ">
          <Blog />
        </div>
        <div className="bg-white h-fit px-12 py-5">
          <ContactUs />
        </div>
        <div className="bg-white h-fit px-12 py-5">
          <BusinessPartners />
        </div>
        <div className="bg-white h-fit px-12 py-5">
          <QuickAccess />
        </div>
        <div className="bg-white h-fit px-12 py-5 pb-10">
          <AboutUs />
        </div>

        <div className="bg-white">
          <Footer />
        </div>
        <div className="hidden md:block">
          <ScrollToTopButton />
        </div>
      </div>
    </>
  );
}
