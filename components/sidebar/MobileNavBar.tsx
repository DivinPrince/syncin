'use client'
import useRoutes from '@/hooks/useRoutes'
import React from 'react'
import { MobileItem } from './MobileItem'

const MobileNavBar = () => {

   const routes = useRoutes()

  return (
    <div
        className='flex md:hidden flex-col gap-y-2 bg-black pb-2'
    >
        <div className='bg-neutral-900 rounded-[5px] w-full'>
           <div className="flex md:hidden gap-x-2 items-center justify-between p-2">
              {routes.map((item) => (
                 <MobileItem
                    key={item.label}
                    {...item}
                 />
              ))

              }
           </div>
         </div>
   </div>
  )
}

export default MobileNavBar