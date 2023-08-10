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
import { useDispatch } from "react-redux";
import { previousPage } from "/src/store/features/formSlice";
import { useState } from "react";


const Details2 = () => {
  const dispatch = useDispatch();

  const handleNext = (e) => {
    dispatch(
      saveFormData({
        warrantyFile: warrantyFileStatus
      })
    )
    e.preventDefault();
    dispatch(nextPage());
  }

  const handlePrevious = (e) => {
    dispatch(
      saveFormData({
        warrantyFile: warrantyFileStatus
      })
    )
    e.preventDefault();
    dispatch(previousPage());
  }

  const [selectedCardID, setSelectedCardID] = useState(0);
  const [warrantyFileStatus, setWarrantyFileStatus] = useState(false);

  const handleCardSelect = (id) => {
    setSelectedCardID(id);
    if (id === 3) {
      setWarrantyFileStatus(true);
    }
  }

  const cardData = [
    {
      id: 1,
      icon: CrossSVG,
      text: 'No, I do not'
    },
    {
      id: 2,
      icon: PaperClip,
      text: 'Yes, on paper'
    },
    {
      id: 3,
      icon: UploadSVG,
      text: 'Yes, digitally'
    },
  ]

  return (
    <div className="flex flex-col items-center w-full">
      <div className="">
        <h1 className="font-semibold 2xl:mt-[4rem] mt-[2rem] text-[1.75rem] 2xl:text-[2.25rem] text-center px-4 py-3">
          Let's fill in the details
        </h1>
        <p className="px-[2.25rem] md:max-w-[24rem] 2xl:max-w-[30rem] text-center font-medium text-[0.8rem] 2xl:text-[1rem]">
          Find out how much you can save today! Leave your email to stay up to
          date on the latest and hottest deals.
        </p>
      </div>
      <form action="" className="mt-[2.5rem] lg:w-[41.25rem] lg:mt-[10rem] px-4">
        <h1 className="font-semibold text-[0.9rem] md:text-[1rem]">Do you have a warranty file?</h1>
        <div className="lg:flex gap-3">
          {cardData.map((card) => (
            <RadioCard
              key={card.id}
              id={card.id}
              icon={card.icon}
              text={card.text}
              selected={selectedCardID === card.id}
              onSelect={handleCardSelect}
            />
          ))}
        </div>
        {
          selectedCardID === 3 &&
          <div className="flex gap-2 mt-2 underline text-[#5253F1]"><a className="" href="">Upload file</a> icon</div>
        }
        {selectedCardID === 2 &&
          <div className="py-3 px-2 md:px-4  bg-[#FFF4CC] mt-[1rem] rounded-[5px] items-center flex gap-2 text-[0.9rem] md:text-[1rem]">
            <p className="flex items-center mx-2 min-w-[1.5rem]"><Image src={InfoIcon} objectFit='contain' objectPosition='center' alt='ico' /></p> <p>Make sure to include the paper document when sending us your device!</p>
          </div>}
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
