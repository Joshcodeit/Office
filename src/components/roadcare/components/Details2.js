import RadioCard from "./RadioCard";
import Image from "next/image";
import InfoIcon from "/public/assets/drm2-info.svg";
import CrossSVG from "/public/assets/drm2-cross.svg";
import PaperClip from "/public/assets/drm2-paperclip.svg";
import UploadSVG from "/public/assets/drm2-upload.svg";
import Link from "next/link";
import chatFrame from "/public/assets/chatFrame.png";
import ProgressBar from "/public/assets/drm2-progress-bar.svg";
import ButtonArrowSVG from "/public/assets/drm2-arrow-right.svg";
import WhiteButtonArrowSVG from "/public/assets/drm2-arrow-right-white.svg";

import { nextPage, saveFormData } from "/src/store/features/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { previousPage } from "/src/store/features/formSlice";
import { useState } from "react";


const Details2 = () => {
  const data = useSelector(state => state.form);
  const dispatch = useDispatch();

  const handleNext = (e) => {
    if (!location) {
     return  alert("Please add location")
    }

    dispatch(
      saveFormData({
        location: location
      })
    )
    e.preventDefault();
    dispatch(nextPage());
  }

  const handlePrevious = (e) => {
    dispatch(
      saveFormData({
        location: location
      })
    )
    e.preventDefault();
    dispatch(previousPage());
  }

  const [location, setlocation] = useState(data?.formData?.location);


  return (
    <div className="flex flex-col items-center w-full">
      <div className="">
        <p className="2xl:mt-[4rem] mt-[2rem] px-[2.25rem] md:max-w-[24rem] 2xl:max-w-[30rem] text-center font-medium text-[0.8rem] 2xl:text-[1rem]">
          Could’nt find GPS
        </p>
        <h1 className="font-semibold text-[1.75rem] 2xl:text-[2.25rem] text-center px-4 py-3">
          What’s your location?
        </h1>
      </div>
      <form action="" className="mt-[2.5rem] ">
       <input placeholder="Address..." className="w-[20rem] h-[5rem] px-[1rem] rounded-md border border-slate-400" 
       onChange={(e) => {setlocation(e.target.value)}}
       defaultValue={data?.formData?.location}
       />
      </form>
      <div className="absolute flex flex-col justify-end bottom-0 right-0  mb-[1rem] w-full h-[9rem] 2xl:h-[11rem] 2xl:pt-[3rem] px-4">
        <div className="flex  gap-2 justify-center font-medium  z-10  pb-[1rem] pt-[2rem] 2xl:pt-[4rem] ">
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
  );
};

export default Details2;
