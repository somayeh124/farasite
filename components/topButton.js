import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };

  return (
    <button
      className={`bg-gray-500 hover:bg-[#4f46e5] transition hover:scale-100 hover:duration-300 hover:-translate-y-3 delay-100 hover: size-11 shadow-md fixed bottom-4 right-4 rounded-full p-2 outline-none duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <ChevronUpIcon className="text-white" />
    </button>
  );
};

export default ScrollToTopButton;
