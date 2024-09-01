import { AttachSquare } from "iconsax-react";
import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

const CreateDealModal = ({ isOpen, onClose, setMessage }) => {
  if (!isOpen) return null;

  const formik = useFormik({
    initialValues: {
      dealName: "",
      description: "",
      attachment: null,
    },
    onSubmit: async (values, { resetForm }) => {
      console.log("values: ", values);
      const formData = new FormData();
      formData.append("dealName", values.dealName);
      formData.append("description", values.description);
      formData.append("attachment", values.attachment);

      try {
        const response = await axios.post(
          "http://localhost:8080/deal",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setMessage("Deal created successfully!", false);
        resetForm();
        onClose();
      } catch (error) {
        console.error("Error creating deal:", error);
        setMessage("Failed to create deal.", true);
      }
    },
  });

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-[9999]">
        <form onSubmit={formik.handleSubmit} className="">
          <div className="bg-white flex flex-col w-[600px] rounded-lg shadow-lg justify-center items-center">
            <div className="bg-[#EEF0FE] border-[1px] border-lightGray p-3 rounded-t-lg w-full flex justify-between">
              <div className="font-medium">Create Deal </div>
              <button type="button" onClick={onClose} className="w-5 h-5">
                X
              </button>
            </div>
            <div className="bg-white w-full h-full p-4">
              <input
                id="dealName"
                name="dealName"
                type="text"
                placeholder="Deal"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dealName}
                className="border-none outline-none focus:ring-0 w-full"
              />
              <textarea
                id="description"
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                placeholder="Add description"
                className="border-none outline-none focus:ring-0 w-full"
                rows={10}
              />
            </div>
            <div className="bg-[#EEF0FE] border-[1px] border-lightGray p-3 rounded-b-lg w-full flex justify-between items-center">
              <div className="flex gap-x-1 items-center">
                <label htmlFor="attachment" className="cursor-pointer">
                  <AttachSquare size={25} />
                </label>
                <input
                  id="attachment"
                  name="attachment"
                  type="file"
                  className="hidden"
                  onChange={(event) =>
                    formik.setFieldValue(
                      "attachment",
                      event.currentTarget.files[0]
                    )
                  }
                />
                <span className="text-xs">
                  {formik.values.attachment
                    ? formik.values.attachment.name
                    : ""}
                </span>
              </div>{" "}
              <div className="flex gap-x-2">
                <div className="flex gap-x-1 items-center">
                  <div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-6 h-3 bg-gray-300 rounded-full peer-checked:bg-blue-600 peer-focus:ring-1 peer-focus:ring-blue-300 transition-all duration-300"></div>
                      <div className="absolute left-0.5 top-0.5 w-2 h-2 bg-white rounded-full peer-checked:translate-x-3 transition-all duration-300"></div>
                    </label>
                  </div>
                  <span className="text-sm">Create Multiple deals</span>
                </div>
                <button
                  type="submit"
                  className="w-[117px] h-11 rounded p-3 border-[1px] text-white bg-blue2 text-sm font-medium"
                >
                  Create Deal
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateDealModal;
