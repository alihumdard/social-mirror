import React from 'react'
import Dream from './Dream'

const MirrorBlock = () => {
  return (
    <>
      <h2 className='text-center text-2xl font-semibold pb-10'>Crafted to blend elegance with intelligence.</h2>
      <div className="flex flex-col lg:flex-row justify-center items-start gap-6 ">
        {/* Left side */}
        <div className="flex flex-col gap-6 px-3 md:px-0">
          <img src="/images/Card5.png" alt="" className="rounded-2xl w-full max-w-sm object-cover" />
          <img src="/images/Card6.png" alt="" className="rounded-2xl w-full max-w-sm object-cover" />
          <img src="/images/Card4.png" alt="" className="rounded-2xl w-full max-w-sm object-cover" />
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-6">
          <img src="/images/Card3.png" alt="" className="rounded-2xl w-full max-w-sm object-cover px-3 md:px-0" />
          <div className="flex gap-6 justify-between flex-col items-center md:flex-row px-3 md:px-0">
            <img src="/images/Card5.png" alt="" className="rounded-2xl w-full max-w-sm object-cover block sm:hidden" />
            <img src="/images/Card6.png" alt="" className="rounded-2xl w-full max-w-sm object-cover  block sm:hidden" />
            <img
              src="/images/Card.png"
              alt=""
              className="rounded-2xl w-full h-[370px] max-w-[250px] hidden sm:block object-cover"
            />
            <img
              src="/images/Card2.png"
              alt=""
              className="rounded-2xl w-full h-[370px] max-w-[250px] object-cover hidden sm:block"
            />
          </div>
        </div>
      </div>

      <section className="bg-[#4B00FF] text-white text-center py-24 rounded-2xl my-10 mx-4 md:mx-[360px]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Enterprise? <br /> Get your mirror.
        </h2>
        <button className="bg-white text-black text-sm font-medium px-5 py-2 rounded-md hover:bg-gray-200 transition-all duration-300">
          Learn more
        </button>
      </section>
    </>
  )
}

export default MirrorBlock
