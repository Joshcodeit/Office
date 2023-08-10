import { useState } from "react";
import ProgressBar from "/public/assets/drm2-progress-bar.svg";
import ButtonArrowSVG from "/public/assets/drm2-arrow-right.svg";
import WhiteButtonArrowSVG from "/public/assets/drm2-arrow-right-white.svg";
import chatFrame from "/public/assets/chatFrame.png";
import Link from "next/link";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { nextPage, saveFormData } from "/src/store/features/formSlice";
import ValidForm from "./validateForm";

import roadMark from "/public/assets/roadMark.png"
import roadAlert from "/public/assets/roadAlert.png"
import reflectiveCoat from "/public/assets/reflectiveCoat.png"

const GetStarted = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const onFirstNameChange = (e) => setFirstName(e.target.value);
  const onLastNameChange = (e) => setLastName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);

  const { formData } = useSelector((state) => state.form);

  const dispatch = useDispatch();

  const handleNext = () => {

    if (true) {
      // dispatch(
      //   saveFormData({
      //     id: nanoid(),
      //     firstName,
      //     lastName,
      //     email,
      //   })
      // );



      dispatch(nextPage());
    }
  }

  return (
    <div className="flex flex-col items-center w-full get-started-page">
      <div className="max-w-[30rem] 2xl:mt-[3rem] mt-[1rem] ">
        <h1 className="font-bold text-[1.75rem] 2xl:text-[2.25rem] text-center p-4">
          Allplans
        </h1>
        <br />
        <p className="px-[2.5rem] text-center font-medium text-[1.77rem] 2xl:text-[2rem] leading-[2rem]">
          Do not let a breakdown get in your way!
        </p>
        <br />
        <p className="text-center text-[1.1rem]">
          But, safety first
        </p>
      </div>
      <div className="flex flex-col items-center mt-[3rem] mx-[2rem]   2xl:w-[40rem]">
        <div className="flex flex-col gap-2">
          <div className="h-14 w-[20rem] sm:w-[25rem] bg-[#FFEEDE] text-[#E46000] border border-slate-300 rounded flex flex-row items-center gap-5 px-5">
            <Image src={roadMark} alt="sign" />
            <p>Get behind the roadguards</p>
          </div>
          <div className="h-14 w-[20rem] sm:w-[25rem] bg-[#FFEEDE] text-[#E46000] border border-slate-300 rounded flex flex-row items-center gap-5 px-5">
            <Image src={roadAlert} alt="sign" />
            <p>Turn on alarm lights</p>
          </div>
          <div className="h-14 w-[20rem] sm:w-[25rem] bg-[#FFEEDE] text-[#E46000] border border-slate-300 rounded flex flex-row items-center gap-5 px-5">
            <Image src={reflectiveCoat} alt="sign" />
            <p>Wear a reflective coat</p>
          </div>
        </div>

        <div className="absolute flex flex-col mb-[1rem] justify-end bottom-0 right-0 w-full h-[9rem] 2xl:h-[11rem] 2xl:pt-[3rem] px-4 ">
        
        <p className="text-center text-blue-700">Fetching your location details...</p>
        
          <div className="flex  gap-2 justify-center font-medium  z-10  pb-[1rem] pt-[1rem] 2xl:pt-[4rem] ">
            <button onClick={handleNext} type="submit"
              className="text-[0.77rem] flex items-center justify-center gap-2 h-[3rem] 2xl:h-[4rem] 2xl:px-4 bg-blue-700 rounded-[5px] flex-grow max-w-[28rem] text-white">
              Create Alert
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
};

export default GetStarted;
