import React, {useState, useEffects} from 'react';
import ProgressBar from "/public/assets/drm2-progress-bar.svg";
import ButtonArrowSVG from "/public/assets/drm2-arrow-right.svg";
import WhiteButtonArrowSVG from "/public/assets/drm2-arrow-right-white.svg";
import chatFrame from "/public/assets/chatFrame.png";
import Link from "next/link";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { nextPage, saveFormData } from "/src/store/features/formSlice";



const FormField = () => {

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

      const handleChange = (field, e) => {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
      }

    return (
        <div>
            <form 
name="contactform"
className="contactform flex flex-col items-center mt-[3rem] mx-[2rem]  2xl:mt-[10rem] 2xl:w-[40rem]"
onSubmit={()=>this.contactSubmit.bind(this)}
>
<div className="flex gap-4  xl:w-full  justify-center">
    <fieldset>
        <div>
          <div className="flex flex-col w-[10rem] xl:w-full">
            <label
              htmlFor="FirstName"
              className="text-[0.6rem] 2xl:text-[0.75rem] font-medium"
            >
              FIRST NAME
            </label>
            {/* bg-[#F8F8F8]  */}
            <input
              className="bg-[#f8f8f8] h-[36px] 2xl:h-[56px] p-4 xl:p-3 rounded-md"
              id="FirstName"
              //ref={()=>this.myRef()}
              type="text"
              placeholder="John"
              required
              onChange={()=>this.handleChange.bind(this.fields, "firstName")}
              value={()=>this.state.fields["firstName"]}
            />

            <span style={{ color: "red" }}>{()=>this.state.errors["firstName"]}</span>
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
              //ref={()=>this.myRef.name}
              type="text"
              placeholder="Doe"
              required
              onChange={()=>this.handleChange.bind(this.fields, "lastName")}
              value={()=>this.state.fields["lastName"]}
            />
            <span style={{ color: "red" }}>{()=>this.state.errors["lastName"]}</span>
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
              //ref={()=>this.myRef.email}
              type="email"
              placeholder="johndoe@mail.co.za"
              required
              onChange={()=>this.handleChange.bind(this.fields, "email")}
              value={()=>this.state.fields["email"]}
            />
            <span style={{ color: "red" }}>{()=>this.state.errors["email"]}</span>
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
    </fieldset>
</div>
</form>
        </div>
    );
}

export default FormField;