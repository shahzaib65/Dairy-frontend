import React,{useState} from 'react'
import MilkModal from './milkModal';
import Guava from "../../assets/milk.png"
const Milk = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
        console.log(isModalOpen)
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };

      const milk = [
        {
          id: 1,
          name: 'Cow milk',
          price: 'Rs.50 per kg',
          imageSrc: 'https://i.pravatar.cc/300',
          imageAlt: "Front of men's Basic Tee in black.",
          discount: 'Rs.10 per kg',
          stock: "100 kg"
        },
        {
          id: 2,
          name: 'Cow milk',
          price: 'Rs.50 per kg',
          imageSrc: 'https://i.pravatar.cc/300',
          imageAlt: "Front of men's Basic Tee in black.",
          discount: 'Rs.10 per kg',
          stock: "100 kg"
        },
        {
          id: 3,
          name: 'Cow milk',
          price: 'Rs.50 per kg',
          imageSrc: 'https://i.pravatar.cc/300',
          imageAlt: "Front of men's Basic Tee in black.",
          discount: 'Rs.10 per kg',
          stock: "100 kg"
        },
       
      ]
      


  return (
    <div className="w-full h-full">
    <div className=" w-full flex justify-end">
    <button className="bg-black rounded-md text-white text-sm px-5 h-8 items-center m-5" onClick={openModal}>Add Milk</button>
    </div>
    <MilkModal isOpen={isModalOpen} onRequestClose={closeModal} />
    
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {milk.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md border border-black bg-white lg:aspect-none lg:h-auto">

                <div className=' flex flex-col justify-center items-center my-4'>
                <img
                    src={Guava}
                    alt={product.imageAlt}
                    className=" h-40 items-center object-cover px-8  lg:h-40 lg:w-full lg:items-center lg:mx-4"
                  />
                  <p className=' text-black font-bold font-sans text-lg'>{product.name}</p>
                </div>

          <div className=' flex flex-col'>
          <div className=' flex flex-row mx-3'>
          <p className=' font-bold font-sans text-[13px]'>Price:</p>
          <p className=' font-normal font-sans text-[13px] mx-2'>{product.price}</p>
          </div>


          <div className=' flex flex-row mx-3 my-2'>
          <p className=' font-bold font-sans text-[13px]'>Discount:</p>
          <p className=' font-normal font-sans text-[13px] mx-2'>{product.discount}</p>
          </div>

          <div className=' flex flex-row mx-3 my-0'>
          <p className=' font-bold font-sans text-[13px]'>Stock:</p>
          <p className=' font-normal font-sans text-[13px] mx-2'>{product.stock}</p>
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

export default Milk





