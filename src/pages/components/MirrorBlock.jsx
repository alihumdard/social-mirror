import React from 'react'
import Sectionwraper2 from '../../main/SectionWraper2'

const MirrorBlock = () => {
  return (
    <>
      <h2 className='text-center text-2xl font-semibold pb-10'>Crafted to blend elegance with intelligence.</h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 ">
        {/* Left side */}
        <div className="flex flex-col gap-6 px-3 md:px-0">
          <img src="/images/Card5.png" alt="" className="rounded-2xl w-full max-w-xl object-cover" />
          <img src="/images/Card6.png" alt="" className="rounded-2xl w-full max-w-xl object-cover" />
          <img src="/images/Card4.png" alt="" className="rounded-2xl w-full max-w-xl object-cover" />
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-6">
          <img src="/images/Card3.png" alt="" className="rounded-2xl w-full max-w-xl object-cover px-3 md:px-0" />
          <div className="gap-6 justify-between items-center px-3 md:px-0">
            {/* <img src="/images/Card5.png" alt="" className="rounded-2xl w-full max-w-xl object-cover block sm:hidden" />
            <img src="/images/Card6.png" alt="" className="rounded-2xl w-full max-w-xl object-cover  block sm:hidden" /> */}
            <img src="/images/Card5.png" alt="" className="rounded-2xl pb-6 w-full max-w-xl object-cover" />
            <img src="/images/Card6.png" alt="" className="rounded-2xl w-full max-w-xl object-cover" />
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
