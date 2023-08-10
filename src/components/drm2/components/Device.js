import MeandYou from "/public/assets/me&you.png";
import Vodacom from "/public/assets/vodacom.png";
import Telkom from "/public/assets/telkom.png";
import MTN from "/public/assets/mtn.png";
import HelloMobile from "/public/assets/hellomobile.png";
import LycaMobile from "/public/assets/lyca.png";
import Image from "next/image";
import RadioCardMedium from "./RadioCardMedium";
import Link from "next/link";
import chatFrame from "/public/assets/chatFrame.png";
import { useState } from "react";
import ProgressBar from "/public/assets/drm2-progress-bar.svg";
import ButtonArrowSVG from "/public/assets/drm2-arrow-right.svg";
import WhiteButtonArrowSVG from "/public/assets/drm2-arrow-right-white.svg";
import { nextPage, previousPage, saveFormData } from "/src/store/features/formSlice";
import { useDispatch } from "react-redux";


function Device() {
  const dispatch = useDispatch();
  const [selectedCardID, setSelectedCardID] = useState(0);


  const handleCardSelect = (id) => {
    setSelectedCardID(id);
  }

  const handleNext = (e) => {
    dispatch(
      saveFormData({
        currentProvider: providerName(selectedCardID)
      })
    )

    dispatch(nextPage());
  }
  const handlePrevious = (e) => {
    e.preventDefault();
    dispatch(previousPage());
  }

  const providerName = (id) => {
    switch (id) {
      case 1:
        return 'me&you';
      case 2:
        return 'Vodacom';
      case 3:
        return 'Telkom';
      case 4:
        return 'MTN';
      case 5:
        return 'Hello Mobile';
      case 6:
        return 'Lyca Mobile';
      default:
        return 'Other';
    }
  }

  const cardData = [
    {
      id: 1,
      icon: MeandYou,
      text: 'me&you'
    },
    {
      id: 2,
      icon: Vodacom,
      text: 'Vodacom'
    },
    {
      id: 3,
      icon: Telkom,
      text: 'Telkom'
    },
    {
      id: 4,
      icon: MTN,
      text: 'MTN'
    },
    {
      id: 5,
      icon: HelloMobile,
      text: 'Hello Mobile'
    },
    {
      id: 6,
      icon: LycaMobile,
      text: 'Lyca Mobile'
    },
  ]

  return (
    <div className="flex flex-col items-center device-content w-full">
      <div id="device-content-h" className="max-w-[30rem] 2xl:mt-[5rem] mt-[3rem]">
        <h1 className="font-medium text-[1.75rem] 2xl:text-[2.25rem] text-center p-4">What is your current provider?</h1>
        <p className="px-[2.5rem] text-center font-medium text-[0.77rem] 2xl:text-[1rem]">
          Find out how much you can save today! Leave your email to stay up to
          date on the latest and hottest deals.
        </p>
      </div>
      <form id="device-content-form" >
        <div className="grid grid-cols-2 overflow-y-auto lg:grid-cols-3 mt-[1.5rem] gap-[0.75rem] xl:max-h-[30rem] md:max-h-[20rem] max-h-[25rem]   mx-4  2xl:mt-[1.5rem] md:max-w-[40rem] xl:max-w-[40rem] 2xl:max-w-[45rem]">
        {
          cardData.map((card, index) => (
            <RadioCardMedium key={index} id={card.id} icon={card.icon} text={card.text} selected={selectedCardID === card.id} onSelect={handleCardSelect} />
          ))
        }
        </div>
        <div className="other mt-[1.5rem]">
        <select name="" id="other" placeholder="select" className=" border-none w-[20rem] max-w-[21rem] px-4 h-[4rem] rounded-lg bg-[#f8f8f8]">
          <option value="other 0">Other</option>
        </select>
        </div>
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
}

export default Device;
