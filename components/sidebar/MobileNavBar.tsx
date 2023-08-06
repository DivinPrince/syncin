'use client'
import useRoutes from '@/hooks/useRoutes'
import React from 'react'
import { MobileItem } from './MobileItem'
import useConversation from '@/hooks/useConversation'
import clsx from 'clsx'

const MobileNavBar = () => {

   const routes = useRoutes()
   const {isOpen} = useConversation()

  return (
    <div
        className={clsx('flex md:hidden flex-col gap-y-2 bg-black pb-2',isOpen && 'hidden')}
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