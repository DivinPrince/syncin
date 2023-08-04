import React from 'react'

import Header from './components/Header';
import getCurrentUser from '@/app/actions/getCurrentUser';
import { Body } from './components/Body';

export default async function page() {

   const currentUser = await getCurrentUser()
  return (
    <div className='has-scrollbar bg-neutral-900 rounded-[5px] h-full w-full overflow-y-auto'>
      <Header currentUser={currentUser!}/>
      <Body />
    </div>
  )
}
