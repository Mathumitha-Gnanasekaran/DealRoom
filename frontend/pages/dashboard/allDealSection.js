import CreateDealModal from "@/components/createDealModal";
import axios from "axios";
import { Eye, HambergerMenu, Link21, SearchNormal1 } from "iconsax-react";
import { useEffect, useState } from "react";

const AllDealSection = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [deals, setDeals] = useState([]);

  console.log("deals: ", deals);

  const handleSetMessage = (msg, isError) => {
    setMessage(msg);
    setIsError(isError);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

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
  }, [message]);

  return (
    <div className="mt-10 w-full flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex gap-x-1 items-center">
            <div className="text-[#010025] text-xl font-medium">All Deals</div>
            <div className="flex gap-x-1 bg-[#EEF0FE] w-fit px-2 h-[18px] items-center rounded-[999px]">
              <div className="w-1.5 h-1.5 rounded-full bg-sidebarBlue" />
              <div className="text-sidebarBlue text-xs font-medium ">
                3 Deals
              </div>
            </div>
          </div>
          <div className="text-[#343354]">
            Manage all your deals in one place.
          </div>
        </div>
        <div className="flex gap-2.5">
          <div className="relative">
            <input
              className="w-[247px] h-11 border-[1px] border-sidebarBlue rounded bg-white pl-10 pr-5 placeholder:text-black"
              placeholder="Search"
            />
            <SearchNormal1
              size={20}
              color="#000000"
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
            />
          </div>
          <button className="w-[168px] h-11 rounded p-3 border-[1px] border-sidebarBlue text-sm font-medium">
            Upload Documents
          </button>
          <button
            type="button"
            onClick={() => setCreateModalOpen(true)}
            className="w-[117px] h-11 rounded p-3 border-[1px] text-white bg-blue2 text-sm font-medium"
          >
            Create A Deal
          </button>
        </div>
      </div>
      <div className="mt-10 flex flex-col">
        <div className="flex flex-col gap-4">
          {deals?.map((deal, index) => {
            return (
              <div className="border-[0.5px] border-lightGray rounded-xl p-4 w-full flex justify-between">
                <div>
                  <div className="font-medium">{deal?.dealName}</div>
                  <div className="text-xs flex gap-x-1 items-center">
                    <span>
                      {new Date(deal.createdDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                      })}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span>2 Links</span>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <div className="flex text-sm items-center gap-x-1 border-[1px] px-3 py-2 border-lightGray bg-[#E8E8E8] rounded">
                    <Eye size={20} />
                    <span>19 views</span>
                  </div>
                  <div className="flex items-center gap-x-1 border-[1px] px-3 py-2 border-lightGray bg-white rounded">
                    <Link21 size={20} />
                  </div>
                  <div className="flex items-center gap-x-1 border-[1px] px-3 py-2 border-lightGray bg-white rounded">
                    <HambergerMenu size={20} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <CreateDealModal
        isOpen={isCreateModalOpen}
        onClose={() => setCreateModalOpen(false)}
        setMessage={handleSetMessage}
      />
      {message && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg text-white ${
            isError ? "bg-red-600" : "bg-green-600"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default AllDealSection;
