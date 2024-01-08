'use client'
import cn from '@/utils/cn';
import { VariantProps, cva } from 'class-variance-authority'
import { ClassValue } from 'clsx';
import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{
    children:ReactNode;
}

const Button = ({children, className,variant,size, ...props}: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({default:'primary', variant, size, className}))}>
        {children}
    </button>
  )
}

export default Button;

 const buttonVariants = cva('',{
    variants:{
        default:{
            primary:'flex justify-center rounded-full items-center focus:bg-[rgba(11,20,26,0.1)]',
        },
        variant:{
            primary:'',
        },
        size:{
            sm:'p-1',
            md:'p-[0.6rem]',
            lg:'p-4',
        },
    },
    defaultVariants:{
        default:'primary',
        variant:'primary',
        size:'md'
    }
 });