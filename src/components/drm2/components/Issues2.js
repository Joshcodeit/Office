import ProblemCategoryBar from "./ProblemCategoryBar"
import DurationIcon from "/public/assets/drm2-duration.svg"
import RadioCard from "./RadioCard"
import Image from "next/image"
import Link from "next/link";
import chatFrame from "/public/assets/chatFrame.png";
import ProgressBar from "/public/assets/drm2-progress-bar.svg";
import ButtonArrowSVG from "/public/assets/drm2-arrow-right.svg";
import WhiteButtonArrowSVG from "/public/assets/drm2-arrow-right-white.svg";
import { nextPage, saveFormData } from "/src/store/features/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { previousPage } from "/src/store/features/formSlice";
import { useState } from "react";


const Issues2 = () => {
  const {category} = useSelector((state) => state.form.formData);
  const dispatch = useDispatch();

  const handleNext = (e) => {
    dispatch(
      saveFormData({
        occurrence : occurrenceName(selectedCardID)
      })
    )
    e.preventDefault();
    dispatch(nextPage());
  }

  const handlePrevious = (e) => {
    e.preventDefault();
    dispatch(previousPage());
  }

  const [selectedCardID , setSelectedCardID] = useState(0);

  const handleCardSelect = (id) => {
    setSelectedCardID(id);
  }

  const occurrenceName = (id) => {
    switch (id) {
      case 1:
        return 'Rarely';
      case 2:
        return 'Sometimes';
      case 3:
        return 'Often';
      default:
        return 'Other';
    }
  }

  const cardData = [
    {
      id : 1,
      text : 'Rarely',
    },
    {
      id : 2,
      text : 'Sometimes',
    },
    {
      id : 3,
      text : 'Often',
    },
  ]

  return (
    <div className="flex justify-center items-center">
   <div className="flex flex-col items-center max-w-[41.25rem]">
     <div className="max-w-[30rem] 2xl:mt-[5rem] mt-[2rem]">
       <h1 className="font-medium text-[1.75rem] 2xl:text-[2.25rem] text-center p-4">
       Tell us, what’s wrong?
       </h1>
       <p className="px-[2.5rem] md:max-w-[24rem] 2xl:max-w-[30rem] text-center font-medium text-[0.77rem] 2xl:text-[1rem]">
         Find out how much you can save today! Leave your email to stay up to
         date on the latest and hottest deals.
       </p>
     </div>
     <form className="w-full px-4 gap-2 lg:w-[41.25rem] mt-[1rem] max-h-[30rem] sm:max-h-[40rem] overflow-y-auto">
        <ProblemCategoryBar desc={category}/>
        <ProblemCategoryBar title='Specific Problem' />
        <p className="font-bold my-4">How often does it occur?</p>
        <div className="lg:flex justify-between gap-2">
          {cardData.map((card) => (
            <RadioCard
            icon = {DurationIcon}
              key={card.id}
              id={card.id}
              text={card.text}
              selected={selectedCardID === card.id}
              onSelect={handleCardSelect}
            />
          ))}
        </div>
     </form>
     <div className="absolute flex flex-col justify-end bottom-0 right-0  mb-[1rem] w-full h-[9rem] 2xl:h-[11rem] 2xl:pt-[3rem] px-4">
          <div className="flex  gap-2 justify-center font-medium  z-10  pb-[1rem] pt-[2rem] 2xl:pt-[4rem] ">
            <button
              onClick={handlePrevious}
              className="text-[0.77rem] flex items-center justify-center gap-2 h-[3rem] 2xl:h-[4rem] md:px-4 bg-[#f8f8f8] rounded-[5px] flex-grow md:flex-grow-0 "
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
   </div>
  )
}

export default Issues2