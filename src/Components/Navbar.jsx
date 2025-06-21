import React, { useState } from "react";
import Img from "../assets/images/png/Frame 19.png";
// import Mycard from "./Mycard";

const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    // <section className='bg-[#FFF7F4]' >
    // <div className="container">
    //    <div className="flex  justify-between">
    //       <h1 className="font-work-sans font-semibold text-[39px] leading-[100%] ">
    //         <span className="text-[#FF5300] ">Digi</span>
    //         <span className="text-[#373737] ">ency</span>
    //       </h1>

    //     <div className="flex gap-[29px] ">
    //       <ul className={`${show ? "navshow" : "navhidden"} flex gap-[29px] max-lg:absolute  max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:bg-[#FFF7F4] max-lg:w-full max-lg:h-[100vh] max-lg:top-0 max-lg:left-0 duration-300 `} >
    //         <li><a href="" className='font-poppins font-medium text-[20px] leading-[30px] text-[#FF5300] ' >Home</a></li>
    //         <li className='font-poppins font-medium text-[20px] leading-[30px] hover:text-[#FF5300] duration-500 text-[#373737] ' >About Us</li>
    //         <li className='font-poppins font-medium text-[20px] leading-[30px] hover:text-[#FF5300] duration-500 text-[#373737] ' >Services</li>
    //         <li className='font-poppins font-medium text-[20px] leading-[30px] hover:text-[#FF5300] duration-500 text-[#373737] ' >Portfolio</li>
    //         <li className='font-poppins font-medium text-[20px] leading-[30px] hover:text-[#FF5300] duration-500 text-[#373737]  ' >Blog</li>
    //         <li className='font-poppins font-medium text-[20px] leading-[30px] hover:text-[#FF5300] duration-500 text-[#373737] ' >Contact Us</li>
    //       </ul>
    //       <button className=' font-poppins font-medium text-[20px] leading-[30px] text-[#373737] py-[10px] px-[22px] border-[1px] rounded-[5px] border-[#373737]  ' >Let’s Talk</button>

    //       </div>
    //       <div className="lg:hidden z-10 " onClick={()=> setshow (!show)} >
    //         <span className={`${show ? 'translate-y-[13px] rotate-45 ': ''} w-[40px] h-[2px] bg-black block  duration-300 `} ></span>
    //         <span className={`${show ? 'opacity-0': ''} w-[40px] h-[2px] bg-black block my-3  `} ></span>
    //         <span className={`${show ? '-translate-y-[13px] -rotate-45 ':''} w-[40px] h-[2px] bg-black block duration-300  `} ></span>
    //     </div>

    //    </div>

    // </div>
    // </section>
    <section className="  bg-[#FFF7F4]  ">
      <nav>
        <div className="container  ">
          <div className=" pt-[30px]  lg:pb-[149px] pb-[50px]   ">
            <div className="flex justify-between ">
              <a
                href="/"
                className="font-work-sans font-semibold text-[39px] leading-[100%] text-[#FF5300] "
              >
                {" "}
                Digi
                <span className="text-[#373737] ">ency</span>{" "}
              </a>
              <div className="flex gap-[29px] ">
                <ul
                  className={`${
                    show ? "left-0" : "-left-full"
                  } flex gap-[29px] max-lg:absolute max-lg:top-0 max-lg:pt-[50px] max-lg:bg-[#FFF7F4] max-lg:items-center items-center :max-lg:justify-center max-lg:flex-col max-lg:h-screen max-lg:w-[100%] max-lg:-bottom-0 duration-300 `}
                >
                  <li className="">
                    <a
                      href=""
                      className="font-poppins font-medium   text-[20px] leading-[30px] hover:text-[#FF5300] text-[#373737] duration-300 ease-linear "
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-poppins font-medium  text-[20px] leading-[30px] hover:text-[#FF5300] duration-300 ease-linear text-[#373737] "
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-poppins font-medium  text-[20px] leading-[30px] hover:text-[#FF5300] duration-300 ease-linear text-[#373737] "
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-poppins font-medium  text-[20px] leading-[30px] hover:text-[#FF5300] duration-300 ease-linear text-[#373737] "
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-poppins font-medium  text-[20px] leading-[30px] hover:text-[#FF5300] duration-300 ease-linear text-[#373737] "
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-poppins font-medium  text-[20px] leading-[30px] hover:text-[#FF5300] duration-300 ease-linear text-[#373737] "
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <button className="rounded-[5px] border-[1px] border-[#373737] text-[#373737] hover:bg-[#373737] hover:text-white duration-300 font-poppins font-medium  text-[20px] leading-[30px] px-[22px] py-[10px] ">
                      Let's Talk
                    </button>
                  </li>
                </ul>
              </div>
              <div className="lg:hidden z-10" onClick={() => setshow(!show)}>
                <span
                  className={`${
                    show ? " translate-y-[7.5px] rotate-45" : ""
                  } w-[25px] h-[2px] block bg-black duration-300 ease-out `}
                ></span>
                <span
                  className={`${
                    show ? "opacity-0" : ""
                  } w-[25px] h-[2px] block bg-black my-[5px] duration-300 ease-out `}
                ></span>
                <span
                  className={`${
                    show ? " -translate-y-[6px] -rotate-45" : ""
                  } w-[25px] h-[2px] block bg-black duration-300 ease-out `}
                ></span>
              </div>
            </div>
            <div className="flex flex-row  flex-wrap-reverse mx-[-12]">
              <div className="lg:w-6/12 w-full  px-3">
                <h2 className="font-poppins font-bold text-xl lg:text-[48px] md:text-[35px] sm:text-[25px] lg:leading-[73px] md:leading-[50px] sm:leading-[30px] text-[#373737] lg:pt-[208px] md:pt-[100px] sm:pt-[50px] pt-[30px]   ">
                  Choose What Matters To Your Business & Your Customers.
                </h2>
                <p className="font-poppins font-normal text-[16px] text-[#7B7B7B] leading-[24px] pt-[18px] pb-[30px] pr-4 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam in digni ssim euismod purus donec mus vulputate
                  habitant iaculis. Com odo enim ornare turpis tempus enim, nibh
                  nulla. Rhoncus sed.
                </p>
                <button className="font-poppins font-medium lg:text-[20px] text-[13px]  leading-[30px] text-white lg:px-[22px] lg:py-[10px] px-[11px] py-[5px] bg-[#FF5300] hover:text-[#FF5300] hover:bg-[#FFF7F4] hover:shadow-card duration-300  rounded-[5px]  ">
                  Get Start Now
                </button>
              </div>
              <div className="lg:w-6/12 w-full px-3">
                <img className="lg:pt-[150px] pt-[100px] " src={Img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
