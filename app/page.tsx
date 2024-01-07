import Header from '@/app/components/Header'
import SideBar from '@/app/components/SideBar'
import TopCard from './components/TopCard'
import BarChart from './components/BarChart';
import RecentOrder from './components/RecentOrder';




export default function Home() {

  return (
    <main className='flex flex-row w-screen h-screen bg-gray-200 scroll overflow-scroll'>
      <div id='sideBar'><SideBar /></div>
      <div className='w-full flex flex-col'>
        <Header />
        <TopCard />
        <div className='h-full w-full grid grid-col-1 items-center justify-center md:grid-cols-2 lg:grid-cols-2 text-black p-4 g-4 scroll overflow-y-scroll'>
          <BarChart />
          <RecentOrder />
        </div>
      </div>
    </main >
  );
};

