import React,{useState} from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
export default function ZoneModal({ isOpen, onRequestClose }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      className="Modal"
      overlayClassName="Overlay"
    >
      <>
        <div className=" flex bg-white justify-end">
          <p
            className=" w-6 h-6 text-black items-end px-1.5 cursor-pointer rounded-full border border-black"
            onClick={onRequestClose}
          >X</p>
        </div>
     
        <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-black">
              Province
            </label>
            <div className="mt-0">
              <input
                type="text"
                name="name"
                {...register("province", {
                    required: "province is required"
                  })}
                className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.province && (
                  <p className="text-start text-red-500">{errors.province.message}</p>
                )}
            </div>
          </div>


          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 mt-2 text-black">
              City
            </label>
            <div className="mt-0">
              <input
                type="text"
                name="number"
                {...register("city", {
                    required: "city is required"
                  })}
                className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.city && (
                  <p className="text-start text-red-500">{errors.city.message}</p>
                )}
            </div>
          </div>
     
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 mt-2 text-black">
              Area
            </label>
            <div className="mt-0">
              <input
                type="text"
                name="end-date"
                {...register("area", {
                    required: "area is required"
                  })}
                className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.area && (
                  <p className="text-start text-red-500">{errors.area.message}</p>
                )}
            </div>
          </div>

     

          <div className=' flex justify-center bg-[#FEC01F] mx-auto cursor-pointer  h-10 rounded-md mt-5'>
          <p className=' font-normal mt-2 font-sans text-[13px]'>Save</p>
          
          </div>

        
      </>
    </Modal>
  );
}
