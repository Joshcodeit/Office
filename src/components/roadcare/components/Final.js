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
import { useState } from "react";
import { nextPage, saveFormData } from "/src/store/features/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { previousPage } from "/src/store/features/formSlice";
import PhoneInput from 'react-phone-number-input'
// import Input from 'react-phone-number-input/input'


// const customInput = ({value, setValue}) => {
//     function onChange(params) {
//         setValue(params);
//     }

//     return (
//         <Input
//         value={value}
//         className="h-[4rem] w-[24rem] px-[1rem] rounded-[7px] border-2	"
//         onChange={onChange}
//         // inputComponent={CustomInput}
//         />
//     )
// }

const Final = () => {
  const data = useSelector(state => state.form);

  const dispatch = useDispatch();

  const handleNext = (e) => {
    if (!contactDetails?.firstName || !contactDetails?.lastName || !phone) {
     return alert("Please add all the required fields")
    }

    e.preventDefault();
    dispatch(
      saveFormData({
        contactDetails: { ...contactDetails, phone }
      }
      ))
    dispatch(nextPage());
  }

  const handlePrevious = (e) => {
    e.preventDefault();
    dispatch(previousPage());
  }


  const [contactDetails, setcontactDetails] = useState(data?.formData?.contactDetails)
  const [phone, setphone] = useState(data?.formData?.contactDetails?.phone)

  return (
    <div className="flex flex-col items-center w-full">
      <div className="">
        <h1 className="font-semibold 2xl:mt-[3rem] mt-[2rem] text-[1.75rem] 2xl:text-[2.25rem] text-center px-4 py-3">
          Your details
        </h1>
        <p className="px-[2.25rem] md:max-w-[24rem] 2xl:max-w-[30rem] text-center font-medium text-[0.8rem] 2xl:text-[1rem]">  </p>
      </div>
      <form action="" className="mt-[2rem] md:w-[28rem] px-4 w-full overflow-auto max-h-[30rem] flex flex-col gap-2">
        <label>FIRST NAME</label>
        <input className="h-[4rem] mb-3 rounded-lg px-4 text-[1.5dgrem] border-2" placeholder="Jon"
          onChange={(e) => setcontactDetails((f) => { return { ...f, firstName: e.target.value } })}
          defaultValue={contactDetails?.firstName}
        />
        <label>LAST NAME</label>
        <input className="h-[4rem] mb-3 rounded-lg px-4 text-[1.5dgrem] border-2" placeholder="Doe"
          onChange={(e) => setcontactDetails((f) => { return { ...f, lastName: e.target.value } })}
          defaultValue={contactDetails?.lastName}
        />
        <label>PHONE</label>
        {/* <input className="h-[4rem] mb-3 rounded-lg px-4 text-[1.5dgrem] border-2" placeholder="+27"
          onChange={(e) => setcontactDetails((f) => { return { ...f, phone: e.target.value } })}
          defaultValue={contactDetails?.phone}
        /> */}
        <PhoneInput
          countrySelectProps={{ unicodeFlags: true }}
          defaultCountry="ZA"
          international
          defaultValue={contactDetails?.phone}
          value={phone}
          onChange={setphone}
          className="h-[4rem] mb-3 rounded-lg px-4 text-[1.5dgrem] border-2 bg-white"
          // inputComponent={(event) => { return customInput({...event, setValue: function (num) { setphone(num) } }) }}
          // inputComponent={customInput}
        />

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
