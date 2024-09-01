import Layout from "@/layout/Layout";
import { HambergerMenu } from "iconsax-react";
import React from "react";
import hand from "../../assets/images/hand.png";
import sun from "../../assets/images/sun.png";
import Image from "next/image";
import CardSection from "./cardSection";
import ConnectHubSpot from "./connectHubspot";
import AllDealSection from "./allDealSection";

const index = () => {
  return (
    <Layout>
      <div className="w-full h-full overflow-y-auto">
        <div className="flex flex-wrap gap-x-5 items-center">
          <Image src={hand} alt="hand" className="w-8 h-8" />
          <div className="text-4xl font-medium">Hi Mathumitha,</div>
        </div>
        <div className="text-base font-medium flex items-center gap-x-2 mt-2">
          Good morning, it’s a brand new day{" "}
          <Image src={sun} alt="hand" className="w-[20px] h-[20px]" />
        </div>
        <CardSection />
        <ConnectHubSpot />
        <AllDealSection />
      </div>
    </Layout>
  );
};

export default index;
