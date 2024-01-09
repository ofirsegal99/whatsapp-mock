'use server'
import React from 'react'
import Image from 'next/image'
import WhatsappWelcome from '@/styles/assets/whatsapp_welcome.png'
const Home = () => {
  return (
    <div className='flex justify-center w-full relative p-[1.75rem]'>
          <div className='flex flex-col max-w-[35rem] justify-center items-center gap-8'>
            <Image className='w-[20rem]' src={WhatsappWelcome} alt={'whatsapp welcome image'}/>
            <h2 className='text-4xl text-center font-extrabold tracking-tight'>
            Have you still not downloaded WhatsApp for Windows?
            </h2>
            <p className='text-center text-base'>
            In the new app for Windows, you can make calls, share your screen, and enjoy a faster user experience - it's worth downloading!
            </p>
            <a href="wwww.whatsapp.com" className='rounded-full px-10 py-4 m-3 bg-WDS-green-500 hover:bg-WDS-green-800 text-WDS-white-alpha-default font-semibold hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out delay-150'>
                Download the application
            </a>
          </div>
          <div className='absolute bottom-[2.5rem] flex items-center gap-1.5'>
          <svg viewBox="0 0 10 12" height="12" width="10" preserveAspectRatio="xMidYMid meet" className='fill-WDS-cool-gray-400' version="1.1"><title>lock-small</title><path  className='fill-WDS-cool-gray-400' d="M5.00847986,1.6 C6.38255462,1.6 7.50937014,2.67435859 7.5940156,4.02703389 L7.59911976,4.1906399 L7.599,5.462 L7.75719976,5.46214385 C8.34167974,5.46214385 8.81591972,5.94158383 8.81591972,6.53126381 L8.81591972,9.8834238 C8.81591972,10.4731038 8.34167974,10.9525438 7.75719976,10.9525438 L2.25767996,10.9525438 C1.67527998,10.9525438 1.2,10.4731038 1.2,9.8834238 L1.2,6.53126381 C1.2,5.94158383 1.67423998,5.46214385 2.25767996,5.46214385 L2.416,5.462 L2.41679995,4.1906399 C2.41679995,2.81636129 3.49135449,1.68973395 4.84478101,1.60510326 L5.00847986,1.6 Z M5.00847986,2.84799995 C4.31163824,2.84799995 3.73624912,3.38200845 3.6709675,4.06160439 L3.6647999,4.1906399 L3.663,5.462 L6.35,5.462 L6.35111981,4.1906399 C6.35111981,3.53817142 5.88169076,2.99180999 5.26310845,2.87228506 L5.13749818,2.85416626 L5.00847986,2.84799995 Z" fill="currentColor"></path></svg>
            <span className='text-WDS-cool-gray-400'>
                Your personal messages are encrypted end-to-end
            </span>
          </div>
    </div>
  )
}

export default Home;