import Image from "next/image";
import PhoneIcon from "/public/assets/image952.png";
import RadioCardLarge from "./RadioCardLarge";
import RadioCardMedium from "./RadioCardMedium";
import RadioCardVerticle from "./RadioCardVerticle";
import Software from "/public/assets/drm2-software.png";
import Buttons from "/public/assets/drm2-buttons.png";
import Screens from "/public/assets/drm2-screen.png";
import GPS from "/public/assets/drm2-gps.png";
import Camera from "/public/assets/drm2-camera.png";
import Bluetooth from "/public/assets/drm2-bluetooth.png";
import OnOff from "/public/assets/drm2-on-off.png";
import Link from "next/link";
import chatFrame from "/public/assets/chatFrame.png";
import ProgressBar from "/public/assets/drm2-progress-bar.svg";
import ButtonArrowSVG from "/public/assets/drm2-arrow-right.svg";
import WhiteButtonArrowSVG from "/public/assets/drm2-arrow-right-white.svg";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, previousPage, saveFormData } from "/src/store/features/formSlice";
import { useState } from "react";

import issue_battery from "/public/assets/issue_battery.png"
import issue_damage from "/public/assets/issue_damage.png"
import issue_locks from "/public/assets/issue_locks.png"
import issue_petrol from "/public/assets/issue_petrol.png"
import issue_tire from "/public/assets/issue_tire.png"
import otherIcon from "/public/assets/otherIcon.png"


function Issues() {
  const data = useSelector(state => state.form);
  const dispatch = useDispatch();


  const cardData = [
    {
      id: 1,
      icon: issue_tire,
      text: 'Flat tire',
      desc: 'Current provider has slow connection'
    },
    {
      id: 2,
      icon: issue_locks,
      text: 'Locks',
      desc: 'Current provider has slow connection'
    },
    {
      id: 3,
      icon: issue_damage,
      text: 'Damage',
      desc: 'Current provider has slow connection'
    },
    {
      id: 4,
      icon: issue_battery,
      text: 'Battery',
      desc: 'Current provider has slow connection'
    },
    {
      id: 5,
      icon: issue_petrol,
      text: 'Petrol',
      desc: 'Current provider has slow connection'
    },
    {
      id: 6,
      icon: otherIcon,
      text: 'Other',
      desc: 'Current provider has slow connection'
    },
  ]



  const handleNext = (e) => {
    if (!cardData.filter((item) => item?.id == selectedCardID)[0]?.text) {
     return alert("Please add required field!")
    }
    e.preventDefault();
    dispatch(
      saveFormData({
        issue: cardData.filter((item) => item?.id == selectedCardID)[0]?.text
      }
      ))
    dispatch(nextPage());
  }

  const handlePrevious = (e) => {
    e.preventDefault();
    dispatch(previousPage());
  }

  const [selectedCardID, setSelectedCardID] = useState(() => {return cardData.filter((item) => item?.text == data?.formData?.issue)[0]?.id});

  const handleCardSelect = (id) => {
    setSelectedCardID(id);
  }


  return (
    <div>
      <div className="issues flex flex-col items-center w-full">
        <div className="h max-w-[30rem] 2xl:mt-[5rem] mt-[3rem]">
          <h1 className="font-medium text-[1.75rem] 2xl:text-[2.25rem] text-center p-4">
           What’s the matter?
          </h1>
          <p className="px-[2.5rem] md:max-w-[24rem] 2xl:max-w-[30rem] text-center font-medium text-[0.77rem] 2xl:text-[1rem]">

          </p>
        </div>
        <form className="w-full px-[2rem] grid grid-cols-1 md:grid-cols-2 mt-[2rem] gap-3 h-[21rem]  mx-4  2xl:mt-[3rem] md:w-[40rem] overflow-y-scroll h-[21rem] md:h-auto md:overflow-y-hidden">
          {cardData.map((card) => (
            <RadioCardLarge
              key={card.id}
              id={card.id}
              icon={card.icon}
              text={card.text}
              desc={card.desc}
              selected={selectedCardID === card.id}
              onSelect={handleCardSelect}
            />
          ))}

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
  );
}

export default Issues;
