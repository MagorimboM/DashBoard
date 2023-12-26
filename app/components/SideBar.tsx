import react from 'react';
import Header from '@/app/components/Header'
import Link from 'next/link'
import Image from 'next/image'
import { MdDiamond } from "react-icons/md";
import { VscDashboard } from "react-icons/vsc";
import { RiContactsFill } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";



function SideBar() {
    
    return (
        <nav className='p-4 top-0 left-0 scroll overflow-scroll flex flex-col items-center justify-between h-screen w-20 text-black bg-white border-r-[1px]'>
        <div className='flex flex-col '>
            <div className='flex flex-col items-center justify-center'>
                <Link href='/'><div className='bg-purple-800 text-white p-3 transition-colors rounded-lg inline-block hover:bg-purple-400 cursor-pointer'><MdDiamond size={ 20} /></div></Link>
            </div>
            <span className='border-b-[1px] border-gray-200 w-full p-3'></span>
            <div className='flex flex-col items-center justify-center'>
                    <Link href='/'> <div className='bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer my-4 p-3 rounded-lg inline-block'><VscDashboard size={20} /></div></Link>
            </div>
            <div className='flex flex-col items-center justify-center'>
                    <Link href='/customers'><div className='bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer my-4 p-3 rounded-lg inline-block'><RiContactsFill /></div></Link>
            </div>
            <div className='flex flex-col items-center justify-center'>
                    <Link href='/orders'><div className='bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer my-4 p-3 rounded-lg inline-block'><HiOutlineShoppingBag size={20} /></div></Link>
            </div>
            <div className='flex flex-col items-center justify-center'>
                    <Link href='/'><div className='bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer my-4 p-3 rounded-lg inline-block'><IoIosSettings size={20} /></div></Link>
                </div>
                
            </div>
            <div className='flex flex-col w-full my-4 rounded-lg border '>
                <Link href='/'><div><Image className='rounded-lg' width={200} height={200}  alt='profile pic' src="/profile.jpg"/></div></Link>
            </div>    
    </nav>
    );
};

export default SideBar; 