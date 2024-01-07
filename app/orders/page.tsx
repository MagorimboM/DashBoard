import React, { useEffect } from 'react';
import { Data } from '../database/Data';
import { HiOutlineShoppingBag } from "react-icons/hi";
import SideBar from '../components/SideBar';




const Orders = () => {


    return (
        <main className='flex flex-row  w-screen h-screen bg-gray-200'>
            <div id='sidebar'><SideBar /></div>
            <div className=' flex flex-col p-4 h-full w-full'>
                <div className='flex m-4 justify-between text-black justify-between'>
                    <h2>Orders</h2>
                    <h2>Welcome Back, Mark</h2>
                </div>
                <div className=' flex items-center justify-center justify-between cursor-pointer rounded-lg p-4 text-black bg-white grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2'>
                    <span>Order</span>
                    <span>Status</span>
                    <span className='hidden md:grid lg:grid'>Last Order</span>
                    <span className='hidden md:grid lg:grid'>Method</span>
                </div>
                <div className='w-full h-full scroll overflow-scroll p-4 border rounded-lg bg-white '>
                        <ul>
                            {Data.map((orders, id) => (

                                <li key={id}>
                                    <div className='grid grid-cols-2 my-3 p-2 rounded-lg items-center sm:grid-cols-2 bg-gray-50 hover:bg-gray-100 transition-color  text-black md:grid-cols-4 lg:grid-cols-4 justify-between cursor-pointer '>
                                        <div className='flex items-center'>
                                            <div className='bg-purple-100 p-3 m-1 rounded-lg'><HiOutlineShoppingBag className='text-purple-800' />
                                            </div>
                                            <div className='flex flex-col ml-4'>
                                                <p className='text-gray-800 font-bold'>{orders.name.first}</p>
                                                <p className='text-gray-600 font-sm'>${orders.total}</p>
                                            </div>
                                        </div>
                                        <p className={
                                            orders.status == `On Hold` ? 'bg-red-100 p-2 flex items-center justify-center rounded-lg mr-20' :
                                                orders.status == `Approved` ? 'bg-green-100 p-2 flex items-center justify-center rounded-lg mr-20' :
                                                    orders.status == `Processing` ? 'bg-gray-100 p-2 flex items-center justify-center rounded-lg mr-20' :
                                                        orders.status == `Pending` ? 'bg-yellow-100 p-2 flex items-center justify-center roundedn-lg mr-20' : ''
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