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
import Link from 'next/link';

const drm2 = () => {

  return (
    <div className="drm2 flex items-center justify-center h-screen w-screen bg-[#fbfbff] overflow-clip bg-gradient-to-br from-[#5252f13a] from-10% via-[#ffc38b5e] via-30% to-[#5252f13a] to-90% ">
      <Link href={"/mobile"} className='text-black border px-5 py-3 m-5 h-14 bg-slate-300' > Dr. Mobile </Link>
      <Link href={"/roadcare"} className='text-black border px-5 py-3 m-5 h-14 bg-slate-300' > Roadcare </Link>

    </div>
  );



};

export default drm2;
