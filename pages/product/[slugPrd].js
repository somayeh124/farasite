import { domin, onRun } from "@/api/config";
import Footer from "@/components/footer";
// import Header from "@/components/header";
import HeaderMenu from "@/components/HeaderMenu";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const BlogDetails = () => {
  const [data, setData] = useState({});
  const router = useRouter();
  const [route, setRoute] = useState();

  // const parseHTML is about making data.paragraph formatted and giving it tailwind styles
  const parseHTML = () => {
    if (
      data.Paragraph !== undefined &&
      !data.Paragraph.includes("table-fixed")
    ) {
      let dataReplace = data.Paragraph.replace(
        /<table/g,
        '<table className="table-fixed border-separate border border-slate-500"'
      );
      dataReplace = dataReplace.replace(
        /<td/g,
        '<td className="border border-slate-700 p-2 m-2 border-indigo-500/50"'
      );

      setData({ ...data, Paragraph: dataReplace });
    }
  };
  useEffect(() => {
    if (router.query["slugPrd"]) {
      setRoute(router.query["slugPrd"]);
    }
  }, [router.query]);

  useEffect(() => {
    if (route !== undefined) {
      axios
        .get(`${onRun}/soloproducts/?Domain=${domin}&route=${route}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          console.error("Error fetching blog data:", err);
        });
    }
  }, [route]);

  useEffect(parseHTML, [data]);

  return (
    <>
        <HeaderMenu />
      <div className="w-full mx-auto bg-white py-20">


        <div className="pt-10 max-w-5xl mx-auto">
          <div className="mb-4 md:mb-0 w-full lg:px-1 px-4 mx-auto relative">
            {data.Picture && (
              <Image
                alt="product image"
                src={data.Picture}
                className="object-cover mx-auto shadow-xl rounded-xl m-5"
                width={300}
                height={350}
              />
            )}
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-10 h-fit md:mx-auto mx-5">
            <div className="px-4 m-5 xl:my-10 lg:mx-5 lg:px-0 mx-auto text-gray-700 text-lg leading-relaxed w-full overflow-y-auto lg:w-11/12">
              <h2 className="text-3xl text-gray-800 font-bold mb-4">
                {data.Title}
              </h2>
              <div
                className="pb-6 font-semibold leading-10 mb-10 my-auto h-full"
                dangerouslySetInnerHTML={{ __html: data.Paragraph }}
              />
            </div>
            {data.AdditoionalImage && (
              <div>
                <div className="px-4 m-5 xl:my-10 lg:mx-5 lg:px-0 mx-auto text-gray-700 text-lg leading-relaxed w-full overflow-y-auto lg:w-11/12">
                  <h2 className="text-3xl text-gray-800 font-bold mb-4">
                    {data.Title}
                  </h2>
                  <div
                    className="pb-6 font-semibold leading-10 mb-10 my-auto h-full"
                    dangerouslySetInnerHTML={{ __html: data.Paragraph }}
                  />
                </div>
                <div className="lg:my-10">
                  <Image
                    alt="additional image"
                    src={data.AdditoionalImage}
                    className="object-cover mx-auto shadow-md border border-gray-300 w-full rounded-lg m-5"
                    width={1000}
                    height={350}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogDetails;
