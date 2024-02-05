'use client'
import { getUsersWithoutConversation } from '@/actions/user';
import { Dialog as Headless_UI_Dialog, Transition } from '@headlessui/react'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import avatarPlaceholder from '@/styles/assets/avatar-placeholder.png'
import React from 'react';
import { FC, Fragment, ReactNode, useEffect, useState } from 'react'

interface DialogProps{
    children:ReactNode;
    title:string;
}

const Dialog:FC<DialogProps> = ({children,title}) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


function reorder(list:Contact[]){
  const sortedList:Contact[] = list.slice().sort((a, b) => a.name.localeCompare(b.name));
  return sortedList;
}

function addLetter(list:Contact[]):ContactWithLetter[]{
  const result: ContactWithLetter[] = [];
  let currentLetter = '';

  for (const contact of list) {
    const firstLetter = contact.name.charAt(0).toUpperCase();

    if (firstLetter !== currentLetter) {
      result.push({ letter: firstLetter, type:'Letter'});
      currentLetter = firstLetter;
    }

    result.push(contact);
  }
  const addedLettersList:ContactWithLetter[] = result
  return addedLettersList;
}

  function reorderAndAddLetters(list:Contact[]){
    return addLetter(reorder(list))
  }

  const {data:session} = useSession();
  const [users, setUsers] = useState<ContactWithLetter[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const result = await getUsersWithoutConversation(session?.user?.email);
        if(!result) return null;
         const usersWithContactType:Contact[] = result.map((user) => ({
           ...user,
           type: 'Contact',
         }));
        setUsers(reorderAndAddLetters(usersWithContactType));
      }
      catch(error){
        console.log('Error fetching data',error)
      }
    };
    fetchData();
    return (
      () => {
        setUsers(null);
      }
    )
  },[])

  return (
    <>
        <span
          onClick={openModal}
        >
          {children}
        </span>
      <Transition appear show={isOpen} as={Fragment}>
        <Headless_UI_Dialog as="div"  className="absolute z-30  h-[calc(100%-2.375rem)] w-[calc(100%-2.375rem)] top-1/2 right-1/2 translate-x-1/2 translate-y-[-50%] flex" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Headless_UI_Dialog.Panel className="w-3/12 transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                    <div className='flex items-center justify-start gap-3 bg-WDS-green-600 px-4 py-10'>
                       <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none"
                          onClick={closeModal}
                        >
                             <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>back</title><path fill="white" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg>
                        </button>
                        <Headless_UI_Dialog.Title
                        as="h3"
                        className="text-xl font-semibold leading-6 text-WDS-white-alpha-default"
                      >
                        {title}    
                       </Headless_UI_Dialog.Title>
                    </div>
                  <div className=" flex flex-col py-4 h-full">
                    <div className="pl-4 py-2 text-base font-normal tracking-wide text-WDS-green-600">
                    Contacts on WHATSAPP
                    </div>
                    <div className=' flex flex-col'>
                      {users?.map((item,index) => {
                        return(
                          <React.Fragment key={index}>
                            {
                              item.type === 'Letter' ? 
                              (
                                <div className='flex items-center justify-start divide-y-reverse divide-y divide-WDS-cool-gray-100 divide-solid pl-4 gap-4'>
                                  <div className='flex flex-col px-4 py-4 text-lg text-WDS-warm-gray-400 justify-start items-start font-medium w-full'>
                                    {item.letter}
                                  </div>
                                </div>
                              )
                              :
                              (
                               <button className='flex items-center justify-start divide-y-reverse divide-y divide-WDS-cool-gray-100 divide-solid  hover:bg-WDS-cool-gray-100 pl-4 gap-4'>
                                 <div>
                                   <Image className='rounded-full w-14 h-14 object-cover object-center' src={item.image || avatarPlaceholder } height={200} width={200} alt={`${item.name}-image`}/>
                                 </div>
                                 <div className='flex flex-col py-4 justify-start items-start w-full'>
                                    <p className=' text-base text-WDS-warm-gray-1000 font-medium'>
                                      {item.name}
                                    </p>
                                   <p className=' text-sm text-WDS-neutral-gray-400'>
                                      {'Hey there! I am using Whatsapp.'}
                                    </p>
                                 </div>
                               </button>
                              )
                            }
                            
                          </React.Fragment>
                        )
                      })}
                    </div>
                  </div>
                </Headless_UI_Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Headless_UI_Dialog>
      </Transition>
    </>
  )
}

export default Dialog;