import Image from "next/image"
import SpeakerIcon from "/public/assets/drm2-speaker.svg"
import EditIcon from "/public/assets/drm2-edit.svg"
import Link from "next/link";

const ProblemCategoryBar = ({icon , title , desc}) => {
  const iconSrc = icon ? icon : SpeakerIcon
  const titleSrc = title ? title : 'Category'
  const descSrc = desc ? desc : 'Audio'

  return (
   <div className="flex w-full gap-4 border-[1px] mt-2 px-4 py-2 md:py-4 rounded-[10px] lg:max-h-[5rem] items-center ">
   <div className="flex items-center">
   <Image src={iconSrc} alt='icon'/>
   </div>
   <div className="flex-grow">
     <p className="text-[0.8rem] font-bold md:text-[1rem]">{titleSrc}</p>
     <p className="text-[0.7rem] md:text-[0.9rem] text-[#9a9a9a]">{descSrc}</p>
   </div>
   <div className="p-2 flex items-center"><Image src={EditIcon} alt='icon'/></div>
 </div>
   )
}

export default ProblemCategoryBar