import React,{useState,useEffect} from 'react'
import PromotionModal from "./PromotionModal"
import axios from 'axios';

 const Promotion = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [promotion,setPromotion] = useState([])
    const openModal = () => {
        setModalOpen(true);
        console.log(isModalOpen)
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };

     

      useEffect(()=>{
        getPromotion()
            },[])
      
        
            const getPromotion =()=>{
              axios.get("https://dairy-backend-production.up.railway.app/api/promotion/fetch")
              .then(response => {
               setPromotion(response.data.promotions)
               console.log(response.data.promotions);
           })
           .catch(error => {
               console.log(error);
           });
            }
      


  return (
    <div className=' w-full h-full'>
    <div className=" w-full flex justify-end">
    <button className="bg-black rounded-md text-white text-sm px-5 h-8 items-center m-5" onClick={openModal}>Add Promotions</button>
    </div>
    <PromotionModal isOpen={isModalOpen} onRequestClose={closeModal} />

    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {promotion.map((product) => (
              <div key={product._id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md border border-black bg-white lg:aspect-none lg:h-auto">

                <div className=' flex flex-col justify-center items-center my-4'>
                <img
                    src={product.promotion_image_url}
                    alt=""
                    className=" h-40 items-center object-cover px-8  lg:h-40 lg:w-full lg:items-center lg:mx-4"
                  />
                  <p className=' text-black font-bold font-sans text-lg'>{product.title}</p>
                </div>

          <div className=' flex flex-col'>
          <div className=' flex flex-row mx-3'>
          <p className=' font-bold font-sans text-[13px]'>Date:</p>
          <p className=' font-normal font-sans text-[13px] mx-2'>{product.start_date}-{product.end_date}</p>
          </div>


          <div className=' flex flex-row mx-3 my-2'>
          <p className=' font-bold font-sans text-[13px]'>Description:</p>
          <p className=' font-normal font-sans text-[13px] mx-2'>{product.description}</p>
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
export default Promotion