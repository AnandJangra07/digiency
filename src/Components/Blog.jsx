import React from 'react'
import firstimg from "../assets/images/png/Image (8).png"
import secondimg from "../assets/images/png/Image (9).png"
import thirdimg from "../assets/images/png/Image (10).png"
import { Alarm, Manlogo ,Comment} from "../common/icon";

const Blog = () => {
  return (
  <section className='bg-[#FFF7F4] ' >
    <div className="container">
        <div className="flex items-center  pt-4 justify-center text-center lg:pt-[120px] md:pt-[100px] sm:pt-[50px] ">
            <div className="flex items-center gap-[7px] ">
            <span className='w-[40px] border-[1px] border-[#FF5300] block mt-2 ' ></span>
            <h1 className='font-poppins font-normal text-[16px] leading-[24px] text-[#FF5300] ' >Our Blog</h1>
            <span className='w-[40px] border-[1px] border-[#FF5300] block mt-2  ' ></span>
            </div>
        </div>
            <div className=" flex items-center justify-center">

            <h1 className='font-poppins font-semibold lg:text-[40px] md:text-[30px] text-[20px] leading-[58px] text-[#373737] pt-[15px] ' >Every Singel Update From Here</h1>

            </div>

            <div className="flex flex-wrap flex-row mx-[-12px] lg:pt-[60px] md:pt-[40px] pt-[30px] lg:pb-[90px] md:pb-[60px] pb-[40px]">
                <div className="lg:w-4/12 md:w-6/12   w-full px-3   ">
                <div className=" max-w-[370px] h-[100%]  shadow-card pt-[15px] pb-[30px] px-[15px] rounded-[10px]  bg-white ">
                    <img src={firstimg} alt="" className='w-full' />
                    <h2 className='font-poppins font-medium lg:text-[20px] md:text-[15px] text-[12px] leading-[30px] text-[#373737] pt-[15px] pb-[53px] ' >35 Stellar Graphic Design Blogs to Keep YouEducated and Inspired</h2>
                    <p className='font-poppins font-normal lg:text-[16px] md:text-[12px] text-[8px] leading-[24px] text-[#7B7B7B] pb-[25px] ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.</p>
                    <button className=' bg-[#FF5300] rounded-[5px] shadow-btn-shadow px-[22px] py-[13px] text-white font-work-sans ' >Read More</button>

                </div>
                </div>
                <div className="lg:w-4/12 md:w-6/12   w-full md:pt-0 pt-[30px]     px-3 ">
                <div className="max-w-[370px]  h-[100%] shadow-card pt-[15px] pb-[30px] px-[15px] rounded-[10px] bg-white ">
                    <img src={secondimg} alt="" className='w-full'  />
                    <h2 className='font-poppins font-medium lg:text-[20px] md:text-[15px] text-[12px] leading-[30px] text-[#373737] pt-[15px]  ' >Ridiculously powerful 2021 iPad Pro may drop this month</h2>
             
                    <div className="flex gap-[10px] pt-[15px] pb-[18px]">
                        <div className="flex items-center gap-[3px]  ">
                    <Alarm/>
                    <p className='font-work-sans font-normal text-[10px] leading-[19px] text-[#373737]   ' >January 25, 2021</p>
                        </div>
                        <div className="flex items-center gap-[3px]">

                    <Manlogo/>
                    <p className='font-work-sans font-normal text-[10px] leading-[19px] text-[#373737] ' >Cristofer Westervelt</p>
                        </div>
                        <div className="flex items-center gap-[3px]">

                    <Comment/>
                    <p className='font-work-sans font-normal text-[10px] leading-[19px] text-[#373737] ' >10 Comment</p>
                        </div>
                    </div>
                   
                    <p className='font-poppins font-normal lg:text-[16px] md:text-[12px] text-[8px] leading-[24px] text-[#7B7B7B] pb-[25px] ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.</p>
                    <button className=' bg-[#FF5300] rounded-[5px] shadow-btn-shadow px-[22px] py-[13px] text-white font-work-sans ' >Read More</button>

                </div>
                </div>
                
                <div className="lg:w-4/12 md:w-6/12   w-full lg:pt-0 px-3 pt-[30px] rounded-[10px] ">
                <div className=" max-w-[370px] h-[100%] shadow-card pt-[15px] pb-[30px] px-[15px]   bg-white  ">
                    <img src={thirdimg} alt="" className='w-full'  />
                    <h2 className='font-poppins font-medium lg:text-[20px] md:text-[15px] text-[12px] leading-[30px] text-[#373737] pt-[15px]  ' >Memphis Design: the defining look of the 1980s</h2>
                    <div className="flex gap-[10px] pt-[15px] pb-[18px]">
                        <div className="flex items-center justify-center gap-[3px]  ">

                    <Alarm/>
                    <p className='font-work-sans font-normal text-[10px] leading-[19px] text-[#373737]   ' >January 25, 2021</p>
                        </div>
                        <div className="flex items-center gap-[3px]">

                    <Manlogo/>
                    <p className='font-work-sans font-normal text-[10px] leading-[19px] text-[#373737] ' >Cristofer Westervelt</p>
                        </div>
                        <div className="flex items-center gap-[3px]">

                    <Comment/>
                    <p className='font-work-sans font-normal text-[10px] leading-[19px] text-[#373737] ' >10 Comment</p>
                        </div>
                    </div>
                    <p className='font-poppins font-normal lg:text-[16px] md:text-[12px] text-[8px] lg:leading-[24px] md:leading-[20px] leading-[15px]   text-[#7B7B7B] pb-[25px] ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nunc, sed sed sed. Sit integer at dui at non ipsum tellus ac. Est.</p>
                    <button className=' bg-[#FF5300] rounded-[5px] shadow-button-shadow px-[22px] py-[13px] leading-[124%] text-[16px]  text-white font-work-sans ' >Read More</button>

                </div>
                </div>

            </div>

    </div>
    
  </section>
  
  )
}

export default Blog