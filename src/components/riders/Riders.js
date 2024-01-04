import React,{useEffect, useState} from 'react'
import RiderModal from './riderModal'
import axios from 'axios';

const Riders = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const[rider,setRider]= useState([])
    const openModal = () => {
        setModalOpen(true);
        console.log(isModalOpen)
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };

      useEffect(()=>{
  getRiders()
      },[])

  
      const getRiders =()=>{
        axios.get("https://dairy-backend-production.up.railway.app/api/rider/fetch")
        .then(response => {
         setRider(response.data.riders)
         console.log(response.data.riders);
     })
     .catch(error => {
         console.log(error);
     });
      }
   
  return (
    <div className="w-full h-full">
    <div className=" w-full flex justify-end">
    <button className="bg-black rounded-md text-white text-sm px-5 h-8 items-center m-5" onClick={openModal}>Add Riders</button>
    </div>
    <RiderModal isOpen={isModalOpen} onRequestClose={closeModal} />
    
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {rider.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md border border-black bg-white lg:aspect-none lg:h-auto">

                <div className=' flex flex-col justify-center items-center my-4'>
                <img
                    src={product.rider_image_url}
                    alt=""
                    className="h-20 w-20 items-center object-cover rounded-full border border-black lg:h-20 lg:w-20 lg:items-center"
                  />
                  <p className=' text-black font-bold font-sans text-lg'>{product.name}</p>
                </div>

          <div className=' flex flex-col'>
          <div className=' flex flex-row mx-3'>
          <p className=' font-bold font-sans text-[13px]'>Phone number:</p>
          <p className=' font-normal font-sans text-[13px] mx-2'>{product.rider_phone}</p>
          </div>


          <div className=' flex flex-row mx-3 my-2'>
          <p className=' font-bold font-sans text-[13px]'>Adhar card number:</p>
          <p className=' font-normal font-sans text-[13px] mx-2'>{product.adhar_no}</p>
          </div>

          <div className=' flex flex-row mx-3 my-0'>
          <p className=' font-bold font-sans text-[13px]'>Address:</p>
          <p className=' font-normal font-sans text-[13px] mx-2 line-clamp-1'>{product.address}</p>
          </div>

          <div className=' flex justify-between mt-3 h-10'>
          <p className=' font-normal  font-sans text-[13px] px-8 pt-3 bg-[#FEC01F]'>Delete</p>
          <p className=' font-normal font-sans text-[13px] px-8 pt-3  bg-[#FEC01F]'>Edit</p>
          </div>

          </div>  
           </div>
           </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Riders
