import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import leftbtn from "../common/svg/Left.svg";
import rightbtn from "../common/svg/Rightbtn.svg";
import starpic from "../common/svg/star.svg";
import Capman from "../common/svg/Capman.svg";
import Pose from "../common/svg/Pose.svg";
import profile from "../common/svg/profilepic1.svg";
import musicicon from "../common/svg/music.svg";
import { Star } from "../common/icon";

const Testimonial = () => {
  return (
    <section className="bg-[#FFF7F4] w-full h-screen  overflow-hidden ">
      <div className="container   ">
        <div className="flex justify-center lg:pt-[120px] md:pt-[100px] sm:pt-[25px] items-end  ">
          <span className="w-[40px] border-[1px] border-[#FF5300]  block mt-[17px] mb-[7px] mr-[7px] "></span>
          <p className="text-[#FF5300] font-poppins font-normal lg:text-[16px] text-[10px] leading-[24px] ">
            Our Testimonial
          </p>
          <span className="w-[40px] border-[1px] border-[#FF5300] block mt-[17px] mb-[7px] ml-[7px]  "></span>
        </div>

        <h1 className="font-poppins font-semibold lg:text-[40px] md:text-[30px] sm:text-[20px] lg:pb-[60px] md:pb-[40px] sm:pb-[20px] leading-[59px] text-[#373737] text-center ">
          What Our Client Saying
        </h1>

        <div className=" relative ">
         

          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
             modules={[Autoplay]}
      autoplay={{
        delay: 3000,   
        disableOnInteraction: false,
      }}
            navigation={{
              prevEl: ".pre-btn",
              nextEl: ".next-btn",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="px-3  ">

              <div className="max-w-[370px] shadow-shadow-card bg-white px-[25px] py-[25px] rounded-[10px] ">
                <Star />
                <p className="font-poppins  font-normal text-[16px] leading-[24px] text-[#7B7B7B] pt-[10px] pb-[25px] ">
                  Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                  Ultrices blandit pelle ntesque nibh arcu elementum odio justo.
                  Rhoncus.
                </p>

                <div className="flex justify-between  ">
                  <img src={profile} alt="" />
                  <div className="flex flex-col ">
                    <h4 className="font-poopins font-medium text-[20px] leading-[30px] text-[#FF5300] ">
                      Phillip Levin
                    </h4>
                    <h6 className="font-poppins font-light text-[13px] leading-[19px] text-[#7B7B7B] ">
                      CEO / Creative IT
                    </h6>
                  </div>
                  <img src={musicicon} alt="" />
                </div>
              </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" w-full px-3">

              <div className="max-w-[370px] shadow-shadow-card bg-white px-[25px] py-[25px] rounded-[10px] ">
                <Star />
                <p className="font-poppins  font-normal text-[16px] leading-[24px] text-[#7B7B7B] pt-[10px] pb-[25px] ">
                  Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                  Ultrices blandit pelle ntesque nibh arcu elementum odio justo.
                  Rhoncus.
                </p>

                <div className="flex justify-between">
                  <img src={Capman} alt="" />
                  <div className="flex flex-col ">
                    <h4 className="font-poopins font-medium text-[20px] leading-[30px] text-[#FF5300] ">
                      Lincoln Lipshutz
                    </h4>
                    <h6 className="font-poppins font-light text-[13px] leading-[19px] text-[#7B7B7B] ">
                      CEO / Creative IT
                    </h6>
                  </div>
                  <img src={musicicon} alt="" />
                </div>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" w-full px-3">

              <div className="max-w-[370px] shadow-shadow-card bg-white px-[25px] py-[25px] rounded-[10px]  ">
                <Star />
                <p className="font-poppins  font-normal text-[16px] leading-[24px] text-[#7B7B7B] pt-[10px] pb-[25px] ">
                  Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                  Ultrices blandit pelle ntesque nibh arcu elementum odio justo.
                  Rhoncus.
                </p>

                <div className="flex justify-between">
                  <img src={Pose} alt="" />
                  <div className="flex flex-col ">
                    <h4 className="font-poopins font-medium text-[20px] leading-[30px] text-[#FF5300] ">
                      Craig Siphron
                    </h4>
                    <h6 className="font-poppins font-light text-[13px] leading-[19px] text-[#7B7B7B] ">
                      CEO / Creative IT
                    </h6>
                  </div>
                  <img src={musicicon} alt="" />
                </div>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" w-full px-3">

              <div className="max-w-[370px] shadow-shadow-card bg-white px-[25px] py-[25px] rounded-[10px] ">
                <Star />
                <p className="font-poppins  font-normal text-[16px] leading-[24px] text-[#7B7B7B] pt-[10px] pb-[25px] ">
                  Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                  Ultrices blandit pelle ntesque nibh arcu elementum odio justo.
                  Rhoncus.
                </p>

                <div className="flex justify-between">
                  <img src={Pose} alt="" />
                  <div className="flex flex-col ">
                    <h4 className="font-poopins font-medium text-[20px] leading-[30px] text-[#FF5300] ">
                      Craig Siphron
                    </h4>
                    <h6 className="font-poppins font-light text-[13px] leading-[19px] text-[#7B7B7B] ">
                      CEO / Creative IT
                    </h6>
                  </div>
                  <img src={musicicon} alt="" />
                </div>
              </div>
              
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="flex gap-4   justify-center max-sm:pt-4">
             <div className=" sm:absolute pre-btn sm:left-[-75px] sm:top-[50%]  sm:translate-y-[-50%]">
            <img src={leftbtn} alt="" className="" />
          </div>
          <div className=" sm:absolute next-btn  sm:right-[-75px] sm:top-[50%]  sm:translate-y-[-50%]">
            <img src={rightbtn} alt="" className="" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
