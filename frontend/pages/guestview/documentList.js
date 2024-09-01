import { DocumentText, HambergerMenu } from "iconsax-react";

const DocumentList = ({ documents }) => {
  return (
    <div className="flex flex-col gap-5">
      {documents?.map((doc, index) => {
        return (
          <div key={index} className="border-[0.5px] border-lightGray rounded-xl p-4 w-full flex justify-between">
            <div>
              <div className="font-medium flex gap-x-2 items-center">
                <DocumentText size={30} />
                <span>{doc?.attachment}</span>
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className="flex items-center gap-x-1 border-[1px] p-2 border-lightGray bg-white rounded">
                <HambergerMenu size={20} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DocumentList;
