import Link from 'next/link'
import React from 'react'

interface ItemProps {
   icon: any,
   label: string,
   active: boolean,
   href: string,
   onClick?: () => void
}

export const MobileItem: React.FC<ItemProps> = ({
   icon: Icon,
   label,
   active,
   href
}) => {
   return (
      <Link
         href={href}
         className="
              rounded-full 
              p-2 
              bg-white 
              flex 
              items-center 
              justify-center 
              cursor-pointer 
              hover:opacity-75 
              transition
              m-0
              text-black
              "
      >
         <Icon/>
      </Link>
   )
}
