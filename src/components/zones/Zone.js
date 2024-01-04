import React,{useState} from 'react'
import ZoneModal from './zoneModal'
const Zone = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
        console.log(isModalOpen)
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };

      const zones = [
        {
          id: 1,
          province: 'Province name',
          city: 'city name',
          imageSrc: 'https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_2240,c_limit/GoogleMapTA.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          area: 'area name'
        }
      ]
      


  return (
    <div className=' w-full h-full'>
    <div className=" w-full flex justify-end">
    <button className="bg-black rounded-md text-white text-sm px-5 h-8 items-center m-5" onClick={openModal}>Add Zones</button>
    </div>
    <ZoneModal isOpen={isModalOpen} onRequestClose={closeModal} />

    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {zones.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md border border-black bg-white lg:aspect-none lg:h-auto">

                <div className=' flex flex-col justify-center items-center my-0'>
                <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className=" h-40 items-center object-cover px-0  lg:h-40 lg:w-full lg:items-center lg:mx-4"
                  />
                  <p className=' text-black font-bold font-sans text-lg'>{product.city}</p>
                </div>

          <div className=' flex flex-col'>
          <div className=' flex flex-row mx-3'>
          <p className=' font-bold font-sans text-[13px]'>Province:</p>
          <p className=' font-normal font-sans text-[13px] mx-2'>{product.province}</p>
          </div>


          <div className=' flex flex-row mx-3 my-2'>
          <p className=' font-bold font-sans text-[13px]'>Area:</p>
          <p className=' font-normal font-sans text-[13px] mx-2'>{product.area}</p>
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

export default Zone
