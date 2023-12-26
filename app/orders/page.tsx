import React, { useEffect } from 'react';
import { Data } from '../database/Data';
import { HiOutlineShoppingBag } from "react-icons/hi";




const Orders = () => {


    return (
        <main className='flex flex-col p-4 w-screen h-screen bg-gray-200 scroll overflow-scroll'>
            <div className='flex justify-between text-black'>
                <h2>Orders</h2>
                <h2>Welcome, Mark</h2>
            </div>
            <div className='p-4' >
                <div className='w-full h-full m-auto p-4 border rounded-lg bg-white overflow-y-auto '>
                    <div className='text-black my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer '>
                        <span>Order</span>
                        <span>Status</span>
                        <span className='hidden md:grid lg:grid'>Last Order</span>
                        <span className='hidden md:grid lg:grid'>Method</span>
                    </div>
                    <ul>
                        {Data.map((orders, id) => (

                            <li key={id}>
                                <div className='grid grid-cols-2 my-3 p-2 rounded-lg items-center sm:grid-cols-2 bg-gray-50 hover:bg-gray-100 transition-color  text-black md:grid-cols-4 lg:grid-cols-4 justify-between cursor-pointer '>
                                    <div className='flex items-center'>
                                        <div className='bg-purple-100 p-3 m-1 rounded-lg'><HiOutlineShoppingBag className='text-purple-800'/>
                                        </div>
                                        <div className='flex flex-col ml-4'>
                                        <p className='text-gray-800 font-bold'>{orders.name.first}</p> 
                                            <p className='text-gray-600 font-sm'>${orders.total}</p>
                                        </div>
                                    </div>
                                    <p className={
                                        orders.status == `On Hold` ? 'bg-red-100 p-2 rounded-lg mr-20' :
                                        orders.status == `Approved` ? 'bg-green-100 p-2 rounded-lg mr-20' :
                                        orders.status == `Processing` ? 'bg-gray-100 p-2 rounded-lg mr-20' :
                                        orders.status == `Pending` ? 'bg-yellow-100 p-2 roundedn-lg mr-20' : ''
                                    }>{orders.status}</p>
                                    <p className='hidden md:grid lg:grid'>{orders.date}</p>
                                    <p className='hidden md:grid lg:grid'>{orders.method}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </main>
    );
};

export default Orders; 