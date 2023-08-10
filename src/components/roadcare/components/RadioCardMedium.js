import Image from "next/image";
import Checkbox from "/public/assets/drm2-checkbox.svg";
import Link from "next/link";

const RadioCardMedium = ({icon, id, text , selected , onSelect}) => {
  const selectedClass = selected ? "border-[#5253f1] border-[1px]" : "border-[1px]";

  const handleClick = () => {
    if (!selected) {
      onSelect(id);
    }
  }

  return (
    <label onClick={handleClick} className={`device-option-card 2xl:h-[9rem] 2xl:w-[12rem] px-[2.25rem] md:px-[3.25rem] pt-[2rem] option-card flex flex-col items-center ${selectedClass} flex-grow rounded-[10px] pt-8 relative border-[1px] hover:border-[#5253f1] hover:border-[1px]`}>
      <div className="checkbox w-5 h-5 border-[1px] rounded-full absolute top-2 right-2 ">
         {selected && <Image src={Checkbox} alt='ico'/>}
      </div>
      <div className="relative h-[3rem] w-[6rem] mb-3">{icon && <Image src={icon} layout='fill' objectFit="contain" objectPosition='center'/>}</div>
      <div className="pb-3 pt-2 font-semibold">{text}</div>
    </label>
  );
};

export default RadioCardMedium;
