import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/HeaderMenu";
import Footer from "@/components/footer";
import BarChart from "@/components/barChart";
import Proud from "@/components/proud";
import BrifProperty from "@/components/brifProperty";
import BasketManagement from "@/components/basketmanagement";
import { domin, onRun } from "@/api/config";
import axios from "axios";

const Brief = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
 
  const fetchData = async () => {
    try {
      const response = await axios.get(`${onRun}/brief/?Domain=${domin}`);
      setData(response.data);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(()=>{
    console.log(window.location.hash);
  },[]) 

  return (
    <>
      <div className=" bg-white ">

        <HeaderMenu />
        {error && <div>Error: {error.message}</div>}
        {data ? (
          data.map((item, index) => (
            <div key={index}>
              <BasketManagement item={item.List} title={item.Title} />
              <Proud item={item.Number}/>
              <BarChart />
              <BrifProperty item={item.Card} description={item.Question} title={item.Description}/>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Brief;
