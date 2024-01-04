import React,{useState} from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from "axios";
export default function PromotionModal({ isOpen, onRequestClose }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const [selectedFile, setSelectedFile] = useState(null);
      const [error, setError] = useState("");
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
      <form
      noValidate
      onSubmit={handleSubmit(async(res)=>{
        console.log(res)
        const data = new FormData();
       data.append("image",selectedFile);
       data.append("promotion_title",res.title);
       data.append("start_date",res.start);
       data.append("end_date", res.end);
       data.append("description",res.description);
   
       
     const config = {     
    headers: { 'content-type': 'multipart/form-data' }
       }

       axios.post("https://dairy-backend-production.up.railway.app/api/promotion/upload",data, config)
    .then(response => {
        console.log(response);
        reset();
        alert("Promotion added");
        
    })
    .catch(error => {
        console.log(error);
        setError(error)
    });
      })}
      >
        <div className=" flex bg-white justify-end">
          <p
            className=" w-6 h-6 text-black items-end px-1.5 cursor-pointer rounded-full border border-black"
            onClick={onRequestClose}
          >X</p>
        </div>
     
        <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-black">
              Promotion Title
            </label>
            <div className="mt-0">
              <input
                type="text"
                name="name"
                {...register("title", {
                    required: "title is required"
                  })}
                className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.title && (
                  <p className="text-start text-red-500">{errors.title.message}</p>
                )}
            </div>
          </div>


          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 mt-2 text-black">
              Promotion Start Date
            </label>
            <div className="mt-0">
              <input
                type="text"
                name="number"
                {...register("start", {
                    required: "start date is required"
                  })}
                className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.start && (
                  <p className="text-start text-red-500">{errors.start.message}</p>
                )}
            </div>
          </div>
     
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 mt-2 text-black">
              Promotion end date
            </label>
            <div className="mt-0">
              <input
                type="text"
                name="end-date"
                {...register("end", {
                    required: "end date is required"
                  })}
                className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.end && (
                  <p className="text-start text-red-500">{errors.end.message}</p>
                )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 mt-2 text-black">
              Promotion description
            </label>
            <div className="mt-0">
              <input
                type="text"
                name="address"
                {...register("description", {
                    required: "promotion description is required"
                  })}
                className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.description && (
                  <p className="text-start text-red-500">{errors.description.message}</p>
                )}
            </div>
          </div>

          <label htmlFor="email" className="block text-sm font-semibold leading-6 mt-2 text-black">
              Promotion Picture
            </label>

          <div className=" w-full mt-2">  
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full rounded-md border-0 px-1 py-0 text-black bg-white shadow-sm   sm:text-sm sm:leading-6"
            />
          </div>

          {error && (
                <p className="text-red-500">{error || error.message}</p>
              )}
          <div className=' flex justify-center bg-[#FEC01F] mx-auto cursor-pointer  h-10 rounded-md mt-5'>
          <button type="submit" className=' font-normal mt-0 font-sans text-[13px]'>Save</button>
          
          </div>

        
      </form>
    </Modal>
  );
}
