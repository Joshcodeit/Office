import Image from "next/image";
import React from "react";
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
  const { category, occurrence } = useSelector((state) => state.form.formData);
  const dispatch = useDispatch();

  const handleNext = (e) => {
    e.preventDefault();
    dispatch(nextPage());
  }

  const handlePrevious = (e) => {
    e.preventDefault();
    dispatch(previousPage());
  }

  return (
    <div className="flex flex-col items-center w-full ">
      <h1 className="font-semibold 2xl:mt-[4rem] mt-[2rem] text-[1.75rem] 2xl:text-[2.25rem] text-center p-4">Summary</h1>
      <div className="relative w-full max-w-[41.25rem] px-3 overflow-auto max-h-[35rem] md:max-h-[37rem] xl:max-h-[40rem] 2xl:max-h-[40rem] pb-[5rem]">
        <h1 className="flex justify-between items-center text-[0.7rem] md:text-[0.75rem]  px-1 font-medium my-3 2xl:my-4">DEVICE<Image objectFit="contain" src={BinIcon} /></h1>
        <ProblemCategoryBar icon={IPhoneImage} title='Apple' desc='iPhone 14 Pro Max' />
        <h1 className="flex justify-between items-center text-[0.7rem] md:text-[0.75rem] my-3 px-1 font-medium  2xl:my-4">PROBLEM 1<Image objectFit="contain" src={BinIcon} /></h1>
        <ProblemCategoryBar desc={category} />
        <ProblemCategoryBar title='Specific Problem' />
        <ProblemCategoryBar title='Occurrence' desc={occurrence} />
        <h1 className="flex justify-between items-center text-[0.7rem] md:text-[0.75rem] my-3 px-1 font-medium  2xl:my-4">PROBLEM 2<Image objectFit="contain" src={BinIcon} /></h1>
        <ProblemCategoryBar desc={category} />
        <ProblemCategoryBar title='Specific Problem' />
        <ProblemCategoryBar title='Occurrence' desc={occurrence} />
      </div>
      <div className="bg-[#ebebeb] px-4 py-3 max-w-[20rem] w-full md:max-w-[32rem] absolute bottom-[10rem] md:bottom-[12rem] rounded-lg flex justify-center font-bold">Add Another Problem</div>
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
