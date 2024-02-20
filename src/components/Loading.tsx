'use client'
import React from 'react'

const Loading = () => {
  return (
    <div className=" text-[rgb(221, 255, 204)] relative inline-block w-20 h-20">
        <div style={{animationDelay:'-1.1s'}} className='after:bg-[#80c25f] after:w-[0.35rem] after:h-5 after:rounded-[20%] block after:absolute after:top-1 after:left-10 origin-[40px_40px] animate-loading transform rotate-[0deg]'></div>
        <div style={{animationDelay:'-1.0s'}} className='after:bg-[#80c25f] after:w-[0.35rem] after:h-5 after:rounded-[20%] block after:absolute after:top-1 after:left-10 origin-[40px_40px] animate-loading transform rotate-[30deg]'></div>
        <div style={{animationDelay:'-0.9s'}} className='after:bg-[#80c25f] after:w-[0.35rem] after:h-5 after:rounded-[20%] block after:absolute after:top-1 after:left-10 origin-[40px_40px] animate-loading transform rotate-[60deg]'></div>
        <div style={{animationDelay:'-0.8s'}} className='after:bg-[#80c25f] after:w-[0.35rem] after:h-5 after:rounded-[20%] block after:absolute after:top-1 after:left-10 origin-[40px_40px] animate-loading transform rotate-[90deg]'></div>
        <div style={{animationDelay:'-0.7s'}} className='after:bg-[#80c25f] after:w-[0.35rem] after:h-5 after:rounded-[20%] block after:absolute after:top-1 after:left-10 origin-[40px_40px] animate-loading transform rotate-[120deg]'></div>
        <div style={{animationDelay:'-0.6s'}} className='after:bg-[#80c25f] after:w-[0.35rem] after:h-5 after:rounded-[20%] block after:absolute after:top-1 after:left-10 origin-[40px_40px] animate-loading transform rotate-[150deg]'></div>
        <div style={{animationDelay:'-0.5s'}} className='after:bg-[#80c25f] after:w-[0.35rem] after:h-5 after:rounded-[20%] block after:absolute after:top-1 after:left-10 origin-[40px_40px] animate-loading transform rotate-[180deg]'></div>
        <div style={{animationDelay:'-0.4s'}} className='after:bg-[#80c25f] after:w-[0.35rem] after:h-5 after:rounded-[20%] block after:absolute after:top-1 after:left-10 origin-[40px_40px] animate-loading transform rotate-[210deg]'></div>
        <div style={{animationDelay:'-0.3s'}} className='after:bg-[#80c25f] after:w-[0.35rem] after:h-5 after:rounded-[20%] block after:absolute after:top-1 after:left-10 origin-[40px_40px] animate-loading transform rotate-[240deg]'></div>
        <div style={{animationDelay:'-0.2s'}} className='after:bg-[#80c25f] after:w-[0.35rem] after:h-5 after:rounded-[20%] block after:absolute after:top-1 after:left-10 origin-[40px_40px] animate-loading transform rotate-[270deg]'></div>
        <div style={{animationDelay:'-0.1s'}} className='after:bg-[#80c25f] after:w-[0.35rem] after:h-5 after:rounded-[20%] block after:absolute after:top-1 after:left-10 origin-[40px_40px] animate-loading transform rotate-[300deg]'></div>
        <div style={{animationDelay:'0s'}}    className='after:bg-[#80c25f] after:w-[0.35rem] after:h-5 after:rounded-[20%] block after:absolute after:top-1 after:left-10 origin-[40px_40px] animate-loading transform rotate-[330deg]'></div>
    </div>
  )
}

export default Loading