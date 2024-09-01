import { User } from "iconsax-react";
import React, { useEffect, useState } from "react";
import DocumentList from "./documentList";
import axios from "axios";

const index = () => {
  const [message, setMessage] = useState("");
  const [deals, setDeals] = useState([]);

  const fetchDeals = async () => {
    try {
      const response = await axios.get("http://localhost:8080/deal");
      setDeals(response.data.data);
    } catch (error) {
      console.error("Error fetching deals:", error);
      setMessage("Failed to fetch deals.");
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="bg-white border-[1px] border-lightGray p-3 w-full flex justify-between">
        <div className="font-bold text-2xl">DealRoom </div>
      </div>
      <div className="p-16 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex gap-x-1 items-center">
              <div className="text-[#010025] text-xl font-medium">
                All Documents
              </div>
              <div className="flex gap-x-1 bg-[#EEF0FE] w-fit px-2 h-[18px] items-center rounded-[999px]">
                <div className="w-1.5 h-1.5 rounded-full bg-sidebarBlue" />
                <div className="text-sidebarBlue text-xs font-medium ">
                  2 Documents
                </div>
              </div>
            </div>
            <div className="text-[#343354]">
              All documents attached to all deals
            </div>
          </div>
          <button
            type="button"
            onClick={() => setCreateModalOpen(true)}
            className="px-3 h-11 rounded p-3 border-[1px] text-white bg-blue2 text-sm font-bold flex items-center gap-x-1"
          >
            <User size={20} color="white" />
            <span>Chat with SDR</span>
          </button>
        </div>
        <DocumentList documents={deals}/>
      </div>
    </div>
  );
};

export default index;
