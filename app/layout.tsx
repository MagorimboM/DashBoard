import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SideBar from './components/SideBar';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Mark's dashboard`,
  description: 'Created by Mark M',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='flex-grow'>
          {children}
          </main>
      </body>
    </html>
  )
}; 
