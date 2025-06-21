import React from "react";

const Subscribe = () => {
  return (
    <section>
      <div className="container">
        <div className=" py-[120px]  ">
          <div className="bg-[#FF5300] rounded-[10px] shadow-shadow w-[1170px] py-[51px] px-[40px] ">
            <div className="flex flex-row flex-wrap mx-[-12px] ">
              <div className="lg:w-5/12 w-full ">
              <div className="flex items-center  ">

                <h1 className="font-poppins font-normal text-[16px] leading-[24px] text-white ">
                  Subscribe Newsletter
                </h1>
                <span className="w-[40px] border-[1px] bg-[#FFFFFF] inline-block  h-[1px] mt-[10px] ml-[10px] " ></span>
              </div>
              <h2 className="font-poppins font-semibold text-[39px] leading-[58px] text-white pt-[15px] " >Lets Stay In Touch</h2>

              </div>
              <div className="lg:w-7/12 w-full">
              
                <div className="py-[13px]  ps-[25px] rounded-[5px]   pe-[5px] bg-[#FFFFFF] flex ">
                    
                <input type="email" placeholder="Enter your email" className="font-poppins w-full   font-normal text-[16px] leading-[24px] text-[#7B7B7B]  " />

                <button className="font-poppins font-medium text-[20px] leading-[30px]  text-white text-nowrap bg-[#FF5300] rounded-[5px] py-[15px] ps-[39px] pe-[33px] " > Subscribe Now </button>
             
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
