import React from 'react'

const MirrorBlock = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-6 ">
      {/* Left side */}
      <div className="flex flex-col gap-6">
        <img src="/images/Card5.png" alt="" className="rounded-2xl w-full max-w-sm object-cover" />
        <img src="/images/Card6.png" alt="" className="rounded-2xl w-full max-w-sm object-cover" />
        <img src="/images/Card4.png" alt="" className="rounded-2xl w-full max-w-sm object-cover" />
      </div>

      {/* Right side */}
      <div className="flex flex-col gap-6">
        <img src="/images/Card3.png" alt="" className="rounded-2xl w-full max-w-sm object-cover" />
        <div className="flex gap-6 justify-between">
          <img src="/images/Card.png" alt="" className="rounded-2xl w-full max-w-[250px] object-cover" />
          <img src="/images/Card2.png" alt="" className="rounded-2xl w-full max-w-[250px] object-cover" />
        </div>
      </div>
    </div>
  )
}

export default MirrorBlock
