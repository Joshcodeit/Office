import Image from 'next/image'
import BackHome from "/public/assets/back-home-arrow.svg";
import ProgressBar from "../components/drm2/components/ProgressBar";
import GetStarted from "../components/drm2/components/GetStarted";
import Device from "../components/drm2/components/Device";
import Issues from "../components/drm2/components/Issues";
import Issues2 from "../components/drm2/components/Issues2";
import Details from "../components/drm2/components/Details";
import Summary from "../components/drm2/components/Summary";
import Details2 from "../components/drm2/components/Details2";
import Final from "../components/drm2/components/Final";
import Loading from "../components/drm2/components/Loading";
import SuccessPage from "../components/drm2/components/SuccessPage";
import chatIcon from "/public/assets/chat.png";


import SideBar from "../components/drm2/components/SideBar";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  nextPage,
  previousPage,
  saveFormData,
} from "/src/store/features/formSlice";
import Form from "../components/drm2/components/Form";
import { useEffect } from "react";

const drm2 = () => {
  const { currentPage, formData } = useSelector((state) => state.form);



  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPage === 8) {
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
        return <Loading />
      case 9:
        return <SuccessPage />
      default:
        return <GetStarted />
    }
  }


  return (
    <div className="drm2 flex h-screen w-screen bg-[#fbfbff] overflow-clip bg-gradient-to-br from-[#5252f13a] from-10% via-[#ffc38b5e] via-30% to-[#5252f13a] to-90%">
      <button className="absolute hidden md:flex gap-2 p-2 text-[0.8rem] items-center text-[#7c7c7c] bg-[#f2f2f2] rounded-br-lg">
        <Image src={BackHome} />
        Back home
      </button>
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

export default drm2;
