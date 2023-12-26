import Header from '@/app/components/Header'
import SideBar from '@/app/components/SideBar'
import TopCard from './components/TopCard'
import BarChart from './components/BarChart';
import RecentOrder from './components/RecentOrder';




export default function Home() {

  return (
    <main className='p-4 flex flex-row w-screen h-screen bg-gray-200 scroll overflow-scroll'> 
      <div className='w-full flex flex-col'>
        <Header />
        <TopCard />
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 text-black justify-between w-full border-4 border-red-200 p-4 g-4 place-items-center scroll overflow-y-scroll'>
          <BarChart />
          <RecentOrder />
        </div>
      </div>
    </main >
  );
};

