import React from 'react'

const TopCard = () => {



    return (
       
            <div className='left-20 w-full border-4 grid lg:grid-cols-3 gap-4 p-4'>
                <div className='border lg:col-span-1 bg-white flex justify-between border w-full p-4 rounded-lg'>
                    <div className=' flex-col w-full pb-4'>
                        <p className=' text-2xl text-black font-bold'>$5 8003</p>
                        <p className=' text-gray-600 font-bold'> Daily Revenue</p>

                    </div>
                    <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                        <span className='text-green-700 text-lg'>+18%</span>
                    </p>
                </div>
                <div className='lg:col-span-1 col-span-1 bg-white flex justify-between border w-full p-4 rounded-lg'>
                    <div className='flex flex-col w-full pb-4'>
                        <p className='text-2xl text-black font-bold'>$1,345, 8003</p>
                        <p className='text-gray-600 font-bold'> YTD Revenue</p>

                    </div>
                    <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                        <span className='text-green-700 text-lg'>+11%</span>
                    </p>
                </div>
                
                <div className='lg:col-span-1 col-span-1 bg-white flex justify-between border w-full p-4 rounded-lg'>
                    <div className='flex flex-col w-full pb-4'>
                        <p className='text-2xl text-black font-bold'>8,003</p>
                        <p className='text-gray-600 font-bold'>Customers</p>

                    </div>
                    <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                        <span className='text-green-700 text-lg'>+17%</span>
                    </p>
                </div>
               
            </div>
       
    );
};

export default TopCard; 