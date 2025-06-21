import React from "react";
import img1 from "../assets/images/png/Image (11).png";
import img2 from "../assets/images/png/Image (12).png";
import img3 from "../assets/images/png/Image (13).png";
import img4 from "../assets/images/png/Image (14).png";
import img5 from "../assets/images/png/Image (15).png";
import img6 from "../assets/images/png/Image (16).png";
import img7 from "../assets/images/png/Image (17).png";
import img8 from "../assets/images/png/Image (18).png";
import img9 from "../assets/images/png/Image (19).png";
import { Externallink } from "../common/icon";

export const Webtemplate = () => {
  return (
    <section className=" ">
      <div className="container">
        <div className="flex justify-center items-center lg:pt-[120px] md:pt-[50px] sm:pt-[25px]  ">
          <div className="flex  items-end gap-[10px] ">
            <span className="w-[40px] border-[1px] border-[#FF5300] block mb-[7px]  "></span>
            <h1 className="font-poppins font-normal text-[16px] leading-[24px] text-[#FF5300]  ">
              Our Case Study
            </h1>
            <span className="w-[40px] border-[1px] border-[#FF5300] block mb-[7px]"></span>
          </div>
        </div>
        <div className="flex justify-center items-center pt-[15px] pb-[15px] ">
          <h2 className="font-poppins font-semibold text-[39px] leading-[58px] text-[#373737]  ">
            Our Recent Project
          </h2>
        </div>
        <div className="">
          <ul className="flex  pb-[40px] max-xl:overflow-x-scroll ">
            <li>
              <a
                href=""
                className="rounded-[10px] hover:bg-[#FF5300] text-[#7B7B7B] hover:text-white duration-300  font-poppins font-medium text-[20px] leading-[30px] py-[15px] pe-[51px] ps-[50px] border-none  "
              >
                All
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:rounded-[10px] duration-300 hover:bg-[#FF5300] text-[#7B7B7B]  hover:text-white font-poppins font-medium text-[20px] leading-[30px] py-[15px] px-[35px] text-nowrap border-none "
              >
                UX Design
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:rounded-[10px] duration-300 hover:bg-[#FF5300] text-[#7B7B7B]  hover:text-white font-poppins font-medium text-[20px] leading-[30px] py-[15px] px-[35px] text-nowrap border-none "
              >
                Web Design
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:rounded-[10px] duration-300 hover:bg-[#FF5300] text-[#7B7B7B]  hover:text-white font-poppins font-medium text-[20px] leading-[30px] py-[15px] px-[35px]  text-nowrap border-none"
              >
                App Development
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:rounded-[10px] duration-300 hover:bg-[#FF5300] text-[#7B7B7B]  hover:text-white font-poppins font-medium text-[20px] leading-[30px] py-[15px] px-[35px]  text-nowrap border-none"
              >
                Game Design
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:rounded-[10px] duration-300 hover:bg-[#FF5300] text-[#7B7B7B]  hover:text-white font-poppins font-medium text-[20px] leading-[30px] py-[15px] px-[35px] text-nowrap border-none"
              >
                Graphic Design
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap flex-row mx-[-12px] lg:pb-[120px] md:pb-[50px] sm:pb-[25px] ">
          <div className=" lg:w-4/12 md:w-6/12   w-full   ">
          <div className="relative group">

            <img src={img1} alt="" className="w-[100%] " />
            <div className="absolute w-[266px] h-[230px] bg-[#FF5300BF] flex flex-col justify-center items-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 duration-300 ">
              <Externallink/>
              <h4 className="font-poppins font-semibold text-[25px] pt-[15px] leading-[37px] text-white text-center " >Web Template</h4>
            </div>
          </div>
          </div>
          <div className=" lg:w-4/12 md:w-6/12   w-full   ">
          <div className="relative group ">

            <img src={img4} alt="" className="w-[100%]" />
            <div className="absolute w-[266px] h-[230px] bg-[#FF5300BF] flex flex-col justify-center items-center group-hover:opacity-100 opacity-0  top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2   duration-300 ">
              <Externallink/>
               <h4 className="font-poppins font-semibold text-[25px] pt-[15px] leading-[37px] text-white  " >Web Template</h4>
            </div>
          </div>
          </div>
          <div className=" lg:w-4/12 md:w-6/12   w-full   ">
          <div className="relative group">

            <img src={img7} alt="" className="w-[100%]  " />
            <div className="absolute w-[266px] h-[230px] bg-[#FF5300BF] flex flex-col justify-center items-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 opacity-0 duration-300 ">
              <Externallink/>
              <h4 className="font-poppins font-semibold text-[25px] pt-[15px] leading-[37px] text-white  " >Web Template</h4>
            </div>
          </div>
          </div>

          <div className=" lg:w-4/12 md:w-6/12  w-full  ">
            <div className="relative group ">
              <img src={img2} alt="" className="  w-[100%] " />
              <div className="absolute w-[266px] h-[230px] bg-[#FF5300BF] group-hover:opacity-100 opacity-0 flex flex-col justify-center transform -translate-x-1/2 -translate-y-1/2 items-center duration-300 top-[50%] left-[50%] ">
                <Externallink />

                <h4 className="font-poppins font-semibold text-[25px] pt-[15px] leading-[37px] text-white text-center ">
                  Web Template
                </h4>
              </div>
            </div>
          </div>
          <div className=" lg:w-4/12 md:w-6/12   w-full   ">
            <div className="relative group ">
            <img src={img5} alt="" className="  w-[100%]" />
             <div className="absolute w-[266px] h-[230px] bg-[#FF5300BF] group-hover:opacity-100 opacity-0 flex flex-col justify-center transform -translate-x-1/2 -translate-y-1/2 items-center duration-300 top-[50%] left-[50%] ">
                <Externallink />

                <h4 className="font-poppins font-semibold text-[25px] pt-[15px] leading-[37px] text-white text-center ">
                  Web Template
                </h4>
              </div>
            </div>
          </div>
          <div className=" lg:w-4/12 md:w-6/12   w-full   ">
            
             <div className="relative group ">
            <img src={img8} alt="" className="w-[100%]" />
             <div className="absolute w-[266px] h-[230px] bg-[#FF5300BF] group-hover:opacity-100 opacity-0 flex flex-col justify-center transform -translate-x-1/2 -translate-y-1/2 items-center duration-300 top-[50%] left-[50%] ">
                <Externallink />

                <h4 className="font-poppins font-semibold text-[25px] pt-[15px] leading-[37px] text-white text-center ">
                  Web Template
                </h4>
              </div>
            </div>
          </div>
          <div className=" lg:w-4/12 md:w-6/12  w-full   ">
           <div className="relative group ">
            <img src={img6} alt="" className="w-full bg-black  " />
             <div className="absolute w-[266px] h-[230px] bg-[#FF5300BF]  group-hover:opacity-100 opacity-0 flex flex-col justify-center transform -translate-x-1/2 -translate-y-1/2 items-center duration-300 top-[50%] left-[50%] ">
                <Externallink />

                <h4 className="font-poppins font-semibold text-[25px] pt-[15px] leading-[37px] text-white text-center ">
                  Web Template
                </h4>
              </div>
            </div>
          </div>
          <div className=" lg:w-4/12 md:w-6/12   w-full   ">
             <div className="relative group ">
            <img src={img3} alt="" className="w-[100%] " />
             <div className="absolute w-[266px] h-[230px] bg-[#FF5300BF] group-hover:opacity-100 opacity-0 flex flex-col justify-center transform -translate-x-1/2 -translate-y-1/2 items-center duration-300 top-[50%] left-[50%] ">
                <Externallink />

                <h4 className="font-poppins font-semibold text-[25px] pt-[15px] leading-[37px] text-white text-center ">
                  Web Template
                </h4>
              </div>
            </div>
          </div>
          <div className=" lg:w-4/12 md:w-6/12   w-full   ">
             <div className="relative group ">
            <img src={img9} alt="" className="w-[100%]" />
             <div className="absolute w-[266px] h-[230px] bg-[#FF5300BF] group-hover:opacity-100 opacity-0 flex flex-col justify-center transform -translate-x-1/2 -translate-y-1/2 items-center duration-300 top-[50%] left-[50%] ">
                <Externallink />

                <h4 className="font-poppins font-semibold text-[25px] pt-[15px] leading-[37px] text-white text-center ">
                  Web Template
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
