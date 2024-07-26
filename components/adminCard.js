import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import LinkedIn from  "/images/linkedin.svg";
import userIcon from "/images/userIcon.svg";
import khabiri from "../images/khabiri.png";
import idIcon from "../images/idIcon.svg";

const AdminCard = ({ source, title, name, email, phone }) => {
  
  return (
    <>
      <div>
        <div className="h-fit">
          <div className="h-fit mt-9">
            <div className="relative flex flex-col items-center p-10 max-w-xs border-gray-300 bg-white rounded-2xl shadow-lg border pt-10">
              <div className="text-center text-gray-500 dark:text-gray-400">
                <Image
                  width={500}
                  height={500}
                  className="mx-auto mb-4 w-36 h-36 rounded-3xl"
                  alt="error"
                  src={`http://farasite.fidip.ir/${source}`}
                />
              </div>
              <div className="text-center text-gray-500 dark:text-gray-400 w-full">
                <h3 className="text-lg text-black font-bold pt-2 text-center truncate max-w-full">
                  {title}
                </h3>
                <p className="font-normal text-center py-5 text-gray-700">
                  {name}
                </p>
                <div className="bottom-0 flex justify-space-between w-full">
                  <Link
                    className="flex flex-row  mr-2 ml-2 text-black items-center bg-white hover:bg-gray-200  font-semibold py-2 px-4 border border-gray-400 rounded shadow-md"
                    href={`mailto:${email}`}
                  >
                    ایمیل
                    <div className=" relative size-5">
                      <EnvelopeIcon className=" absolute left-0 top-0 " />
                    </div>
                  </Link>
                  <Link
                    href={`tel:${phone}`}
                    className="flex flex-row  mr-2 ml-2 text-black items-center bg-white hover:bg-gray-200  font-semibold py-2 px-4 border border-gray-400 rounded shadow-md"
                  >
                    تماس
                    <div className=" relative size-5">
                      <PhoneIcon className="  absolute left-0 top-0" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div
        dir="rtl"
        className="items-center rounded-lg shadow sm:flex  w-fit bg-gradient-to-r from-gray-200 to-gray-100 mr-5"
      >
        <a href="#">
          <Image
            className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg "
            width={200}
            height={200}
            src={khabiri}
            alt="Bonnie Avatar"
          />
        </a>
        <div className="p-5 mr-5 ">
          <h3 className="text-lg  flex items-center font-bold tracking-tight text-indigo-500 ">
          <Image
            src={idIcon}
            width={15}
            height={15}
            alt="userIcon"
            className="ml-1"

          />
            <a href="#">{name}</a>
          </h3>
          <span className="text-indigo-800 flex items-center font-extrabold text-md mt-2">
          <Image
            src={userIcon}
            width={15}
            height={15}
            alt="userIcon"
            className="ml-1"

          />
            {title}
          </span>
          <p className="mt-5 mb-4 font-light text-gray-900 dark:text-gray-900 ">
          اگر بتوانید همهء کارکنان یک سازمان را به سوی یک هدف مشترک بسیج کنید,<br/> در هر رشته و در هر بازار و در برابر هر رقیبی, در هر زمانی موفق خواهید شد!
          </p>
          <ul className="flex space-x-4 sm:mt-0">

            <li>
              <a
                href="https://www.linkedin.com/"
                className=""
              >
               <Image
                width={20}
                height={20}
                src={LinkedIn}
                alt="linkedIn"
                className=""
               />
              </a>
            </li>
            


          </ul>
        </div>
      </div> */}
    </>
  );
};
export default AdminCard;
