'use client'
import React from 'react'

interface DateHeaderProps{
    text:string;
}

const DateHeader = ({text}:DateHeaderProps) => {
  return (
    <div className='flex flex-col w-full items-center justify-center sticky bottom-0'>
        <span className=' bg-WDS-white-alpha-default p-3 shadow-md rounded-lg'>
            {text}
        </span>
    </div>
  )
}

export default DateHeader