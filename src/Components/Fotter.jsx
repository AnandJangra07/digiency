import React from "react";
import fbicon from "../common/svg/fbicon.svg";
// import instaicon from "../common/svg/insta.svg";
import { Facebook, Instaicon, Skype, Twitter } from "../common/icon";
import skypeicon from "../common/svg/skype.svg";
import twittericon from "../common/svg/twitte.svg";
import copyright from "../common/svg/copyright.svg";
import orangeicon from "../common/svg/orange.svg";
import arrowicon from "../common/svg/arrow.svg"

const Fotter = () => {
  const year = new Date().getFullYear();
  return (
    <section className="bg-[#000000F2] ">
      <div className="container">
        <div className="flex flex-row flex-wrap mx-[-12px] pb-[60px] pt-[60px] ">
          <div className="lg:w-3/12 w-full ">
          <div className="font-work-sans font-semibold text-[39px] leading-[100%] text-[#FF5300] ">

           <a href="" >
              Digi
              <span className=" text-white" >ency</span>
            </a> 
          </div>
            
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-white pt-[14px] max-w-[270px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
              facilisi quis risus egestas ipsum.
            </p>
          </div>

          <div className="lg:w-3/12 w-full ">
            <h3 className="font-poppins font-semibold text-[25px] leading-[37px] text-[#FF5300]  ">
              Location
            </h3>
           <a href="https://www.google.com/maps/search/3517+W.+Gray+St.+Utica,+Pennsylvania+57867/@41.4304487,-79.9508252,16.25z?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" className="font-poppins font-medium text-[20px] leading-[30px] text-white pt-[20px]" >

              3517 W. Gray St. Utica,
           </a>
            
            <p className="font-poppins font-medium text-[20px] leading-[30px] text-white  ">
              Pennsylvania 57867
            </p>
          </div>

          <div className="lg:w-3/12 w-full ">
            <h3 className="font-poppins font-semibold text-[25px] leading-[37px] text-[#FF5300] pb-[20px] ">
              Call Us
            </h3>
            <a
              href="tel:+(252) 555-0126"
              className="font-poppins font-medium text-[20px] leading-[30px] text-white    "
            >
              
              (252) 555-0126
            </a>
            <a
              href="mailto:info@youremai.com"
              className="font-poppins pt-[10px] block  font-medium text-[20px] leading-[30px] text-white"
            >
              info@youremai.com
            </a>
          </div>

          <div className="lg:w-3/12 w-full ">
            <h4 className="font-poppins font-semibold text-[25px] leading-[37px] text-[#FF5300] ">
              Follow Us
            </h4>
            <div className="flex gap-[20px] pt-[31px] ">
              {/* <img src={fbicon} alt="" /> */}
             <div className="w-[50px] h-[50px] rounded-[100px] bg-white  group flex justify-center items-center ">
                <Facebook  />
              </div>

            <div className="w-[50px] h-[50px] rounded-full bg-white group hover:bg-red-200 flex items-center justify-center">
  <Instaicon className="fill-black group-hover:fill-green-900 transition-all duration-300" />
</div>
<div className="w-[50px] h-[50px] rounded-[100px] bg-white  group flex justify-center items-center ">
                <Skype  />
              </div>
<div className="w-[50px] h-[50px] rounded-[100px] bg-white  group flex justify-center items-center ">
                <Twitter  />
              </div>

    

             
             
              {/* <img src={skypeicon} alt="" /> */}
              {/* <img src={twittericon} alt="" /> */}
            </div>
          </div> 
        </div>
        <div className="  ">
          <span className="w-full  border-[1px] border-white block  "></span>
        </div>
        <div className="flex pt-[10px] items-center ">
          <img src={copyright} alt="" />
          <p className="font-work-sans font-normal text-[16px] leading-[151%] text-white pl-[18px]">
            Copyright {year}. All Right Reserved By Ojjomedia
          </p>

          <div className="flex pl-[100px] items-center  ">
            <div className="">
              <img src={orangeicon} alt="" />
            </div>
            <p className="font-work-sans font-normal text-[16px] leading-[24px] text-white pl-[10px] ">
              Privacy Plicy
            </p>
          </div>

          <div className="flex pl-[100px] items-center  ">
            <div className="">
              <img src={orangeicon} alt="" />
            </div>
            <p className="font-work-sans font-normal text-[16px] leading-[24px] text-white pl-[10px] ">
             Therms of Us
            </p>
          </div>
          <div className="pl-[313px] ">
            <img src={arrowicon} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fotter;
