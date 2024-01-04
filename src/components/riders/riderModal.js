import React,{useState} from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from "axios"
export default function RiderModal({ isOpen, onRequestClose }) {
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
        console.log(selectedFile)
        const data = new FormData();
       data.append("riderImage",selectedFile);
       data.append("rider_name",res.name);
       data.append("rider_phone",res.number);
       data.append("adhar_no", res.adhar);
       data.append("address",res.address);
   
       
     const config = {     
    headers: { 'content-type': 'multipart/form-data' }
       }

    console.log(data)
       axios.post("https://dairy-backend-production.up.railway.app/api/rider/upload",data, config)
    .then(response => {
        console.log(response);
        reset();
        alert("Rider registered");
        
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
              Rider Name
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
              Rider Phone Number
            </label>
            <div className="mt-0">
              <input
                type="text"
                name="number"
                {...register("number", {
                    required: "number is required"
                  })}
                className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.number && (
                  <p className="text-start text-red-500">{errors.number.message}</p>
                )}
            </div>
          </div>
     
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 mt-2 text-black">
              Rider Adhar card
            </label>
            <div className="mt-0">
              <input
                type="text"
                name="adhar"
                {...register("adhar", {
                    required: "adhar is required"
                  })}
                className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.adhar && (
                  <p className="text-start text-red-500">{errors.adhar.message}</p>
                )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 mt-2 text-black">
              Rider Address
            </label>
            <div className="mt-0">
              <input
                type="text"
                name="address"
                {...register("address", {
                    required: "address is required"
                  })}
                className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.address && (
                  <p className="text-start text-red-500">{errors.address.message}</p>
                )}
            </div>
          </div>

          <label htmlFor="email" className="block text-sm font-semibold leading-6 mt-2 text-black">
              Rider Picture
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
