import React from 'react'
import img from '../assets/images/png/pana.png'
import img2 from '../common/svg/tick.svg'
const card = [{
  img: img,
  img: img2
}]

const Aboutus = () => {
  return (
    <section className='bg-[#FFF7F4]' >

    <div className="container">
      <div className="flex flex-row flex-wrap-reverse mx-[-12px] lg:py-[120px]   ">
        <div className="lg:w-6/12 w-full px-3  ">
        <div className="flex gap-[10px] items-end ">
         <h1 className='font-poppins font-medium text-[16px] leading-[24px] text-[#FF5300] cursor-pointer duration-200 ' >About Us</h1>
        <span className='w-[40px] border-[1px] border-[#FF5300]  block mt-[19px] mb-[5px]  ' ></span>
        </div>
        

    <h2 className='font-poppins font-semibold lg:text-[39px] md:text-[30px] text-[20px] pt-[15px] lg:leading-[59px] md:leading-[45px] leading-[35px]  text-[#373737] max-w-[491px] ' >Grow Your Business With
Our Agency</h2>

<p className='font-poppins font-normal lg:text-[16px] md:tex-[14px] text-[12px] lg:leading-[24px] leading-[20px]  text-[#7B7B7B] pt-[20px] pb-[20px]  max-w-[544px] ' > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis arcu in tincidunt sed imperdiet etiam fames. Tincidunt augue risus mattis eget sem habitant id ultrices augue. Sit rhoncus .</p>

 
  <div className=" flex gap-[15px]  pb-[15px]  ">
    <img src={img2} alt="img" />
<p className='font-poppins font-medium text-[16px] lg:leading-[24px]   text-[#373737] '  >Innovative website design</p>
  </div>
  <div  className="flex gap-[15px] pb-[15px] ">
    <img src={img2} alt="" />
<p className='font-poppins font-medium text-[16px] lg:leading-[24px]  text-[#373737] ' >UI/UX design with global trends</p>
  </div>
  <div className="flex gap-[15px] ">
   <img src={img2} alt="" />
<p className='font-poppins font-medium text-[16px] lg:leading-[24px]  text-[#373737] ' >Web and email hosting service</p>
 
</div>
        </div>

   <div className="lg:w-6/12 lg:pb-0 pb-7 px-3 lg:pt-0 pt-4 w-[100%]  ">
   <img className='w-[100%] max-w-[642px] '   src={img} alt="" />

</div>
  
   


      </div>
    </div>

    </section>
    
  )
}

export default Aboutus