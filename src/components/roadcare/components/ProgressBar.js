import React from 'react'
import Link from "next/link";

const ProgressBar = ({ currentPage }) => {

  const activeClass = 'w-[70px] h-[6px] bg-[#5253f1]';
  return (
    <div>
      <p className='text-center text-[#E46000]'>Call us: +27 781 189 22</p>
      <div className='py-2 w-full flex gap-1 justify-center'>
        <div className={` rounded-full transition-all duration-300 h-[6px] ${currentPage == 0 ? activeClass : 'w-[20px] bg-[#e6e6e6]'}`}></div>
        <div className={` rounded-full transition-all duration-300 h-[6px] ${currentPage == 1 ? activeClass : 'w-[20px] bg-[#e6e6e6]'}`}></div>
        <div className={` rounded-full transition-all duration-300 h-[6px] ${currentPage == 2 ? activeClass : 'w-[20px] bg-[#e6e6e6]'}`}></div>
        <div className={` rounded-full transition-all duration-300 h-[6px] ${currentPage == 3 ? activeClass : 'w-[20px] bg-[#e6e6e6]'}`}></div>
        <div className={` rounded-full transition-all duration-300 h-[6px] ${currentPage == 4 ? activeClass : 'w-[20px] bg-[#e6e6e6]'}`}></div>
        <div className={` rounded-full transition-all duration-300 h-[6px] ${currentPage == 5 ? activeClass : 'w-[20px] bg-[#e6e6e6]'}`}></div>
        <div className={` rounded-full transition-all duration-300 h-[6px] ${currentPage == 6 ? activeClass : 'w-[20px] bg-[#e6e6e6]'}`}></div>
        <div className={` rounded-full transition-all duration-300 h-[6px] ${currentPage >= 7 ? activeClass : 'w-[20px] bg-[#e6e6e6]'}`}></div>
      </div>
    </div>

  )
}

export default ProgressBar;