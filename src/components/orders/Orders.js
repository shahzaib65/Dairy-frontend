import React from 'react'
import PendingOrders from './PendingOrders'

const Orders = () => {

    const orders = [
        {
          id: 1,
          name: 'Pending',
          number: '60',
          bg: '#67A5FE'
         
        },
        {
            id: 2,
            name: 'Confirmed',
            number: '4',
          },
          {
            id: 3,
            name: 'Delivered',
            number: '66',
            
          }
    
    
      ]



  return (
    <div className='w-full h-full'>
     <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
<div className="mt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
{
    orders.map((e)=>(
        <div className=' bg-black rounded-md h-28 flex flex-col' key={e.id}>
  <div className=' text-white font-sans font-semibold mx-4 my-4'>
   <p>{e.name}</p>
  </div>
  <div className=' flex justify-end'>
<p className=' text-white mx-4 mt-5 font-bold font-sans text-lg'>{e.number}</p>
  </div>
        </div>
    ))
}
</div>

 <div className=' my-2'>
    <PendingOrders/>
 </div>


     </div>
    </div>
  )
}

export default Orders
