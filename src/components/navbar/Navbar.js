import React,{useState} from 'react'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
  
const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (index) => {
    setSelectedItem(index);
  }
    
  return (
    <Disclosure as="nav" className=" bg-[#FEC01F]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* Logo */}
                <div className="flex flex-shrink-0 items-center">
                <Link to="">
                <p className=' text-black font-semibold font-sans text-lg'>The DairyWala</p>
                {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  /> */}
                </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className=" hidden sm:ml-6 sm:block">
                  <div className=" flex space-x-4">
                  <ul className=" flex-row flex space-x-5">
                  <li>
          <Link to="/users">
          <Disclosure.Button
      className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
        selectedItem === 0
          ? "bg-black text-white"
          : "text-black hover:bg-gray-700 hover:text-white"
      }`}
      onClick={() => handleItemClick(0)}>
      App users
    </Disclosure.Button>
          </Link>
        </li>

        <li>
          <Link to="/delivery">
          <Disclosure.Button
      className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
        selectedItem === 7
          ? "bg-black text-white"
          : "text-black hover:bg-gray-700 hover:text-white"
      }`}
      onClick={() => handleItemClick(7)}>
      Delivery zones
    </Disclosure.Button>
          </Link>
        </li>

        <li>
          <Link to="/promotion">
          <Disclosure.Button
      className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
        selectedItem === 0
          ? "bg-black text-white"
          : "text-black hover:bg-gray-700 hover:text-white"
      }`}
      onClick={() => handleItemClick(6)}>
      Promotional Banner
    </Disclosure.Button>
          </Link>
        </li>

        
        <li>
          <Link to="/category">
          <Disclosure.Button
      className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
        selectedItem === 2
          ? "bg-black text-white"
          : "text-black hover:bg-gray-700 hover:text-white"
      }`}
      onClick={() => handleItemClick(2)}>
      Categories
    </Disclosure.Button>
          </Link>
        </li>
      
        <li>
          <Link to="/rider">
          <Disclosure.Button
      className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
        selectedItem === 4
          ? "bg-black text-white"
          : "text-black hover:bg-gray-700 hover:text-white"
      }`}
      onClick={() => handleItemClick(4)}>
      Riders
    </Disclosure.Button>
          </Link>
        </li>
        <li>
          <Link to="/orders">
          <Disclosure.Button
      className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
        selectedItem === 5
          ? "bg-black text-white"
          : "text-black hover:bg-gray-700 hover:text-white"
      }`}
      onClick={() => handleItemClick(5)}>
      Orders
    </Disclosure.Button>
          </Link>
        </li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
            <ul className=" flex-col flex space-y-3">
                    <li>
                   <Link to="/">
                   <Disclosure.Button
                  className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                    selectedItem === 0
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => handleItemClick(0)}>
                  Sign In
                </Disclosure.Button>
                   </Link>
                    </li>
                    <li>
                     <Link to="/signup">
                     <Disclosure.Button
                  className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                    selectedItem === 1
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => handleItemClick(1)}>
                  Sign Up
                </Disclosure.Button>
                     </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                      <Disclosure.Button
                  className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                    selectedItem === 2
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => handleItemClick(2)}>
                  Contact Us
                </Disclosure.Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq">
                      <Disclosure.Button
                  className={`cursor-pointer block w-full rounded-md px-3 py-2 text-sm font-medium ${
                    selectedItem === 3
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  onClick={() => handleItemClick(3)}>
                  FAQS
                </Disclosure.Button>
                      </Link>
                    </li>
                  </ul>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
   
  
    
}

export default Navbar
