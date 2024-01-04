import React from 'react'

const AppUsers = () => {

const products = [
    {
      id: 1,
      name: 'John doe',
      email: 'test@gmail.com',
      imageSrc: 'https://i.pravatar.cc/300',
      imageAlt: "Front of men's Basic Tee in black.",
      phone: '+918839722456',
      address: '16 Rr 2, Ketchikan, Alaska 99901, USA',
      live: 'India',
      'online': "yes"
    },
    {
        id: 2,
        name: 'John doe',
        email: 'test@gmail.com',
        imageSrc: 'https://i.pravatar.cc/300',
        imageAlt: "Front of men's Basic Tee in black.",
        phone: '+918839722456',
        address: '16 Rr 2, Ketchikan, Alaska 99901, USA',
        live: 'India',
        'online': "no"
      },
      {
        id: 3,
        name: 'John doe',
        email: 'test@gmail.com',
        imageSrc: 'https://i.pravatar.cc/300',
        imageAlt: "Front of men's Basic Tee in black.",
        phone: '+918839722456',
        address: '16 Rr 2, Ketchikan, Alaska 99901, USA',
        live: 'India',
        'online': "no"
      },
      {
        id: 4,
        name: 'John doe',
        email: 'test@gmail.com',
        imageSrc: 'https://i.pravatar.cc/300',
        imageAlt: "Front of men's Basic Tee in black.",
        phone: '+918839722456',
        address: '16 Rr 2, Ketchikan, Alaska 99901, USA',
        live: 'India',
        'online': "no"
      },
      {
        id: 3,
        name: 'John doe',
        email: 'test@gmail.com',
        imageSrc: 'https://i.pravatar.cc/300',
        imageAlt: "Front of men's Basic Tee in black.",
        phone: '+918839722456',
        address: '16 Rr 2, Ketchikan, Alaska 99901, USA',
        live: 'India',
        'online': "no"
      },
      {
        id: 5,
        name: 'John doe',
        email: 'test@gmail.com',
        imageSrc: 'https://i.pravatar.cc/300',
        imageAlt: "Front of men's Basic Tee in black.",
        phone: '+918839722456',
        address: '16 Rr 2, Ketchikan, Alaska 99901, USA',
        live: 'India',
        'online': "yes"
      },


  ]
  

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md border border-black bg-white lg:aspect-none lg:h-80">

                <div className=' flex flex-col justify-center items-center my-4'>
                <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-20 w-20 items-center object-cover rounded-full border border-black lg:h-20 lg:w-20 lg:items-center"
                  />
                  <p className=' text-black font-bold font-sans text-lg'>{product.name}</p>
                </div>

          <div className=' flex flex-col'>
          <div className=' flex flex-row mx-3'>
          <p className=' font-bold font-sans text-[13px]'>Phone number:</p>
          <p className=' font-normal font-sans text-[13px] mx-2'>{product.phone}</p>
          </div>


          <div className=' flex flex-row mx-3 my-2'>
          <p className=' font-bold font-sans text-[13px]'>Email address:</p>
          <p className=' font-normal font-sans text-[13px] mx-2'>{product.email}</p>
          </div>

          <div className=' flex flex-row mx-3 my-0'>
          <p className=' font-bold font-sans text-[13px]'>Address:</p>
          <p className=' font-normal font-sans text-[13px] mx-2'>{product.address}</p>
          </div>

          <div className=' flex flex-row mx-3 my-0'>
          <p className=' font-bold font-sans text-[13px]'>Live Address:</p>
          <p className=' font-normal font-sans text-[13px] mx-2'>{product.live}</p>
          </div>

          <div className=' flex justify-center bg-[#FEC01F] mx-3 h-10 rounded-md mt-5'>
          <p className=' font-normal mt-2 font-sans text-[13px]'>Delete user</p>
          
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

export default AppUsers
