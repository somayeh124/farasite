import React, { useEffect, useState } from 'react';
import axios from 'axios';  
import { domin, onRun } from "@/api/config"; 
import Exchange from '@/components/exchange';
import Footer from '@/components/footer';
import HeaderMenu from '@/components/HeaderMenu';
import BrifProperty from '@/components/brifProperty';

export default function ExchangePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(`${onRun}/consulation/?Domain=${domin}`);
      setData(response.data);
      console.log(response.data, "counseling");
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data in Counseling:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data.length) {
    return <div>خطای سرور</div>;
  }

  return (
    <>
    <HeaderMenu/>
      <Exchange items={data} />
      <BrifProperty />
      <Footer/>
   </>
  );
}
