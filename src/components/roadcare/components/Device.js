import MeandYou from "/public/assets/me&you.png";
import Vodacom from "/public/assets/vodacom.png";
import Telkom from "/public/assets/telkom.png";
import MTN from "/public/assets/mtn.png";
import HelloMobile from "/public/assets/hellomobile.png";
import LycaMobile from "/public/assets/lyca.png";
import Image from "next/image";
import Link from "next/link";
import chatFrame from "/public/assets/chatFrame.png";
import { useState } from "react";
import ProgressBar from "/public/assets/drm2-progress-bar.svg";
import ButtonArrowSVG from "/public/assets/drm2-arrow-right.svg";
import WhiteButtonArrowSVG from "/public/assets/drm2-arrow-right-white.svg";
import { nextPage, previousPage, saveFormData } from "/src/store/features/formSlice";
import { useDispatch, useSelector } from "react-redux";
import RadioCardLarge from "./RadioCardLarge";
import RadioCardMedium from "./RadioCardMedium";
import RadioCardVerticle from "./RadioCardVerticle";

import roadMark from "/public/assets/roadMark.png"
import roadAlert from "/public/assets/roadAlert.png"
import reflectiveCoat from "/public/assets/reflectiveCoat.png"


function Device() {
  const data = useSelector(state => state.form);
  const dispatch = useDispatch();


  const cardData = [
    {
      id: 1,
      icon: roadMark,
      text: 'I’m on a highway'
    },
    {
      id: 2,
      icon: roadAlert,
      text: 'I feel unsafe'
    },
    {
      id: 3,
      icon: reflectiveCoat,
      text: 'I am standing somewhere safe'
    }
  ]

  const [selectedCardID, setSelectedCardID] = useState(() => {return cardData.filter((item) => item?.text == data?.formData?.situation)[0]?.id});


  const handleCardSelect = (id) => {
    setSelectedCardID(id);
  }

  const handleNext = (e) => {
    if (!cardData.filter((item) => item?.id == selectedCardID)[0]?.text) {
     return  alert("Please add require field!")
    }

    dispatch(
      saveFormData({
        situation: cardData.filter((item) => item?.id == selectedCardID)[0]?.text
      })
    )

    dispatch(nextPage());
  }
  const handlePrevious = (e) => {
    e.preventDefault();
    dispatch(previousPage());
  }


  return (
    <div className="flex flex-col items-center device-content w-full">
      <div id="device-content-h" className="max-w-[30rem] 2xl:mt-[5rem] mt-[3rem]">
        <h1 className="font-semibold text-[1.75rem] 2xl:text-[2.3rem] text-center p-4">We could not acces your location</h1>
        <p className="px-[2.5rem] text-center font-medium text-[0.77rem] 2xl:text-[1rem]">
          What is your location
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-[0rem] xl:mt-[4rem]">
        {/* <div className="h-[4.2rem] w-[25rem] bg-[#FFEEDE] text-[#000] font-medium flex flex-row items-center gap-5 rounded px-5">
          <Image src={roadMark} alt="sign" />
          <p>I’m on a highway</p>
        </div>
        <div className="h-[4.2rem] w-[25rem] bg-[#FFEEDE] text-[#000] font-medium flex flex-row items-center gap-5 rounded px-5">
          <Image src={roadAlert} alt="sign" />
          <p>I feel unsafe</p>
        </div>
        <div className="h-[4.2rem] w-[25rem] bg-[#FFEEDE] text-[#000] font-medium flex flex-row items-center gap-5 rounded px-5">
          <Image src={reflectiveCoat} alt="sign" />
          <p>I am standing somewhere safe</p>
        </div> */}
      </div>

      <form className="w-full px-[2rem] flex flex-col mt-[1rem] gap-3   mx-4  2xl:mt-[3rem] md:w-[40rem] overflow-y-scroll h-[21rem] md:h-auto md:overflow-y-hidden">
        {cardData.map((card) => (
          <RadioCardVerticle
            key={card.id}
            id={card.id}
            icon={card.icon}
            text={card.text}
            desc={card.desc}
            selected={selectedCardID === card.id}
            onSelect={() => { handleCardSelect(card.id) }}
          />
        ))}

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
