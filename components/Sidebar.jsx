import Link from 'next/link'
import React from 'react'
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'


// use children props to display the main component of the app
const Sidebar = ({children}) => {
  return (
    <div className='flex '>
        <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>

            {/* sidebar for dashboard */}
            <div className='flex flex-col items-center'>

                {/* home redirect link for dashboard */}

                    <Link href='/'>
                        <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                            <RxSketchLogo size={20} />
                        </div>
                    </Link>

                    {/* span for spacing between home link and other links  */}
                    
                    <span className='border-b-[1px] border-gray-200 w-full p-2'></span>

                    {/*  Dashboard*/}

                    <Link href='/'>
                        <div className='bg-gray-100 cursor-pointer hover:bg-gray-200 my-4 p-3 rounded-lg inline-block active:bg-gray-200'>
                            <RxDashboard size={20} />
                        </div>
                    </Link>

                    {/* Person*/}

                    <Link href='/customers'>
                        <div className='bg-gray-100 cursor-pointer hover:bg-gray-200 my-4 p-3 rounded-lg inline-block active:bg-gray-200'>
                            <RxPerson size={20} />
                        </div>
                    </Link>

                    {/*  shopping */}

                    <Link href='/orders'>
                        <div className='bg-gray-100 cursor-pointer hover:bg-gray-200 my-4 p-3 rounded-lg inline-block active:bg-gray-200'>
                            <HiOutlineShoppingBag size={20} />
                        </div>
                    </Link>

                    {/*  settings */}

                    <Link href='/settings'>
                        <div className='bg-gray-100 cursor-pointer hover:bg-gray-200 my-4 p-3 rounded-lg inline-block active:bg-gray-200'>
                            <FiSettings size={20} />
                        </div>
                    </Link>
            </div>
        </div>
        
        {/* main app display with the children props */}
        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar