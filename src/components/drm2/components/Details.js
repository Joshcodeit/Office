import Image from "next/image"
import PhoneDial from "/public/assets/drm2-dial.svg"
import Package from "/public/assets/drm2-package.svg"
import ProgressBar from "/public/assets/drm2-progress-bar.svg";
import ButtonArrowSVG from "/public/assets/drm2-arrow-right.svg";
import WhiteButtonArrowSVG from "/public/assets/drm2-arrow-right-white.svg";
import Link from "next/link";
import chatFrame from "/public/assets/chatFrame.png";
import { nextPage, saveFormData } from "/src/store/features/formSlice";
import { useDispatch } from "react-redux";
import { previousPage } from "/src/store/features/formSlice";
import { useState } from "react";


function Details() {
  const [imei , setImei] = useState('');
  const dispatch = useDispatch();

  const handleImeiChange = (e) => setImei(e.target.value);

  const handleNext = (e) => {
    dispatch(
      saveFormData({
        imei : imei,
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
        <h1 className="font-semibold 2xl:mt-[1.5rem] mt-[1.5rem] text-[1.75rem] 2xl:text-[2.25rem] text-center px-4 py-3">Let's fill in the details</h1>
        <p className="px-[2.25rem] md:max-w-[25rem] 2xl:max-w-[30rem] text-center font-medium text-[0.8rem] 2xl:text-[1rem]">
        Find out how much you can save today! Leave your email to stay up to
        date on the latest and hottest deals.
      </p>
      </div>
      <form action="">
        <div className="lg:w-[41.25rem] mt-4 px-4 md:px-0 overflow-auto max-h-[30rem] md:max-h-[28rem] 2xl:max-h-[40rem]">
          <label htmlFor="name " className="text-[0.8rem] xl:text-[1rem] font-medium">IMEI</label>
          <div className="w-full flex gap-2">
            <input className="flex-grow rounded-md px-3 bg-[#f8f8f8]" type="text" name="IMEI" id="IMEI" placeholder="AA-BBBBBB-CCCCCC-D" onChange={handleImeiChange}/>
            <button className=" py-[0.75rem] px-[2.75rem] md:py-3 md:px-[3rem] text-white rounded-md bg-blue-700 max-h-[56px]">Check</button>
          </div>
          <div className="border-[#bcbcbc] border-[1px] p-[1.5rem] md:p-[3rem] mt-3 rounded-[1rem]">
            <h1 className="text-2xl font-bold">Where to find your IMEI number</h1>
            <p className="max-w-[35rem] font-medium leading-5 text-[0.85rem] md:text-[1rem]">IMEI is a 15-digit number which is unique for every device. For example 529690-97-87623-0. There are two ways to find out your IMEI:</p>
            <div className="flex flex-col md:flex-row justify-around mt-4">
              <div className="flex flex-col items-center justify-between">
                <Image src={PhoneDial} alt='phone-dial'/><p className="pt-4">1. Dial *#06#</p>
              </div>
              <div className="flex flex-col items-center justify-between">
              <Image src={Package} alt='package'/><p className="pt-4">2. Check the box of your device</p>
              </div>
            </div>
          </div>
        </div>
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