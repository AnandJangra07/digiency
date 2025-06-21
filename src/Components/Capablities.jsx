import React from "react";
import img from "../assets/images/png/Frame 21.png";
import man from "../common/svg/man.svg";
import snake from "../common/svg/snake.svg";
import earth from "../common/svg/earth.svg";
import building from "../common/svg/building.svg";
const Capablities = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-row  mx-[-12px] pt-[20px] flex-wrap-reverse lg:pt-[120px] md:pt-[60px] sm:pt-[30px] ">
          <div className="lg:w-6/12 w-full px-3 ">
            <div className="flex gap-[6px]  ">
              <h1 className="font-poppins font-normal text-[16px] leading-[24px] text-[#FF5300] ">
                Our Capabilities
              </h1>
              <span className="w-[40px] border-[1px] border-[#FF5300] block mt-[15px] mb-[10px] "></span>
            </div>
            <h2 className="font-poppins font-semibold lg:text-[39px] text-[25px] lg:leading-[58px] leading-[35px] text-[#373737] pt-[15px] ">
              Forward Thinking Team Of Designers & Developers
            </h2>
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-[#7B7B7B] pt-[18px] pb-[40px]  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ut
              nisi, amet rhoncus volutpat neque. Ipsum in aliquam eget vitae
              purus felis eget massa felis. Eu mattis in malesuada facilisi
              proin vel.
            </p>
            <div className="flex gap-[24px]   ">
              <div className="w-[125px] shadow-[0px_1px_4px_0px_#0000001A]  pt-[11px]  pb-[15px]  ">
                <h5 className="font-poppins font-semibold leading-[37px] text-[25px] text-[#FF5300] text-center  ">
                  80%
                </h5>
                <p className="font-poppins font-light text-[12px] leading-[19px] text-[#373737] text-center ">
                  Softwer Development
                </p>
              </div>
              <div className="w-[125px] rounded-[2px] shadow-[0px_1px_4px_0px_#0000001A] pt-[11px]  pb-[15px]  ">
                <h5 className="font-poppins font-semibold leading-[37px] text-[25px] text-[#FF5300] text-center  ">
                  90%
                </h5>
                <p className="font-poppins font-light text-[12px] leading-[19px] text-[#373737] text-center ">
                  Graphic Design
                </p>
              </div>
              <div className="w-[125px] shadow-[0px_1px_4px_0px_#0000001A] pt-[11px]  pb-[15px]  ">
                <h5 className="font-poppins font-semibold leading-[37px] text-[25px] text-[#FF5300] text-center  ">
                  85%
                </h5>
                <p className="font-poppins font-light text-[12px] leading-[19px] text-[#373737] text-center ">
                  Game Deisgn
                </p>
              </div>
              <div className="w-[125px]  shadow-[0px_1px_4px_0px_#0000001A] pt-[11px]  pb-[15px]  ">
                <h5 className="font-poppins font-semibold leading-[37px] text-[25px] text-[#FF5300] text-center  ">
                  100%
                </h5>
                <p className="font-poppins font-light text-[12px] leading-[19px] text-[#373737] text-center ">
                  Web Development
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-6/12 w-full px-3 ">
            <img src={img} alt="" className=" pb-[30px] lg:pb-0 " />
          </div>
        </div>

        <div className=" lg:pb-[120px] md:pb-[60px] sm:pb-[30px]   ">  
          <div className="w-full">
            <div className="pb-[30px] pt-[120px] ">
              <div className="py-[69px] pr-[56px] pl-[60px] bg-[#FF5300] justify-around rounded-[10px]">
                <div className="  flex-row flex-wrap mx-[-12px]    flex ">
                <div className="lg:w-3/12 md:w-6/12  w-full px-3 lg:flex  flex-col md:border-r-white md:border-r-[4px] rounded-r-[px] ">
                <div className="flex flex-col justify-center items-center">
                 
                    <img src={man} alt="" />
                    <h4 className="font-poppins font-semibold text-[39px] leading-[59px] text-white  ">
                      120
                    </h4>
                 
                  <h5 className="font-poppins font-medium text-[20px] leading-[30px] text-white text-center ">
                    Top Experts
                  </h5>
                </div>
                </div>
                
                   <div className="lg:w-3/12  md:w-6/12  w-full px-3 lg:flex  flex-col lg:border-r-white lg:border-r-[4px] rounded-r-[px] ">
                <div className="flex flex-col justify-center items-center">
                 
                    <img src={snake} alt="" className="" />
                    <h4 className="font-poppins font-semibold text-[39px] leading-[59px] text-white  ">
                      500
                    </h4>
                
                  <h5 className="font-poppins font-medium text-[20px] leading-[30px] text-white text-center ">
                    Strategies
                  </h5>
                </div>
                   </div>
                <div className="lg:w-3/12  md:w-6/12 w-full px-3 lg:flex  flex-col md:border-r-white md:border-r-[4px] rounded-r-[px] ">
                <div className="flex flex-col justify-center items-center">
                 
                    <img src={earth} alt="" />
                    <h4 className="font-poppins font-semibold text-[39px] leading-[59px] text-white  ">
                      347
                    </h4>
                
                  <h5 className="font-poppins font-medium text-[20px] leading-[30px] text-white text-center ">
                    Great Results
                  </h5>
                </div>
                </div>
                 <div className="lg:w-3/12 md:w-6/12  w-full lg:flex  flex-col px-3 ">
                <div className="flex flex-col items-center justify-center ">
                  <img src={building} alt="" />
                  <h4 className="font-poppins font-semibold text-[39px] leading-[59px] text-white  ">
                    120
                  </h4>
                  <h5 className="font-poppins font-medium text-[20px] leading-[30px] text-white text-center ">
                    Hight Rankings
                  </h5>
                </div>
                 </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capablities;
