import React from 'react'
import imgone from "../assets/images/png/Ux.svg";
import imgtwo from "../assets/images/Game.svg";
import imgthree from "../assets/images/png/design.svg";
import imgfours from "../assets/images/png/web.svg";
import imgfive from "../assets/images/png/app.svg";
import imgsix from "../assets/images/png/digital.svg";
import { Numberone, Numbertwo } from "../common/bicons";
import { Numberfive, Numberfour, Numbersix, Numberthree } from '../common/svg/icon';

const Ourservice = () => {
  const carddata = [
    
    {
      counteimg: <Numberone/>,
      img: imgone,
      title: " UX Design",
      feature: "Mobile App, Website",
      content:
        "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.",
    },
   
    {
      counteimg: <Numbertwo/>,
      img: imgtwo,
      title: "Game Design",
      feature: "Mobile App, Website",
      content:
        "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.",
    },
    {
      counteimg: <Numberthree/>,  
      img: imgthree,
      title: "Graphic Design",
      feature: "Mobile App, Website",
      content:
        "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.",
    },
    {
      counteimg: <Numberfour/>,  
      img: imgfours,
      title: "Graphic Design",
      feature: "Mobile App, Website",
      content:
        "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.",
    },
    {
      counteimg: <Numberfive/>,  
      img: imgfive,
      title: "App Development",
      feature: "Mobile App, Website",
      content:
        "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.",
    },
    {
      counteimg:<Numbersix/>,  
      img: imgsix,
      title: "App Development",
      feature: "Mobile App, Website",
      content:
        "Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.",
    },
  ];
  return (
    <section>
      
      <div className="container">
        <div className=" flex justify-center gap-[9px] items-center pt-[120px] ">
            <span className="w-[40px] border-[1px] border-[#FF5300] block h-[1px]   " ></span>
            <p className="font-poppins font-normal text-[16px] leading-[24px]   text-[#FF5300] pb-[8px] " >Our Services</p>
            <span className="w-[40px] border-[1px] border-[#FF5300] block  h-[1px]" ></span>
        </div>
         <h1 className="font-poppins font-semibold text-[39px] leading-[58px]  text-center " >What We Do</h1>
            
         
        <div className="flex flex-row flex-wrap mx-[-12px] pb-[120px]  ">
       
          {carddata.map((card, index) => (
            <div key={index} className="lg:w-4/12 sm:w-6/12 w-full pt-[30px] px-[15px] ">
                <div className="pt-[30px] pr-[25px] pb-[20px] pl-[20px] rounded-[10px] shadow-[0px_1px_4px_0px_#0000001A] hover:bg-gray-300  duration-300">
                 
               
                  <div className=" flex justify-between">
                    <img src={card.img} alt="" />
                       {card.counteimg}
                  </div>
                  
                    <h2 className="font-poppins font-semibold text-[24px] leading-[37px] text-[#373737]  pt-[15px] " > {card.title} </h2>
                    <p className="font-poppins font-light text-[12px] leading-[19px] text-[#7B7B7B] pt-[5px] " >{card.feature}</p>    
                    <h4 className="font-poppins font-normal text-[16px] leading-[24px] text-[#7B7B7B] pt-[15px] " > {card.content} </h4>
                  
                </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ourservice