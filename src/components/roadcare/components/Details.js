import Image from "next/image"
import PhoneDial from "/public/assets/drm2-dial.svg"
import Package from "/public/assets/drm2-package.svg"
import ProgressBar from "/public/assets/drm2-progress-bar.svg";
import ButtonArrowSVG from "/public/assets/drm2-arrow-right.svg";
import WhiteButtonArrowSVG from "/public/assets/drm2-arrow-right-white.svg";
import Link from "next/link";
import chatFrame from "/public/assets/chatFrame.png";
import licenseplate from "/public/assets/licenseplate.png"
import { nextPage, saveFormData } from "/src/store/features/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { previousPage } from "/src/store/features/formSlice";
import { useState } from "react";


function Details() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.form);
  const [licenseNo, setLicenseNo] = useState(data?.formData?.licenseNo);
  const handleNext = (e) => {
    if (!licenseNo) {
     return alert("Please add license number")
    }

    dispatch(
      saveFormData({
        licenseNo: licenseNo,
      })
    )
    e.preventDefault();
    dispatch(nextPage());
  }

  const handlePrevious = (e) => {
    e.preventDefault();
    dispatch(previousPage());
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="">
        <h1 className="font-semibold 2xl:mt-[1.5rem] mt-[1.5rem] text-[1.75rem] 2xl:text-[2.25rem] text-center px-4 py-3">Licenseplate</h1>
        <p className="px-[2.25rem] md:max-w-[25rem] 2xl:max-w-[30rem] text-center font-medium text-[0.8rem] 2xl:text-[1rem]">  </p>
      </div>
      <br/>
      <br/>
      <form action="">
          <input className="w-[18rem] sm:w-[26.2rem] h-[5.1rem] sm:h-[7.49rem] rounded-[1rem] text-[5rem] px-[1.6rem] pt-1 bg-[url('/assets/licenseplate.png')] bg-contain bg-transparent font-bebasNeue tracking-widest" 
            onChange={(e) => { setLicenseNo(e.target.value) }}
            defaultValue={licenseNo}
          />
      </form>
      <div className="absolute flex flex-col justify-end bottom-0 right-0 w-full h-[9rem]  mb-[1rem] 2xl:h-[11rem] 2xl:pt-[3rem] px-4">
        <div className="flex  gap-2 justify-center font-medium  z-10  pb-[2rem] pt-[1rem] 2xl:pt-[4rem] ">
          <button
            onClick={handlePrevious}
            className="text-[0.77rem] flex items-center justify-center gap-2 h-[3rem] 2xl:h-[4rem] md:px-4 bg-[#f8f8f8] rounded-[5px] flex-grow md:flex-grow-0"
          >
            <Image src={ButtonArrowSVG} alt="icoon" />
            Back
          </button>
          <button onClick={handleNext}
            className="text-[0.77rem] flex items-center justify-center gap-2 h-[3rem] 2xl:h-[4rem] 2xl:px-4 bg-blue-700 rounded-[5px] flex-grow max-w-[35rem] text-white">
            Continue
            <Image
              className="fill-white"
              src={WhiteButtonArrowSVG}
              alt="icoon"
            />
          </button>
        </div>
        <Link href="#" className="flex md:hidden flex-row mx-auto gap-2">
          <Image src={chatFrame} alt="" height={25} width={25} />
          <p className="border-b-[1px] border-[#5252f1] text-[#5252f1] text-[14px] ">Have a question? Chat with us</p>
        </Link>
      </div>
    </div>
  )
}

export default Details