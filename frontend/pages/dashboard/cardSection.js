import Image from "next/image";
import { FormatSquare } from "iconsax-react";
import pattern1 from "../../assets/images/pattern1.jpeg";
import pattern2 from "../../assets/images/pattern2.jpeg";
import pattern3 from "../../assets/images/pattern3.jpeg";
import pattern4 from "../../assets/images/pattern4.jpeg";

const CardSection = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-10">
      <div className="relative rounded-2xl text-white bg-sidebarBlue w-[271px] h-[113px] p-5">
        <Image
          src={pattern1}
          alt="background pattern"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl opacity-15"
        />
        <div className="relative flex justify-start items-center gap-x-5 z-10">
          <FormatSquare color="#ffffff" variant="Bold" size={30} />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">No of Deal</span>
            <span className="text-4xl font-bold">240</span>
          </div>
        </div>
      </div>
      <div className="relative rounded-2xl text-white bg-darkPurple w-[271px] h-[113px] p-5">
        <Image
          src={pattern2}
          alt="background pattern"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl opacity-15"
        />
        <div className="relative flex justify-start items-center gap-x-5 z-10">
          <FormatSquare color="#ffffff" variant="Bold" size={30} />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Proposal Numbers</span>
            <span className="text-4xl font-bold">240</span>
          </div>
        </div>
      </div>
      <div className="relative rounded-2xl text-white bg-darkGray w-[271px] h-[113px] p-5">
        <Image
          src={pattern3}
          alt="background pattern"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl opacity-20"
        />
        <div className="relative flex justify-start items-center gap-x-5 z-10">
          <FormatSquare color="#ffffff" variant="Bold" size={30} />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Closed Deals</span>
            <span className="text-4xl font-bold">240</span>
          </div>
        </div>
      </div>
      <div className="relative rounded-2xl text-white bg-white w-[271px] h-[113px] p-5 border-[1px] border-lightGray">
        <Image
          src={pattern4}
          alt="background pattern"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl opacity-20"
        />
        <div className="relative flex justify-start items-center gap-x-5 z-10">
          <FormatSquare color="#E800B5" variant="Bold" size={30} />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-black">
              Requests Numbers
            </span>
            <span className="text-4xl font-bold text-lightPink">240</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
