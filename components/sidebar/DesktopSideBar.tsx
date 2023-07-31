'use client'
import React from 'react'
import SideItem from './DesktopItem'
import useRoutes from '@/hooks/useRoutes'
import { signOut } from 'next-auth/react'

const DesktopSideBar = () => {
   const routes = useRoutes()

  return (
        <div className='hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2'>
           <div className='bg-neutral-900 rounded-[5px] h-full w-full'>
              <div className='flex flex-col gap-y-4 px-5 py-4'>
                 {routes.map((item) => (
                    <SideItem
                       key={item.label}
                       {...item}
                    />
                 ))

                 }
              </div>
           </div>
           <div className='bg-neutral-900 rounded-[5px] h-fit overflow-y-hidden w-full'>
            <div className='h-[40px] flex justify-center items-center'>
              <p className='text-neutral-400 text-[13px]'>© 2023 dp_codes</p>
            </div>
           </div>
        </div>
  )
}

{/* <div className='flex h-full'>
   
      <div className='flex flex-col gap-y-4 px-5 py-4'>
         {routes.map((item) => (
            <SideItem
               key={item.label}
               {...item}
            />
         ))

         }
      </div>
   </div>
   <div className='bg-neutral-900 rounded-lg h-full overflow-y-auto w-full'>

   </div>
   </div> */}

export default DesktopSideBar
