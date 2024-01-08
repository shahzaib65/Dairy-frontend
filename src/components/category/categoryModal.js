import React,{useState} from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from "axios";
export default function VegetableModal({ isOpen, onRequestClose }) {
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
 const [categoryValue, setCategoryValue] = useState('');
 const [categoryWeight, setCategoryWeight] = useState('');

 
 const handleCategoryChange = (event) => {
   setCategoryValue(event.target.value);
 };

 const handleWeightChange = (event) => {
  setCategoryWeight(event.target.value);
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
        data.append("title",categoryValue);
        data.append("name",res.name)
        data.append("weight",categoryWeight);
        data.append("discount_percentage", res.discount);
        data.append("premium_percentage",res.premium);
        data.append("price",res.price);
        data.append("stock",res.stock);
   
       
     const config = {     
    headers: { 'content-type': 'multipart/form-data' }
       }
 
       axios.post("https://dairy-backend-production.up.railway.app/api/category/upload",data, config)
    .then(response => {
        console.log(response);
        reset();
        alert("Category added");
        // eslint-disable-next-line no-unused-expressions
        onRequestClose
        
    })
    .catch(error => {
        console.log(error);
     //   setError(error)
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
              Category Title
            </label>
            <div>
            <select  className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             value={categoryValue} onChange={handleCategoryChange}>
        <option value="">Select category</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetable">Vegetable</option>
        <option value="Milk">Milk</option>
      </select>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-black mt-2">
              Category Weight options
            </label>
            <div>
            <select  className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             value={categoryWeight} onChange={handleWeightChange}>
        <option value="">Select weight</option>
        <option value="Litre">Litre</option>
        <option value="Piece">Piece</option>
        <option value="Kg">Kg</option>
        
      </select>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 mt-2 text-black">
              Category Name
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
              Category Price
            </label>
            <div className="mt-0">
              <input
                type="text"
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
              Category Discount
            </label>
            <div className="mt-0">
              <input
                type="text"
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
              Premium Discount
            </label>
            <div className="mt-0">
              <input
                type="text"
                name="premium"
                {...register("premium", {
                    required: "premium is required"
                  })}
                className="block w-full rounded-md bg-white border-0 px-2 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {errors.premium && (
                  <p className="text-start text-red-500">{errors.premium.message}</p>
                )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 mt-2 text-black">
              Category Stock
            </label>
            <div className="mt-0">
              <input
                type="text"
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
              Category Picture
            </label>

          <div className=" w-full mt-2">  
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full rounded-md border-0 px-1 py-0 text-black bg-white shadow-sm   sm:text-sm sm:leading-6"
            />
          </div>

          <div className=' flex justify-center bg-[#FEC01F] mx-auto cursor-pointer  h-10 rounded-md mt-5'>
          <button type="submit" className=' font-normal mt-0 font-sans text-[13px]'>Save</button>
          
          </div>

        
      </form>
    </Modal>
  );
}
