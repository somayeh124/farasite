import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import NewFooter from "@/components/Footer";
import { domin, onRun } from "@/api/config";
// import Header from "../../components/header";
import HeaderMenu from "@/components/HeaderMenu";

const BlogDetails = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      axios
        .get(`${onRun}/newswithroute/?Domain=${domin}&route=${slug}`)
        .then((response) => {
          setData(response.data);
          console.log(response, "111");
        })
        .catch((err) => {});
    }
  }, [slug]);

  return (
    <div className="w-full mx-auto bg-white ">
      <div className="h-28 bg-[#232563]">
        <HeaderMenu />
      </div>

      <div className="pt-10 max-w-5xl mx-auto">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-2xl font-bold text-gray-800 leading-tight">
              {data ? data.KeyWord : null}
            </h2>
            <a
              href=""
              className="py-2 text-[#2c2e68] inline-flex items-center font-normal text-base justify-center mb-2"
            >
              دسته‌بندی: {data ? data.Grouping : null}
            </a>
          </div>

          {(data ? data.Picture : null) && (
            <Image
              alt="Blog image"
              src={data.Picture}
              className="w-full object-cover rounded-3xl p-5"
              width={1000}
              height={350}
            />
          )}
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-10 md:mx-auto mx-5">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-12/12">
            <h2 className="text-3xl text-gray-800 font-bold mb-4">
              {data ? data.Title : null}
            </h2>

            {data && data.Content ? (
              <div
                className="pb-6 font-semibold leading-10 mb-10 my-auto"
                dangerouslySetInnerHTML={{ __html: data.Content }}
              ></div>
            ) : (
              <p> محتوایی موجود نیست </p>
            )}
          </div>
        </div>
      </div>
      <NewFooter />
    </div>
  );
};

export default BlogDetails;
