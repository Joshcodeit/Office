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

    if (firstName && lastName && email) {
      dispatch(
        saveFormData({
          id: nanoid(),
          firstName,
          lastName,
          email,
        })
      );



      dispatch(nextPage());
    }
  }

  return (
    <div className="flex flex-col items-center w-full get-started-page">
      <div className="max-w-[30rem] 2xl:mt-[5rem] mt-[3rem] H">
        <h1 className="font-medium text-[1.75rem] 2xl:text-[2.25rem] text-center p-4">
          Welcome to Dr. Mobile!
        </h1>
        <p className="px-[2.5rem] text-center font-medium text-[0.77rem] 2xl:text-[1rem]">
          Find out how much you can save today! Leave your email to stay up to
          date on the latest and hottest deals.
        </p>
      </div>
      <form className="flex flex-col items-center mt-[3rem] mx-[2rem]  2xl:mt-[10rem] 2xl:w-[40rem]">
        <div className="flex gap-4  xl:w-full  justify-center">
          <div className="flex flex-col w-[10rem] xl:w-full">
            <label
              htmlFor="FirstName"
              className="text-[0.6rem] 2xl:text-[0.75rem] font-medium"
            >
              FIRST NAME
            </label>
            {/* bg-[#F8F8F8]  */ } 
            <input
              className="bg-[#f8f8f8] h-[36px] 2xl:h-[56px] p-4 xl:p-3 rounded-md"
              id="FirstName"
              type="text"
              placeholder="John"
              required
              onChange={onFirstNameChange}
              value={firstName}
            />
          </div>
          <div className="flex flex-col w-[10rem] xl:w-full">
            <label
              htmlFor="LastName"
              className="text-[0.6rem] 2xl:text-[0.75rem] font-medium"
            >
              LAST NAME
            </label>
            <input
              className="bg-[#f8f8f8]  h-[36px] 2xl:h-[56px] p-4 xl:p-3 rounded-md"
              id="LastName"
              type="text"
              placeholder="Doe"
              required
              onChange={onLastNameChange}
              value={lastName}
            />
          </div>
        </div>
        <div className="flex flex-col mt-4 w-full">
          <label
            htmlFor="Email"
            className="text-[0.6rem] 2xl:text-[0.75rem] font-medium"
          >
            MAIL
          </label>
          <input
            className="bg-[#f8f8f8] h-[36px]  2xl:h-[56px] p-4 xl:p-3 rounded-md"
            id="Email"
            type="email"
            placeholder="johndoe@mail.co.za"
            required
            onChange={onEmailChange}
            value={email}
          />
        </div>
        <div className="absolute flex flex-col mb-[1rem] justify-end bottom-0 right-0 w-full h-[9rem] 2xl:h-[11rem] 2xl:pt-[3rem] px-4 ">
          <div className="flex  gap-2 justify-center font-medium  z-10  pb-[1rem] pt-[2rem] 2xl:pt-[4rem] ">
            <button
              disabled
              className="text-[0.77rem] flex items-center justify-center gap-2 h-[3rem] 2xl:h-[4rem] md:px-4 bg-[#f8f8f8] rounded-[5px] flex-grow md:flex-grow-0 opacity-50"
            >
              <Image src={ButtonArrowSVG} alt="icoon" />
              Back
            </button>
            <button onClick={handleNext} type="submit"
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


          {/* <nav className="bg-white w-full flex md:opacity-0 justify-center my-3  2xl:pb-5 ">
            <Image src={ProgressBar} alt="progress-bar" />
  </nav> */}
        </div>
      </form>
    </div>
    
  );
};

export default GetStarted;
