import Image from "next/image";
import React from "react";
import { useState } from "react";
import ProblemCategoryBar from "./ProblemCategoryBar";
import BinIcon from "/public/assets/drm2-bin.svg";
import IPhoneImage from "/public/assets/drm2-iphone.png";
import ProgressBar from "/public/assets/drm2-progress-bar.svg";
import ButtonArrowSVG from "/public/assets/drm2-arrow-right.svg";
import WhiteButtonArrowSVG from "/public/assets/drm2-arrow-right-white.svg";
import Link from "next/link";
import chatFrame from "/public/assets/chatFrame.png";
import { nextPage, saveFormData } from "/src/store/features/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { previousPage } from "/src/store/features/formSlice";


const Summary = () => {
  const data = useSelector(state => state.form);
  const dispatch = useDispatch();

  const handleNext = (e) => {
    e.preventDefault();
    dispatch(
      saveFormData({
        otherInfo: otherInfo
      }
      ))
    dispatch(nextPage());
  }

  const handlePrevious = (e) => {
    e.preventDefault();
    dispatch(previousPage());
  }

  const [otherInfo, setotherInfo] = useState(data?.formData?.otherInfo);

  const preAns = [
    "Prefilled answer #1",
    "Prefilled answer #2",
    "Prefilled answer #3",
  ]

  return (
    <div className="flex flex-col items-center w-full xl:w-[40rem] md:mx-auto mx-[10px] ">
      <h1 className="font-semibold 2xl:mt-[4rem] mt-[2rem] text-[1.75rem] 2xl:text-[2.25rem] text-center p-4">Anything particular we should know?</h1>
      <div className="flex flex-col items-left gap-5">
        <textarea className="w-[95%] md:w-[33rem] h-[12rem] p-2 border border-slate-300"
          onChange={(e) => { setotherInfo(e.target.value) }}
          value={otherInfo}
        >

        </textarea>
        <div className="text-blue-700 border-b border-blue-700 w-fit">Or select prefilled answer</div>
        <div className=" flex flex-wrap gap-5">
          {
            preAns.map((item, index) => {
              return (
                <div className="border bg-white px-3 border-slate-400 w-fit rounded-[5rem] cursor-pointer hover:bg-slate-300" onClick={() => { return setotherInfo(item) }}>
                  {item}
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="absolute flex flex-col justify-end bottom-0 right-0 mb-[1rem] w-full h-[9rem] 2xl:h-[11rem] 2xl:pt-[3rem] px-4">
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

export default Summary;
