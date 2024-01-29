'use client'
import { Menu, Transition } from '@headlessui/react'
import React from 'react';
import { FC, Fragment, ReactNode, useEffect, useRef, useState } from 'react'

interface DropdownProps{
    children:ReactNode;
    items:ReactNode[];
}

const Dropdown:FC<DropdownProps> = ({children,items}) => {
  return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button as='span'>
            {children}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-30 right-0 mt-2 flex flex-col origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none py-4">
            {items.map((curr,i) => {
                return(
                    <Menu.Item key={i}>
                    <div
                      className='flex hover:bg-WDS-cool-gray-100 text-base text-nowrap px-6 py-3 min-w-max'
                    >
                      {curr}
                    </div>
                </Menu.Item>
                )
            })}
          </Menu.Items>
        </Transition>
      </Menu>
  )
}


export default Dropdown;