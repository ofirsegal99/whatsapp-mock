'use server'
import Image from 'next/image'
import React from 'react'
import RegisterImage from '@/styles/assets/login_background.png';
import Form from '@/app/register/form';
import Link from 'next/link';

const Register = async () => {
  return (
    <div className='flex items-center justify-evenly py-24 px-24 bg-[#F6F6F6] z-20 absolute h-[calc(100%)] w-[calc(100%)] top-1/2 right-1/2 translate-x-1/2 translate-y-[-50%]'>
        <div className='flex flex-col self-start pt-48'>
          <div className=' relative'>
            <div className=' w-72 h-72 blur-[5rem] absolute bg-[#DDA82A] top-[-7rem] left-[-5rem] opacity-45 z-30'/>
            <div className=' w-72 h-72 blur-[5rem] absolute bg-[#4461F2] top-[7rem] left-[5rem] opacity-45 z-30'/>
               <div className='flex flex-col gap-14 w-full relative z-40'>
                 <h3 className='flex flex-col gap-4'>
                   <span className=' text-4xl text-WDS-warm-gray-800 font-bold'>
                   Register to
                   </span>
                   <span className=' text-4xl text-WDS-warm-gray-800 font-bold'>
                     Whatsapp Mock
                   </span>
                 </h3>
                 <p className='flex flex-col gap-1'>
                   <span className=' text-sm font-semibold'>
                   Already have an account? 
                   </span>
                   <span className='text-sm font-semibold flex gap-1'>
                   you can 
                     <Link href={'/login'} className=' text-sm font-semibold text-WDS-sky-blue-400'>
                     Login here!
                     </Link>
                  </span> 
                 </p>
               </div>
          </div>

        </div>
        <div className='flex flex-col'>
          <Image height={38.92857*12} width={32.07143*12} src={RegisterImage} alt={'login floating man'}/>
        </div>
        <Form/>
    </div>
  )
}

export default Register