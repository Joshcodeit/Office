import Image from 'next/image'
import BackHome from "/public/assets/back-home-arrow.svg";
import ProgressBar from "../components/roadcare/components/ProgressBar";
import GetStarted from "../components/roadcare/components/GetStarted";
import Device from "../components/roadcare/components/Device";
import Issues from "../components/roadcare/components/Issues";
import Issues2 from "../components/roadcare/components/Issues2";
import Details from "../components/roadcare/components/Details";
import Summary from "../components/roadcare/components/Summary";
import Details2 from "../components/roadcare/components/Details2";
import Final from "../components/roadcare/components/Final";
import FinalReview from "../components/roadcare/components/FinalReview";
import Loading from "../components/roadcare/components/Loading";
import SuccessPage from "../components/roadcare/components/SuccessPage";
import chatIcon from "/public/assets/chat.png";


import SideBar from "../components/roadcare/components/SideBar";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  nextPage,
  previousPage,
  saveFormData,
} from "/src/store/features/formSlice";
import Form from "../components/roadcare/components/Form";
import { useEffect } from "react";

const roadcare = () => {
  const { currentPage, formData } = useSelector((state) => state.form);



  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPage === 9) {
      setTimeout(() => {
        dispatch(nextPage());
      }, 1000);
    }
  }, [currentPage])

  const Page = () => {
    switch (currentPage) {
      case 0:
        return <GetStarted />
      case 1:
        return <Device />
      case 2:
        return <Issues />
      case 3:
        return <Issues2 />
      case 4:
        return <Details />
      case 5:
        return <Details2 />
      case 6:
        return <Summary />
      case 7:
        return <Final />
      case 8:
        return <FinalReview />
      case 9:
        return <Loading />
      case 10:
        return <SuccessPage />
      default:
        return <GetStarted />
    }
  }

  // bg-gradient-to-br from-[#5252f13a] from-10% via-[#ffc38b5e] via-30% to-[#5252f13a] to-90%

  return (
    <div className="roadcare flex h-screen w-screen bg-[#fbfbff] overflow-clip">

    <div className='h-[100vh] w-[100vw] absolute  '>
      <div className='bg-[#5253F1] h-0 w-0 rounded-[50rem] shadow-[0_0_1000px_250px_rgba(82,83,241,0.4)] fixed top-0 left-0'></div>
      <div className='bg-[#FFC38B] h-0 w-0 rounded-[50rem] shadow-[0_0_800px_250px_rgba(255,195,139,0.5)] fixed bottom-[12rem] left-[22rem]'></div>
      <div className='bg-[#5253F1] h-0 w-0 rounded-[50rem] shadow-[0_0_900px_180px_rgba(82,83,241,0.4)] fixed bottom-0 right-0'></div>
    </div>

      {/* <button className="absolute hidden md:flex gap-2 p-2 text-[0.8rem] items-center text-[#7c7c7c] bg-[#f2f2f2] rounded-br-lg">
        <Image src={BackHome} />
        Back home
      </button> */}
      {/* <SideBar currentPage={currentPage} /> */}
      <div className="relative w-full h-full all-page">
        <nav className="h-[2rem] w-full flex justify-center mt-2">
          <ProgressBar currentPage={currentPage} />
        </nav>
        <div className="h-[100%] text-[#000]">
          <Page />
        </div>
      </div>

      <div className='fixed bottom-10 right-10 z-50 cursor-pointer hidden md:block' onClick={() => { alert("For customer support") }}>
        <Image src={chatIcon} alt='' height={150} width={150} />
      </div>

    </div>
  );



};

export default roadcare;
