import React from 'react'
import Sectionwraper2 from '../../main/SectionWraper2'
import Card3 from '../../assets/images/Card3.png';
import Card4 from '../../assets/images/Card4.png';
import Card5 from '../../assets/images/Card5.png';
import Card6 from '../../assets/images/Card6.png';

const MirrorBlock = () => {
  return (
    <>
      <h2 className='text-center text-2xl font-semibold pb-10'>Crafted to blend elegance with intelligence.</h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-6  2xl:px-20">
        {/* Left side */}
        <div className="flex flex-col gap-6 px-3 md:px-0">
          <img src={Card5} alt="" className="rounded-2xl w-full max-w-xl 2xl:max-w-2xl object-cover" />
          <img src={Card6} alt="" className="rounded-2xl w-full max-w-xl 2xl:max-w-2xl object-cover" />
          <img src={Card4} alt="" className="rounded-2xl w-full max-w-xl 2xl:max-w-2xl object-cover" />
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-6">
          <img src={Card3} alt="" className="rounded-2xl w-full 2xl:h-[590px] max-w-lg 2xl:max-w-2xl object-cover px-3 md:px-0" />
          <div className="gap-6 justify-between items-center px-3 md:px-0">
            {/* <img src={Card5} alt="" className="rounded-2xl w-full max-w-xl object-cover block sm:hidden" />
            <img src={Card6} alt="" className="rounded-2xl w-full max-w-xl object-cover  block sm:hidden" /> */}
            <img src={Card5} alt="" className="rounded-2xl pb-6 w-full max-w-xl 2xl:max-w-2xl object-cover" />
            <img src={Card6} alt="" className="rounded-2xl w-full max-w-xl 2xl:max-w-2xl object-cover" />
          </div>
        </div>
      </div>  
      <Sectionwraper2>
        <section className="flex flex-col items-center justify-center h-[300px] text-center my-10 rounded-2xl text-white bg-[#5700FB]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Enterprise? <br /> Get your mirror.
          </h2>
          <button className="bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-gray-200 transition-all duration-200">
            Learn more
          </button>
        </section>
      </Sectionwraper2>

    </>
  )
}

export default MirrorBlock
