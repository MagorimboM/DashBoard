import React from 'react';
import { Data } from '../database/Data';
import { RiContactsFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import SideBar from '../components/SideBar';



const customer = () => {
  return (
    <main className='flex flex-row  w-screen h-screen bg-gray-200'>
      <div><SideBar /></div>

      <div className='flex flex-col p-4 w-full '>
        <div className='flex m-4 justify-between text-black'>

          <h2>Customers</h2>
          <h2>Welcome Back, Mark</h2>
        </div>
        <div className=' rounded-lg p-4 bg-white text-black grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
        <span>Name</span>
        <span className='sm:text-left text-right'>Email</span>
        <span className='hidden md:grid'>Last Order</span>
        <span className='hidden sm:grid'>Method</span>
      </div>

        <div className='w-full h-full scroll overflow-scroll p-4 border rounded-lg bg-white'>
          <ul>
            {Data.map((customer, id) => (
              <li key={id} className='bg-gray-50 hover:bg-gray-100 transition-color rounded-lg my-3 p-2 grid sm:grid-cols-3 grid-cols-2 md:grid-cols-4 items-center justify-between cursor-pointer'>
                <div className='flex items-center'>
                  <div className='bg-purple-100 p-3 rounded-lg '>
                    <RiContactsFill className='text-purple-800' />
                  </div>
                  <p className='pl-4 text-black'>{customer.name.first + '' + customer.name.last}</p>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>{customer.email} </p>
                <p className=' text-black hidden md:flex '>{customer.date}</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p className='text-black'>{customer.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
            </ul>
          </div>
        </div>
    </main>
  );
};

export default customer