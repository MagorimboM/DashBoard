import React from 'react'; 
import { Data } from '../database/Data'; 
import { FaShoppingBag } from 'react-icons/fa'; 

const RecentOrder = () => {
    return (
        <div className='scroll overflow-scroll w-full lg:h-[70vh] h-[30vh] m-auto p-4 border rounded-lg bg-white'>

            RecentOrder
            <ul>
                {Data.map((order, id) => (
                    <li key={id} className='flex flex-row justify-between items-center rounded-lg my-3 p-2 bg-gray-50 hover:bg-gray-100 cursor-pointer'>
                        <div className='flex flex-row'>
                        <div className='bg-purple-200 p-1 m-auto rounded-md text-purple-800'><FaShoppingBag /></div>
                        <div className='pl-4'>
                            <p className='text-gray-800 font-bold'>${order.total}</p>
                            <p className='text-gray-400 text-sm'>{order.name.first}</p>
                            </div>
                        </div>
                        <div>
                            <p className='md:flex lg:flex hidden right-6 text-sm'>{ order.date}</p>
                        </div>
                    </li>
                    
                ))}
                
        </ul>
        </div>
    ); 
}; 

export default RecentOrder; 