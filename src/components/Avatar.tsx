'use client'
import Image from 'next/image'
import React, { FC } from 'react'
import avatarPlaceholder from '@/styles/assets/avatar-placeholder.png'
import cn from '@/utils/cn';


interface AvatarProps{
    src:string|null|undefined;
    size:number;
    alt:string;
    className?:string;
}

const Avatar:FC<AvatarProps> = ({src,size,alt,className}) => {
  return (
    <Image
    className={cn('aspect-square rounded-full object-center object-cover w-14 h-14',className)}
    width={size}
    height={size}
     src={src|| avatarPlaceholder} alt={alt}    
     />
    )
}

export default Avatar