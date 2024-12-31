import apple from "../assets/images/apple.png";
import { FaArrowRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import AOS from "aos";
import heros from "../assets/images/heros.png";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
 
  duration: 1000, // values from 0 to 3000, with step 50ms

});

let heroLink = [
  { name: "Woman's Fashion" },
  { name: "Men's Fashion" },
  { name: "Electronics" },
  { name: "Home & StyleLife" },
  { name: "Medicine" },
  { name: "Sports & Outdoor" },
  { name: "Baby's & Toys" },
  { name: "Groceries & Pets" },
  { name: "Health & Beauty" },
];

export default function Hero() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <div
        className={`  flex justify-center items-center  2xl:hidden xl:flex lg:hidden md:hidden sm:hidden mobile:hidden`}
      >
        <div
          id="heroMain"
          className=" w-[100%] h-[500px] 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col mobile:flex-col flex mb-7 md:h-auto sm:h-auto mobile:h-auto  sm:mb-7 "
        >
          <div className=" 2xl:w-[30%] md:hidden sm:hidden mobile:hidden lg:flex 2xl:felx xl:flex   xl:w-[30%] lg:w-[100%] md:w-[100%]   sm:w-[100%] mobile:w-[100%] center 2xl:pl-[120px] xl:pl-[110px]   border-r ">
            <div
              data-aos="fade-right"
              className=" w-[270px] h-[344px] flex flex-col gap-4 2xl:w-[270px] 2xl:h-[344px] xl:w-[270px] xl:h-[344px] xl:items-start 2xl:items-start lg:items-center lg:w-[100%]  md:items-center md:w-[100%] sm:items-center sm:w-[100%]   mobile:items-center mobile:w-[100%] "
            >
              {heroLink.map((value, index) => {
                return (
                  <li
                    key={index}
                    className={`${
                      darkMode ? "text-white" : ""
                    }    list-none  font-normal text-base text-black 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[18px] sm:text-[15px] mobile:text-[15px]`}
                    id={index}
                  >
                    {value.name}
                  </li>
                );
              })}
            </div>
          </div>
          <div className=" mx-2 2xl:w-[70%]  xl:w-[70%] lg:w-[100%] md:w-[100%] sm:w-[100%] 2xl:h-[500px] xl:h-[500px] lg:h-[100px] center">
            <div
              className={` ${
                darkMode ? "bg-neutral-900 text-white" : "bg-black"
              }
               
                 w-[892px] py-6 rounded  gap-4 2xl:w-[892px] 2xl:h-[344px] xl:w-[892px] xl:h-[344px] lg:w-[892px]  md:w-auto sm:w-auto px-3 mobile:my-4 mobile:w-auto `}
            >
              <div className="flex justify-center it  ">
                <div
                  data-aos="fade-right"
                  className="flex flex-col justify-center gap-1   "
                >
                  <div
                    id="firstline"
                    className="flex  items-center gap-[24px] sm:gap-2 mobile:gap-2"
                  >
                    <div>
                      <img
                        className=" 2xl:w-10 xl:w-10 lg:w-10 sm:w-6 md:w-6 mobile:w-4 2xl:h-12 xl:h-12 lg:h-12 md:h-7 sm:h-7 mobile:h-4"
                        src="https://i.imghippo.com/files/krqH4867t.png"
                        alt=""
                      />
                    </div>
                    <h5 className="font-normal 2xl:text-base  xl:text-base lg:text-base sm:text-xs md:text-xs mobile:text-[5px] text-white">
                      iPhone 14 Series
                    </h5>
                  </div>
                  <div>
                    <h1 className=" 2xl:font-semibold  xl:font-semibold  lg:font-semibold  md:font-normal sm:font-normal mobile:font-normal   text-white leading-[60px] 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-2xl sm:text-2xl mobile:text-xs">
                      <span className="flex flex-col 2xl:gap-3 xl:gap-3 lg:gap-3 md:gap-3 sm:gap-3 mobile:gap-0">
                        <span>Up to 10% </span> <span>off Voucher</span>{" "}
                      </span>{" "}
                    </h1>
                  </div>
                  <div className="flex font-semibold   gap-2  text-white   2xl:text-base xl:text-base lg:text-base md:text-[10px] sm:text-[10px] mobile:text-[5px]">
                    {" "}
                    Shop Now{" "}
                    <span className=" 2xl:pt-2 xl:pt-2 lg:pt-2 md:pt-1 sm:pt-1 mobile:pt-0 2xl:text-xs xl:text-xs lg:text-xs md:text-[10px] sm:text-[10px] mobile:text-[5px]">
                      <FaArrowRight />
                    </span>
                  </div>
                </div>

                <div
                  id="apple phone side"
                  data-aos="fade-left"
                  className="-mb-20 "
                >
                  <img
                    className="2xl:w-[496px] xl:w-[496px] 2xl:h-[320px] xl:h-[320px] lg:w-[250px] md:w-[200px]  sm:w-[200px] mobile:w-[100px]  "
                    src="https://i.imghippo.com/files/Ttel8974XWM.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-2   2xl:flex xl:hidden lg:flex md:flex sm:flex mobile:flex ">
        <img
          className="mx-auto  rounded-sm cursor-none bg-neutral-950"
          src="https://i.imghippo.com/files/aqCB6876RQ.png"
          alt=""
        />
      </div>
    </>
  );
}