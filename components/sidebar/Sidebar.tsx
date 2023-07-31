import React from 'react'
import DesktopSideBar from './DesktopSideBar'
import getCurrentUser from '@/app/actions/getCurrentUser'
import MobileNavBar from './MobileNavBar'

export default async function Sidebar({ children }: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <div className='flex h-full'>
      <DesktopSideBar />
      <div className='w-full flex flex-col'>
        <main className="h-full bg-black flex-1 overflow-y-auto py-2">
          {children}
        </main>
        <MobileNavBar />
      </div>
    </div>
  )
}