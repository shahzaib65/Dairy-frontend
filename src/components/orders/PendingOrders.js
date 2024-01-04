import React from 'react'
import Guava from "../../assets/tomato.png"
const PendingOrders = () => {

    const pendingOrders = [
        {
          id: 1,
          orderName: 'Tomato',
          quantity: '1 kg',
          price: 'Rs.50 per kg',
          orderStatus: 'pending',
          address: '16 Rr 2, Ketchikan, Alaska 99901, USA',
        },
        {
            id: 2,
            orderName: 'Tomato',
            quantity: '1 kg',
            price: 'Rs.50 per kg',
            orderStatus: 'pending',
            address: '16 Rr 2, Ketchikan, Alaska 99901, USA',
          },
          {
            id: 3,
            orderName: 'Tomato',
            quantity: '1 kg',
            price: 'Rs.50 per kg',
            orderStatus: 'pending',
            address: '16 Rr 2, Ketchikan, Alaska 99901, USA',
          }
      ]



  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {pendingOrders.map((order) => (
        <div key={order.id} className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md border border-black bg-white lg:aspect-none lg:h-auto">

          <div className=' flex flex-col justify-center items-center my-4'>
                <img
                    src={Guava}
                    alt=''
                    className=" h-40 items-center object-cover px-8  lg:h-40 lg:w-full lg:items-center lg:mx-4"
                  />
                  <p className=' text-black font-bold font-sans text-lg'>{order.orderName}</p>
                </div>

    <div className=' flex flex-col'>
    <div className=' flex flex-row mx-3'>
    <p className=' font-bold font-sans text-[13px]'>Quantity:</p>
    <p className=' font-normal font-sans text-[13px] mx-2'>{order.quantity}</p>
    </div>

    <div className=' flex flex-row mx-3 my-0'>
    <p className=' font-bold font-sans text-[13px]'>Order Status:</p>
    <p className=' font-normal font-sans text-[13px] mx-2'>{order.orderStatus}</p>
    </div>



    <div className=' flex flex-row mx-3 my-0'>
    <p className=' font-bold font-sans text-[13px]'>Order Price:</p>
    <p className=' font-normal font-sans text-[13px] mx-2'>{order.price}</p>
    </div>

    <div className=' flex flex-row mx-3 my-0'>
    <p className=' font-bold font-sans text-[13px]'>Address:</p>
    <p className=' font-normal font-sans text-[13px] mx-2'>{order.address}</p>
    </div>

    <div className=' flex justify-between mt-3 h-10'>
    <p className=' font-normal  font-sans text-[13px] px-8 pt-3 bg-[#FEC01F]'>Delete</p>
    <p className=' font-normal font-sans text-[13px] px-8 pt-3  bg-[#FEC01F]'>Edit status</p>
    </div>

    </div>
      
           
          </div>
         
        </div>
      ))}
    </div>
  )
}

export default PendingOrders
