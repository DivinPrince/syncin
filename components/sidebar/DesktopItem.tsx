import { clsx } from 'clsx'
import Link from 'next/link'
import React from 'react'
interface ItemProps {
   icon: any,
   label: string,
   active: boolean,
   href: string,
   onClick?: () => void
}
const SideItem: React.FC<ItemProps> = ({
   icon: Icon,
   label,
   active,
   href
}) => {
   return (
      <Link href={href} className={clsx(`
      flex 
        flex-row 
        h-auto 
        items-center 
        w-full 
        gap-x-4 
        text-md 
        font-medium
        cursor-pointer
        hover:text-white
        transition
        text-neutral-400
        py-1
      `,
         active && 'text-white'
      )}>
         <Icon size={26} className="h-6 w-6" />
         <p className='truncate w-full'>{label}</p>
      </Link>
   )
}

export default SideItem