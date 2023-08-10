import ProblemCategoryBar from "./ProblemCategoryBar";
import EditIcon from "/public/assets/drm2-edit.svg"
import UserIcon from "/public/assets/drm2-user.svg"
import IphoneImage from "/public/assets/drm2-iphone.png"
import Image from "next/image"
import Link from "next/link";
import chatFrame from "/public/assets/chatFrame.png";
import ProgressBar from "/public/assets/drm2-progress-bar.svg";
import ButtonArrowSVG from "/public/assets/drm2-arrow-right.svg";
import WhiteButtonArrowSVG from "/public/assets/drm2-arrow-right-white.svg";
const axios = require('axios');

import { nextPage, saveFormData } from "/src/store/features/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { previousPage, goTo } from "/src/store/features/formSlice";
import { useState } from "react";

import carIcon from "/public/assets/carIcon.png"
import bikeIcon from "/public/assets/bikeIcon.png"
import truckIcon from "/public/assets/truckIcon.png"
import motoIcon from "/public/assets/motoIcon.png"
import busIcon from "/public/assets/busIcon.png"
import otherIcon from "/public/assets/otherIcon.png"

import issue_battery from "/public/assets/issue_battery.png"
import issue_damage from "/public/assets/issue_damage.png"
import issue_locks from "/public/assets/issue_locks.png"
import issue_petrol from "/public/assets/issue_petrol.png"
import issue_tire from "/public/assets/issue_tire.png"



const Final = () => {
  const data = useSelector(state => state.form);
  const [dbResponse, setdbResponse] = useState(false)

  console.log("data:  ", data);

  const dispatch = useDispatch();

  const handleNext = (e) => {
    response()
    e.preventDefault();
    dispatch(nextPage());
  }

  const handlePrevious = (e) => {
    e.preventDefault();
    dispatch(previousPage());
  }

  const cardDataVehicleType = [
    {
      id: 1,
      icon: carIcon,
      text: 'Car',
      desc: 'Current provider has slow connection'
    },
    {
      id: 2,
      icon: bikeIcon,
      text: 'Cycle',
      desc: 'Current provider has slow connection'
    },
    {
      id: 3,
      icon: truckIcon,
      text: 'Delivery Truck',
      desc: 'Current provider has slow connection'
    },
    {
      id: 4,
      icon: motoIcon,
      text: 'Motorcycle',
      desc: 'Current provider has slow connection'
    },
    {
      id: 5,
      icon: busIcon,
      text: 'Bus',
      desc: 'Current provider has slow connection'
    },
    {
      id: 6,
      icon: otherIcon,
      text: 'Other',
      desc: 'Current provider has slow connection'
    },
  ]

  const cardDataIssue = [
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


  const response = async function saveData(params) {
    try {
      let res = await axios("http://localhost:3000/api/db_roadcare", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data.formData),

      });

      return res;
    } catch (error) {
      console.log(error);
    }

  }





  return (
    <div className="flex flex-col items-center w-full md:w-[30rem] mx-auto">
      <div className="">
        <h1 className="font-semibold  mt-[1.5rem] text-[1.75rem] 2xl:text-[2.25rem] text-center px-4 py-3 leading-10">
          Check if <br /> everything is right
        </h1>
        <p className="px-[2.25rem] md:max-w-[24rem] 2xl:max-w-[30rem] text-center font-medium text-[0.8rem] 2xl:text-[1rem]">  </p>
      </div>
      <form action="" className=" md:w-[28rem] px-4 w-full overflow-auto max-h-[30rem] flex flex-col gap-2  overflow-y-scroll h-[25rem] md:h-auto md:overflow-y-hidden">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-baseline">
            <label>VEHICLE</label>
            <u className="text-sm text-blue-700 border- cursor-pointer" onClick={() => dispatch(goTo(2))}>Change</u>
          </div>
          <div className="bg-white px-2 h-[3.25rem] rounded flex items-center border-2">
            <Image src={cardDataVehicleType.filter((item) => {return item?.text == data?.formData?.vehicleType })[0]?.icon} alt="icon" className="mr-2" />
            {data?.formData?.vehicleType}
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between items-baseline">
            <label>PROBLEMS</label>
            <u className="text-sm text-blue-700 border-b cursor-pointer" onClick={() => dispatch(goTo(3))}>Change</u>
          </div>
          <div className="bg-white px-2 h-[3.25rem] mb-3 rounded flex items-center border-2">
          <Image src={cardDataIssue.filter((item) => {return item?.text == data?.formData?.issue })[0]?.icon} alt="icon" className="mr-2" />
            {data?.formData?.issue}
          </div>
          <div className="bg-white px-2 h-[3.25rem] rounded flex items-center border-2">
            {data?.formData?.otherInfo}
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between items-baseline">
            <label>LOCATION</label>
            <u className="text-sm text-blue-700 border-b cursor-pointer" onClick={() => dispatch(goTo(5))}>Change</u>
          </div>
          <div className="bg-white px-2 h-[3.25rem] rounded flex items-center border-2">
            {data?.formData?.location}
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between items-baseline">
            <label>LICENSE PLATE</label>
            <u className="text-sm text-blue-700 border-b cursor-pointer" onClick={() => dispatch(goTo(4))}>Change</u>
          </div>
          <div className="bg-white px-2 h-[3.25rem] rounded flex items-center border-2">
            {data?.formData?.licenseNo}
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between items-baseline">
            <label>CONTACT</label>
            <u className="text-sm text-blue-700 border-b cursor-pointer" onClick={() => dispatch(goTo(7))} >Change</u>
          </div>
          <div className="bg-white px-2 h-10 rounded-t flex items-center border-t-2 border-x-2">
            {data?.formData?.contactDetails?.firstName} {data?.formData?.contactDetails?.lastName}
          </div>
          <div className="bg-white px-2 h-10 rounded-b flex items-center border-b-2 border-x-2">
            {data?.formData?.contactDetails?.phone}
          </div>
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
            Confirm my request
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

export default Final;
