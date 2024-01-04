import React,{useState} from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
export default function MilkModal({ isOpen, onRequestClose }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const [selectedFile, setSelectedFile] = useState(null);

      const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
      };

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
              Milk Type
            </label>
            <div className="mt-0">
              <input
                type="text"
                name="name"
                {...register("name", {
                    required: "name is required"
                  })}
                className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.name && (
                  <p className="text-start text-red-500">{errors.name.message}</p>
                )}
            </div>
          </div>


          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 mt-2 text-black">
              Milk Price
            </label>
            <div className="mt-0">
              <input
                type="number"
                name="price"
                {...register("price", {
                    required: "price is required"
                  })}
                className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.price && (
                  <p className="text-start text-red-500">{errors.price.message}</p>
                )}
            </div>
          </div>
     
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 mt-2 text-black">
              Milk Discount
            </label>
            <div className="mt-0">
              <input
                type="number"
                name="price"
                {...register("discount", {
                    required: "discount is required"
                  })}
                className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.discount && (
                  <p className="text-start text-red-500">{errors.discount.message}</p>
                )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 mt-2 text-black">
              Milk Stock
            </label>
            <div className="mt-0">
              <input
                type="number"
                name="stock"
                {...register("stock", {
                    required: "stock is required"
                  })}
                className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.stock && (
                  <p className="text-start text-red-500">{errors.stock.message}</p>
                )}
            </div>
          </div>

          <label htmlFor="email" className="block text-sm font-semibold leading-6 mt-2 text-black">
              Milk Picture
            </label>

          <div className=" w-full mt-2">  
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full rounded-md border-0 px-1 py-0 text-black bg-white shadow-sm   sm:text-sm sm:leading-6"
            />
          </div>

          <div className=' flex justify-center bg-[#FEC01F] mx-auto cursor-pointer  h-10 rounded-md mt-5'>
          <p className=' font-normal mt-2 font-sans text-[13px]'>Save</p>
          
          </div>

        
      </>
    </Modal>
  );
}
