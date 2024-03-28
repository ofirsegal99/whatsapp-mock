'use client'
import React, {HTMLAttributes } from 'react'

interface LoadingProps extends HTMLAttributes <HTMLDivElement>{
}

const SmallLoading = ({...props}:LoadingProps) => {
  return (
    <div className={`relative inline-block w-5 h-5`} {...props}>
        <div style={{animationDelay:'-1.1s'}} className={`after:bg-[#4c6857] after:w-[0.0875rem] after:h-[0.3125rem] after:rounded-[20%] block after:absolute after:top-[0.0625rem] after:left-[0.625rem]  origin-[10px_10px] animate-loading transform rotate-[0deg]`}></div>
        <div style={{animationDelay:'-1.0s'}} className={`after:bg-[#4c6857] after:w-[0.0875rem] after:h-[0.3125rem] after:rounded-[20%] block after:absolute after:top-[0.0625rem] after:left-[0.625rem]  origin-[10px_10px] animate-loading transform rotate-[30deg]`}></div>
        <div style={{animationDelay:'-0.9s'}} className={`after:bg-[#4c6857] after:w-[0.0875rem] after:h-[0.3125rem] after:rounded-[20%] block after:absolute after:top-[0.0625rem] after:left-[0.625rem]  origin-[10px_10px] animate-loading transform rotate-[60deg]`}></div>
        <div style={{animationDelay:'-0.8s'}} className={`after:bg-[#4c6857] after:w-[0.0875rem] after:h-[0.3125rem] after:rounded-[20%] block after:absolute after:top-[0.0625rem] after:left-[0.625rem]  origin-[10px_10px] animate-loading transform rotate-[90deg]`}></div>
        <div style={{animationDelay:'-0.7s'}} className={`after:bg-[#4c6857] after:w-[0.0875rem] after:h-[0.3125rem] after:rounded-[20%] block after:absolute after:top-[0.0625rem] after:left-[0.625rem]  origin-[10px_10px] animate-loading transform rotate-[120deg]`}></div>
        <div style={{animationDelay:'-0.6s'}} className={`after:bg-[#4c6857] after:w-[0.0875rem] after:h-[0.3125rem] after:rounded-[20%] block after:absolute after:top-[0.0625rem] after:left-[0.625rem]  origin-[10px_10px] animate-loading transform rotate-[150deg]`}></div>
        <div style={{animationDelay:'-0.5s'}} className={`after:bg-[#4c6857] after:w-[0.0875rem] after:h-[0.3125rem] after:rounded-[20%] block after:absolute after:top-[0.0625rem] after:left-[0.625rem]  origin-[10px_10px] animate-loading transform rotate-[180deg]`}></div>
        <div style={{animationDelay:'-0.4s'}} className={`after:bg-[#4c6857] after:w-[0.0875rem] after:h-[0.3125rem] after:rounded-[20%] block after:absolute after:top-[0.0625rem] after:left-[0.625rem]  origin-[10px_10px] animate-loading transform rotate-[210deg]`}></div>
        <div style={{animationDelay:'-0.3s'}} className={`after:bg-[#4c6857] after:w-[0.0875rem] after:h-[0.3125rem] after:rounded-[20%] block after:absolute after:top-[0.0625rem] after:left-[0.625rem]  origin-[10px_10px] animate-loading transform rotate-[240deg]`}></div>
        <div style={{animationDelay:'-0.2s'}} className={`after:bg-[#4c6857] after:w-[0.0875rem] after:h-[0.3125rem] after:rounded-[20%] block after:absolute after:top-[0.0625rem] after:left-[0.625rem]  origin-[10px_10px] animate-loading transform rotate-[270deg]`}></div>
        <div style={{animationDelay:'-0.1s'}} className={`after:bg-[#4c6857] after:w-[0.0875rem] after:h-[0.3125rem] after:rounded-[20%] block after:absolute after:top-[0.0625rem] after:left-[0.625rem]  origin-[10px_10px] animate-loading transform rotate-[300deg]`}></div>
        <div style={{animationDelay:'0s'}}    className={`after:bg-[#4c6857] after:w-[0.0875rem] after:h-[0.3125rem] after:rounded-[20%] block after:absolute after:top-[0.0625rem] after:left-[0.625rem]  origin-[10px_10px] animate-loading transform rotate-[330deg]`}></div>
    </div>
  )
}

export default SmallLoading;