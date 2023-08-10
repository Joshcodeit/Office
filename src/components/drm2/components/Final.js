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

import { nextPage, saveFormData } from "/src/store/features/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { previousPage } from "/src/store/features/formSlice";


const Final = () => {
  const { category } = useSelector(state => state.form);

  const dispatch = useDispatch();

  const handleNext = (e) => {
    e.preventDefault();
    dispatch(nextPage());
  }

  const handlePrevious = (e) => {
    e.preventDefault();
    dispatch(previousPage());
  }


  return (
    <div className="flex flex-col items-center w-full">
      <div className="">
        <h1 className="font-semibold 2xl:mt-[4rem] mt-[2rem] text-[1.75rem] 2xl:text-[2.25rem] text-center px-4 py-3">
          All good?
        </h1>
        <p className="px-[2.25rem] md:max-w-[24rem] 2xl:max-w-[30rem] text-center font-medium text-[0.8rem] 2xl:text-[1rem]">
          Find out how much you can save today! Leave your email to stay up to
          date on the latest and hottest deals.
        </p>
      </div>
      <form action="" className="mt-[2.5rem] md:w-[30rem] 2xl:w-[41.25rem] 2xl:mt-[5rem] px-4 w-full overflow-auto max-h-[30rem] ">
        <div className="flex flex-col gap-[1rem]">
          <div className="flex-grow">
            <p className="text-[0.8rem] md:text-[1rem]">DEVICE INFO</p>
            <ProblemCategoryBar icon={IphoneImage} title='Apple' desc='iPhone 14 Pro Max' />
            <ProblemCategoryBar desc={category} />
            <ProblemCategoryBar desc={category} />
          </div>
          <div className="flex-grow">
            <p className="text-[0.8rem] md:text-[1rem]">YOUR CRENDENTIALS</p>
            <div className="p-2 border-[1px] flex mt-2 rounded-[10px]">
              <div className="m-3"><Image src={UserIcon} alt='ico' /></div>
              <div className="flex-grow text-[0.7rem] md:text-[0.9rem] text-[#9a9a9a]">
                <h1 className="text-[1rem] text-black font-semibold mt-2 mb-1">Details</h1>
                <p className="lg:max-w-[10rem] max-w-[7rem]">
                  Die Rand 70 Stellenbosch, 22 33E{" "}
                </p>
                <p className="mt-4 lg:max-w-[10rem] max-w-[7rem]">john.doe@mail.com +27 991 003 1992</p>
              </div>
              <div className="flex"><Image objectFit="" src={EditIcon} alt='' /></div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-[0.8rem] md:text-[1rem]">PROBLEM 1</p>
          <ProblemCategoryBar />
          <ProblemCategoryBar />
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
