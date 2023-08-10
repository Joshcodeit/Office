import Image from "next/image"
import Confetti from "/public/assets/drm2-confetti.svg"
import Arrow from "/public/assets/drm2-success-arrow.svg"
import Link from "next/link";
import chatFrame from "/public/assets/chatFrame.png";
import ProgressBar from "/public/assets/drm2-progress-bar.svg";
import ButtonArrowSVG from "/public/assets/drm2-arrow-right.svg";
import WhiteButtonArrowSVG from "/public/assets/drm2-arrow-right-white.svg";


const SuccessPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full mx-2">
      <div><Image src={Confetti}/></div>
      <div className="text-4xl font-medium my-2 text-center">Request successfully submitted!</div>
      <div className="max-w-[33rem] font-regular text-center md:text-left mx-2">Thanks for using our reperation service! We received you details and will send it to our reperations partner. Check you email for the confirmation.</div>
      <a href="" className=" flex gap-2 p-2 underline text-[#5253f1] items-center">Return to home<Image src={Arrow} alt='svg'/></a>
      <div className="absolute flex flex-col justify-end  bottom-0  mb-[1rem] right-0 w-full h-[9rem] 2xl:h-[11rem] 2xl:pt-[3rem] px-4">
          {/* <div className="flex  gap-2 justify-center font-medium  z-10  pb-[1rem] pt-[2rem] 2xl:pt-[4rem] ">
            <button
              disabled
              className="text-[0.77rem] flex items-center justify-center gap-2 h-[3rem] 2xl:h-[4rem] md:px-4 bg-[#f8f8f8] rounded-[5px] flex-grow md:flex-grow-0 opacity-50"
            >
              <Image src={ButtonArrowSVG} alt="icoon" />
              Back
            </button>
            <button disabled
            className="text-[0.77rem] flex items-center justify-center gap-2 h-[3rem] 2xl:h-[4rem] 2xl:px-4 bg-blue-700 rounded-[5px] flex-grow max-w-[35rem] text-white opacity-50">
              Confirm my request
              <Image
                className="fill-white"
                src={WhiteButtonArrowSVG}
                alt="icoon"
              />
            </button>
          </div> */}
          <Link href="#" className="flex md:hidden flex-row mx-auto gap-2">
          <Image src={chatFrame} alt="" height={25} width={25} />
          <p className="border-b-[1px] border-[#5252f1] text-[#5252f1] text-[14px] ">Have a question? Chat with us</p>
        </Link>
        </div>
    </div>
  )
}

export default SuccessPage