import AuthForm from '@/components/AuthForm'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div
      className="
        flex
        h-[100vh]
        flex-col
        justify-center
        py-12
        sm:px-6
        lg: px-8
        bg-neutral-900
      "
    >
      <AuthForm />
    </div>
  );
}
