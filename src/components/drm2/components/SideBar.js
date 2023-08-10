import React from 'react'
import Logo from "/public/assets/drm2-logo.svg";
import ArrowSVG from '/public/assets/drm2-siderbar-arrow.svg'
import SocialMediaIcons from '/public/assets/drm2-social-media.svg'
import Image from 'next/image';
import Link from "next/link";

const SideBar = ({currentPage}) => {

  const [IsMenuOpen, setIsMenuOpen] = React.useState(true);

  const handleClick = () => {
    setIsMenuOpen(!IsMenuOpen);
  }

  const activeClassArrow = 'opacity-100';  
  const activeClassText = 'text-[#5253F1]';  
  return (
   <div className="2xl:w-[27rem]   lg:flex lg:flex-col justify-between hidden bg-white ">
   <div className="logo px-[2.5rem] m-[1.25rem] 2xl:p-[4.6785rem] md:py-[2rem] xl:py-[2rem] md:w-[12rem] 2xl:w-[20rem]">
     <Image src={Logo} alt="Logo" />
   </div>
   <div className="menu w-[12.5rem]  md:mx-[3rem] 2xl:mx-[5rem] 2xl:mb-[4rem]">
     <div className=''>
       <p className=" flex item-center gap-2 2xl:text-[1rem] md:text-[0.8rem] text-black font-semibold py-3 border-b-[2px] cursor-pointer  " onClick={handleClick}><Image className="" src={ArrowSVG} alt="ico" /> What's next:</p>
       <ul className={`border-b-[2px]  ${IsMenuOpen ? `` : `hidden`}`}>
          <li className={`p-3 2xl:text-[1rem] md:text-[0.8rem] flex ${currentPage===0 ? activeClassText : `text-[#9A9A9A]`}  gap-2`}><Image className={` ${currentPage ===0 ? activeClassArrow :`opacity-0`} `} src={ArrowSVG} alt="ico"/>Get Started</li>
          <li className={`p-3 2xl:text-[1rem] md:text-[0.8rem] flex ${currentPage===1 ? activeClassText : `text-[#9A9A9A]`}  gap-2`}><Image className={` ${currentPage ===1 ? activeClassArrow :`opacity-0`}  `} src={ArrowSVG} alt="ico"/>Device</li>
          <li className={`p-3 2xl:text-[1rem] md:text-[0.8rem] flex ${currentPage===2 ? activeClassText : `text-[#9A9A9A]`}  gap-2`}><Image className={` ${currentPage ===2 ? activeClassArrow :`opacity-0`}  `} src={ArrowSVG} alt="ico"/>Issues</li>
          <li className={`p-3 2xl:text-[1rem] md:text-[0.8rem] flex ${currentPage===4 ? activeClassText : `text-[#9A9A9A]`}  gap-2`}><Image className={` ${currentPage ===4 ? activeClassArrow :`opacity-0`}  `} src={ArrowSVG} alt="ico"/>Details</li>
       </ul>
     </div>
     <div>
       <p className="flex item-center gap-2 2xl:text-[1rem] md:text-[0.8rem] text-black font-semibold py-3 border-b-[2px]"><Image className="" src={ArrowSVG} alt="ico"/> Contact Us</p>
     </div>
     <div>
       <p className="flex item-center gap-2 2xl:text-[1rem] md:text-[0.8rem] text-black font-semibold py-3 border-b-[2px]"><Image className="" src={ArrowSVG} alt="ico"/> My Details</p>
     </div>
   </div>
   <footer className="icon-footer flex gap-3 flex-end mx-[2rem] mb-[3rem] w-[12.5rem] px-3 justify-center pt-[4rem]">
    <div><Image src={SocialMediaIcons} objectFit='contain' alt='icons'/></div>
   </footer>
 </div>
  )
}

export default SideBar