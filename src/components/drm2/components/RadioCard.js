import Image from "next/image";
import Checkbox from "/public/assets/drm2-checkbox.svg";
import Link from "next/link";

const RadioCard = ({icon, text , selected , id , onSelect}) => {
  const selectedClass = selected ? "border-[#5253f1] border-[1px]" : "border-[1px]";

  const handleClick = () => {
    if (!selected) {
      onSelect(id);
    }
  }

  return (
    <label onClick={handleClick} className={`option-card flex flex-col items-center ${selectedClass} hover:border-[#5352f1] transition-all duration-100 ease-in flex-grow rounded-[10px] py-8 relative mt-2`}>
      <div className="w-5 h-5 border-[1px] rounded-full absolute top-2 right-2 hover:border-[#5253f1] hover:border-[1px]">
         {selected && <Image src={Checkbox} alt='ico'/>}
      </div>
      <div className="relative h-[1.5rem] w-[1.5rem] mb-2">{icon && <Image src={icon} layout='fill' objectFit="contain" objectPosition='center'/>}</div>
      <div className="font-semibold" >{text}</div>
    </label>
  );
};

export default RadioCard;
