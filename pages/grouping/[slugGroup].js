import { domin, onRun } from "@/api/config";
import Footer from "@/components/footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderMenu from "@/components/HeaderMenu";

const GroupingList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { slugGroup } = router.query;

  useEffect(() => {
    console.log(
      `${onRun}/newswithgrouping/?Domain=${domin}&grouping=${slugGroup}`
    );
    if (slugGroup) {
      axios
        .get(`${onRun}/newswithgrouping/?Domain=${domin}&grouping=${slugGroup}`)
        .then((response) => {
          setData(response.data || []);
          setLoading(false);
          console.log(response.data, 1111);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
          console.log(err, "لعنت به ارور");
        });
    }
  }, [slugGroup]);

  if (loading) {
    return (
      <div className="h-full flex justify-center items-center">
        <p>در حال بارگزاری...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex justify-center items-center ">
        <p>خطا در بارگزاری , مجددا تلاش کنید</p>
      </div>
      
    );
  }

  console.log(data);

  return (
    <div className="h-full">
      <HeaderMenu />
      <div className="bg-white h-full">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-indigo-900">
            دسته‌بندی: {slugGroup}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10 md:grid-cols-2 xl:grid-cols-3">
            {data.length === 0 ? (
              <div className="border rounded-lg bg-[#172554] bg-opacity-30 shadow-2x1 shadow-inner py-4 mx-auto sm:max-w-md lg:max-w-xl xl:max-w-2xl col-span-full w-full shadow-indigo-500/40 ">
                <p className="text-center text-lg font-bold text-indigo-900 italic hover:not-italic p-3">
                  درحال حاظر مقاله و اخباری وجود ندارد.
                </p>
              </div>
            ) : (
              data.map((i) => (
                <div
                  key={i.id}
                  className="shadow-md rounded-xl px-2 py-2 w-fit border"
                >
                  <Link href={`/blog/${i.route}`} target="_blank">
                    <Image
                      width={1000}
                      height={1000}
                      className="object-center w-full h-64 rounded-lg hover:opacity-80 lg:h-80"
                      src={i.Picture || "/images/photo4.jpg"}
                      alt={i.Title}
                      onError={(e) => {
                        e.target.onerror = null; // prevents looping
                        e.target.src = "/images/photo4.jpg";
                      }}
                    />
                  </Link>
                  <div className="my-auto py-2 mx-4">
                    <span className="text-indigo-600 uppercase">
                      {i.TypeOfContent}
                    </span>
                    <h1 className="mt-4 text-lg font-semibold text-gray-800">
                      {i.Title}
                    </h1>
                    <p className="mt-2 text-gray-500">{i.ShortDescription}</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex flex-row">
                        <p className="text-gray-600 pl-1">#</p>
                        <Link
                          href={`/grouping/${i.Grouping}`}
                          className="text-sm font-mono text-gray-500 hover:underline hover:text-gray-500"
                        >
                          {i.Grouping_title}
                        </Link>
                      </div>
                      <p className="text-sm text-gray-500">
                        {new Date(i.CreateAt).toLocaleDateString()}
                      </p>
                      <Link
                        href={`/blog/${i.route}`}
                        target="_blank"
                        className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#232563] rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                      >
                        مطالعه
                      </Link>
                    </div> 
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default GroupingList;