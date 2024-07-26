import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { domin, onRun } from "@/api/config"; 
import Counselate from '@/components/Counselate';
import Footer from '@/components/footer';
import HeaderMenu from '@/components/HeaderMenu';

export default function CounselingPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const getData = async () => {
    try {
      const response = await axios.get(`${onRun}/consulation/?Domain=${domin}`);
      setData(response.data);
      console.log(response.data, "counseling");
    } catch (error) {
      setError("خطا در دریافت داده‌ها");
      console.error("Error fetching data in Counseling:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data.length) {
    return <div>داده‌ای موجود نیست</div>;
  }

  return (
    <>
      <HeaderMenu />
      {data.length === 0 ? (
        <p >داده‌ای موجود نیست</p>
      ) : (
        <Counselate items={data} />
      )}
      <Footer />
    </>
  );
}
