import Image from "next/image";
import PhoneIcon from "/public/assets/image952.png";
import RadioCardLarge from "./RadioCardLarge";
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
import { useDispatch } from "react-redux";
import { nextPage, previousPage, saveFormData } from "/src/store/features/formSlice";
import { useState } from "react";


function Issues() {
  const dispatch = useDispatch();

    const handleNext = (e) => {
    e.preventDefault();
    dispatch(
      saveFormData({
        category :  categoryName(selectedCardID)
      }
    ))
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

  const categoryName = (id) => {
    switch (id) {
      case 1:
        return 'Software';
      case 2:
        return 'Buttons';
      case 3:
        return 'Screens';
      case 4:
        return 'GPS';
      case 5:
        return 'Camera';
      case 6:
        return 'Bluetooth';
      case 7:
        return 'On/Off';
      default:
        return 'Other';
    }
  }

  const cardData = [
    {
      id : 1,
      icon : Software,
      text : 'Software',
      desc : 'Current provider has slow connection'
    },
    {
      id : 2,
      icon : Buttons,
      text : 'Buttons',
      desc : 'Current provider has slow connection'
    },
    {
      id : 3,
      icon : Screens,
      text : 'Screens',
      desc : 'Current provider has slow connection'
    },
    {
      id : 4,
      icon : GPS,
      text : 'GPS',
      desc : 'Current provider has slow connection'
    },
    {
      id : 5,
      icon : Camera,
      text : 'Camera',
      desc : 'Current provider has slow connection'
    },
    {
      id : 6,
      icon : Bluetooth,
      text : 'Bluetooth',
      desc : 'Current provider has slow connection'
    },
    {
      id : 7,
      icon : OnOff,
      text : 'On/Off',
      desc : 'Current provider has slow connection'
    },
  ]


  return (
    <div>
      <div className="issues flex flex-col items-center w-full">
        <div className="h max-w-[30rem] 2xl:mt-[5rem] mt-[3rem]">
          <h1 className="font-medium text-[1.75rem] 2xl:text-[2.25rem] text-center p-4">
          Tell us, what’s wrong?
          </h1>
          <p className="px-[2.5rem] md:max-w-[24rem] 2xl:max-w-[30rem] text-center font-medium text-[0.77rem] 2xl:text-[1rem]">
            Find out how much you can save today! Leave your email to stay up to
            date on the latest and hottest deals.
          </p>
        </div>
        <form className="w-full px-[2rem] grid grid-cols-1 md:grid-cols-2 mt-[2rem] gap-3 max-h-[27rem] lg:max-h-[17rem] xl:max-h-[24rem] 2xl:max-h-[30rem] overflow-y-auto mx-4  2xl:mt-[3rem] md:w-[40rem]">
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
