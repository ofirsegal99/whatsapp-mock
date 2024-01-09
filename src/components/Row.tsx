'use server'
import cn from '@/utils/cn';
import { VariantProps, cva } from 'class-variance-authority'
import React, { HTMLAttributes, ReactNode } from 'react'

interface RowProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof backgroundColorVariants>{
    children:ReactNode;
}

const Row = async ({variant,className,children,...props} : RowProps) => {
  return (
    <div className={cn(['flex flex-col w-full',orientationVariants({variant})])} {...props}>
        <div className={cn(['max-w-[65%] flex flex-col gap-1 rounded-lg py-2 px-3 text-base w-fit relative',borderRadiusVariants({variant}),backgroundColorVariants({variant})])}>
            <span className={cn(['absolute top-0',tagVariants({variant})])}>
                <svg viewBox="0 0 8 13" height="13" width="8" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 8 13"><title>tail-in</title><path opacity="0.13" fill="#0000000" d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"></path><path fill={cn(fillVariants({variant}))} d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path></svg>
            </span>
            <p className='text-base font-medium'>
                {children}
            </p>
             <div className={cn(['flex w-full gap-2 items-center',timeVariants({variant})])}>   
                 <svg className=' w-[0.6rem] fill-WDS-warm-gray-500' viewBox="0 0 12 11" height="11" width="16" preserveAspectRatio="xMidYMid meet" fill="none"><title>msg-check</title><path d="M11.1549 0.652832C11.0745 0.585124 10.9729 0.55127 10.8502 0.55127C10.7021 0.55127 10.5751 0.610514 10.4693 0.729004L4.28038 8.36523L1.87461 6.09277C1.8323 6.04622 1.78151 6.01025 1.72227 5.98486C1.66303 5.95947 1.60166 5.94678 1.53819 5.94678C1.407 5.94678 1.29275 5.99544 1.19541 6.09277L0.884379 6.40381C0.79128 6.49268 0.744731 6.60482 0.744731 6.74023C0.744731 6.87565 0.79128 6.98991 0.884379 7.08301L3.88047 10.0791C4.02859 10.2145 4.19574 10.2822 4.38194 10.2822C4.48773 10.2822 4.58929 10.259 4.68663 10.2124C4.78396 10.1659 4.86436 10.1003 4.92784 10.0156L11.5738 1.59863C11.6458 1.5013 11.6817 1.40186 11.6817 1.30029C11.6817 1.14372 11.6183 1.01888 11.4913 0.925781L11.1549 0.652832Z" ></path></svg>
                  <span className='flex text-xs leading-3 font-medium text-WDS-warm-gray-500'>
                      12:01 AM
                  </span>
            </div>
        </div>
    </div>
  )
}

export default Row;

const backgroundColorVariants = cva('',{
    variants:{
        variant:{
            primary:'bg-[#b4edaa]',
            secondary:'bg-[#fff]'
            }
    },
    defaultVariants:{
        variant:'primary',
    }
})

const fillVariants = cva('',{
    variants:{
        variant:{
            primary:'#b4edaa',
            secondary:'#fff'
            }
    },
    defaultVariants:{
        variant:'primary',
    }
})

const tagVariants = cva('',{
    variants:{
        variant:{
            primary:'-left-2',
            secondary:'-right-2 scale-x-[-1]'
            }
    },
    defaultVariants:{
        variant:'primary'
    }
})

const borderRadiusVariants = cva('',{
    variants:{
        variant:{
            primary:'rounded-tl-none',
            secondary:'rounded-tr-none'
            }
    },
    defaultVariants:{
        variant:'primary'
    }
})

const orientationVariants = cva('',{
    variants:{
        variant:{
            primary:'items-start',
            secondary:'items-end'
            }
    },
    defaultVariants:{
        variant:'primary'
    }
})


const timeVariants = cva('',{
    variants:{
        variant:{
            primary:'justify-start',
            secondary:'justify-end'
            }
    },
    defaultVariants:{
        variant:'primary'
    }
})
